import axios from 'axios';
import { useState, useRef } from 'react/cjs/react.development';
import './Service.css';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

function Service(props) {
    const [text, setText] = useState('');
    const [link, setLink] = useState(null);
    const [plantName, setPlantName] = useState('');
    const [plantCommonName, setPlantCommonName] = useState('');
    const [plantDetails, setPlantDetails] = useState('');
    const [error, setError] = useState('');
    const [className, setClassName] = useState({ display: 'block' });
    const [resultClassName, setResultClassName] = useState({ display: 'none'});
    const inputFile = useRef(null)

    const formHandler = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        uploadImages(image);
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const uploadImages = (image) => {
        if (!image) return;
        const sotrageRef = ref(storage, `${image.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLink(downloadURL);
                    setClassName({ display: 'none' });
                    setResultClassName({display: 'block', marginLeft: '30px', marginRight: '30px'});
                    process(downloadURL);
                });
            }
        );
    };

    function process(link) {
        var serviceName = props.name;
        var url;
        setText('');
        setPlantName('');
        setPlantCommonName('');
        setPlantDetails('');
        setError('');
        if (serviceName === 'PLANT IDENTIFICATION') {
            url = 'https://api-flower-project.herokuapp.com/flower?f=' + link;
        }
        else {
            url = 'https://api-flower-project.herokuapp.com/text?s=' + link;
        }
        axios({
            method: 'get',
            url: url,
            dataType: "json",
            headers: {
                "Content-Type": 'application/json; charset=UTF-8',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            }
        })
            .then(response => {
                if (response.data.Text != null) {
                    setText(response.data.Text);
                    setResultClassName({display: 'block', marginLeft: '30px', marginRight: '30px'});
                }
                else if ((response.data.plantName != null) && (response.data.plantCommonName != null) && (response.data.plantDetails != null)) {
                    setPlantName(response.data.plantName);
                    setPlantCommonName(response.data.plantCommonName);
                    setPlantDetails(response.data.plantDetails);
                    setResultClassName({flex: '1', display: 'block', marginLeft: '30px', marginRight: '30px'});
                }
                else {
                    setError(response.data.error);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div className="row card-detail-row">
            <div className="col-12 mt-3 mb-1">
                <h2 id='service'>{props.name}</h2>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="image">
                    <img style={{ display: "block" }} src={link} alt="" />
                    <div style={className}>
                        <img style={{ display: "none" }} src={link} alt="" />
                        <i className="m-1 upload-icon fas fa-cloud-upload-alt" />
                        <div />Please select a file <br /> to begin the process!<div />
                        <input id="default-btn" onChange={formHandler} ref={inputFile} type="file" hidden />
                    </div>
                </div>
                <button className="my-3 upload-btn btn" onClick={onButtonClick}>Choose a file</button>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="image">
                    <div style={className}>
                        Once you upload your image, <br />the result will appear here.
                    </div>
                    <div style={resultClassName}>
                        <p style={{fontWeight:'bold', textTransform:'uppercase', textDecoration:'underline'}}>Result </p>
                        <p style={{fontWeight:'bold', textTransform:'uppercase', textAlign: 'justify'}}>{plantName ? 'plant Name:' : ''}</p>
                        <p style={{ textAlign: 'justify'}}>{text || plantName || error}</p>
                        <div className="mb-2" style={{height:props.hr, backgroundColor:'#e5e5e5'}}></div>

                        <p style={{fontWeight:'bold', textTransform:'uppercase', textAlign: 'justify'}}>{plantCommonName ? 'plant Common name:' : ''}</p>
                        <p style={{ textAlign: 'justify'}}>{'' || plantCommonName}</p>
                        <div className="mb-2" style={{height:props.hr, backgroundColor:'#e5e5e5'}}></div>

                        <p style={{fontWeight:'bold', textTransform:'uppercase', textAlign: 'justify'}}>{plantDetails ? 'plant details:' : ''}</p>
                        <p style={{ textAlign: 'justify'}}>{'' || plantDetails}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;