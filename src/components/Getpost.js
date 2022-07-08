import React, { Component } from 'react';
import "../Assets/Home.css";
import axios from "axios";

let config = { Authorization: "AQWee9-P-PZHVCypoHnoHBCrJYHOsdWjn2ru-iFiRndFcFHkZpsIvzHYQMGZofXJ1cq3af_cOvruiitDMiMbxwa7n8JZcqTxpl01tFh_l2mEotsV-7aFikuoptN7aXcpvCdYjJbq90WKGFKQXRm_KChpCsX_9VC2dDH-dGGsenIn63cwAPMQ8EppvxqCoPnnm7mIYnvTzhQsufCJKiVIACvdV0fDjAf-6m0eB6dHU1ipT4QHgA2HdS87IFxvXk4XK8tMoPyk3EQidqTzpE__PKdtZRSvigKi8C4r41oYtN-kzYWEVBHoCjOxp4QXhnOHNCfOcroVqIqhA0Wn7xMGE3iNIW-Znw" }; 
const url = "https://api.linkedin.com/v2/me";

const feeds = () => {
    axios.get(`${url}`,{ headers: config })
         .then((res)=> {
            feeds(res.data);
         })
         .catch((error) => console.error(`Error: ${error}`));
        };
  

export class Getpost extends Component {
  render() {
    return (
      <div className='newpost'>    
      
      <button className='nf' onClick={feeds}> New Feeds </button>
      
      </div>
    )
  }
}

export default Getpost;