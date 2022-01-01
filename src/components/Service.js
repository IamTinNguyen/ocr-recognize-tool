import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';
import './Service.css';
import {storage} from './firebase'
import {ref, uploadBytesResumable, getDownloadURL} from '@firebase/storage';

function Service(props) {
    const [text, setText] = useState('');
    const [link,setLink] = useState('');
    const [plantName,setPlantName] = useState('');
    const [plantCommonName,setPlantCommonName] = useState('');
    const [plantDetails,setPlantDetails] = useState('');
    const [error,setError] = useState('');

    function handleChange(e) {
        setLink(e.target.value);
    }

    function process() {
        var serviceName = props.name;
        var url;
        console.log(link);
        console.log(serviceName);
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
                    <img style={{ display: 'none' }} src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg" alt="" />
                    <div>
                        <img style={{width: '500px', height: '200px', display:"none"}} alt="" />
                        <i className="m-2 upload-icon fas fa-cloud-upload-alt" />
                        <br />Input link to process<br />
                        <input id="default-btn" onChange={handleChange} type="text"/>
                    </div>
                </div>
                <button className="my-3 upload-btn btn" onClick={process}>Process</button>
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