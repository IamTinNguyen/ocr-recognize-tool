import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import './Service.css';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

function Service(props) {
    const [text, setText] = useState('');
    const [link,setLink] = useState(null);
    const [plantName,setPlantName] = useState('');
    const [plantCommonName,setPlantCommonName] = useState('');
    const [plantDetails,setPlantDetails] = useState('');
    const [error,setError] = useState('');
    const [display, setDisplay] = useState({display:'none'})
    const [progress, setProgress] = useState(0);
    const [className, setClassName] = useState({display:'block'});

    function displayImage() {
        if (link === null || link === '') {
            setDisplay({display:"none"})
        } else {
            setDisplay({display:"inline"})
        }
    }

    const formHandler = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        uploadImages(image);
        displayImage();
      };
    
    const uploadImages = (image) => {
        if (!image) return;
        const sotrageRef = ref(storage, `${image.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, image);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              setLink(downloadURL);
            });
          }
        );
    };

    function process() {
        var serviceName = props.name;
        var url;
        console.log(link);
        setClassName({display:'none'});
        console.log(className);
        setText('');
        setPlantName('');
        setPlantCommonName('');
        setPlantDetails('');
        setError('');
        if (serviceName === 'PLANT IDENTIFICATION'){
            url = 'https://api-flower-project.herokuapp.com/flower?f='+link;
        }
        else 
        {
            url = 'https://api-flower-project.herokuapp.com/text?s='+link;
        }
        axios({
            method: 'get',
            url: url,
            dataType: "json",
            headers: {
                "Content-Type": 'application/json; charset=UTF-8',
                "Accept" : "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            }
        })
        .then(response => {
            if (response.data.Text != null) {
                setText(response.data.Text);
                console.log(response.data.Text);
            }
            else if ((response.data.plantName != null) && (response.data.plantCommonName != null) && (response.data.plantDetails != null)) {
                setPlantName("Name: "+response.data.plantName);
                setPlantCommonName("Common name: " +response.data.plantCommonName);
                setPlantDetails("Details: "+response.data.plantDetails);
            }
            else {
                setError(response.data.error);
                console.log(response.data.error);
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
                    <img style={{display:"block"}} src={link} alt="" />
                    <div style={className}>

                        <img style={{display:"none"}} src={link || 'https://firebasestorage.googleapis.com/v0/b/midterm-project-7c6a0.appspot.com/o/imageonline-co-placeholder-image.jpg?alt=media&token=4ddad61b-7249-4b35-a9a7-b5e2c739fe93'} alt="Your image" />
                        <i className="m-2 upload-icon fas fa-cloud-upload-alt" />
                        <p />Input URL to process<p />
                        <input id="default-btn" onChange={formHandler} type="file"/>
                    </div>
                </div>
                <button className="my-3 upload-btn btn" onClick={process}>Click here to upload your file</button>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="image">
                    <div>
                    <p>{text || plantName || error}</p>
                    <p>{'' || plantCommonName}</p>
                    <p>{'' || plantDetails}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;