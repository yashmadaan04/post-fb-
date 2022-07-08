import React from 'react';
import { LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
 


//FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton,


export default function Fb() {
  return (
    <>
    
    {/* <FacebookShareButton
    url=""
    >
      <FacebookIcon logoFillColor="white" height='40px' round={true}></FacebookIcon>

    </FacebookShareButton> */}
    
    {/* <InstapaperShareButton
    url="">

       <InstapaperIcon logoFillColor="white" height='40px' round={true}  ></InstapaperIcon>

    </InstapaperShareButton> */}


    <TwitterShareButton
    url="https://twitter.com/home">


    <TwitterIcon   logoFillColor="white"  height='40px' round={true}>    </TwitterIcon>

    </TwitterShareButton>
     

    
    <LinkedinShareButton
    url="https://www.linkedin.com/feed/">
    
      <LinkedinIcon   logoFillColor="white" height='40px' round={true}> </LinkedinIcon>
       
    
    </LinkedinShareButton>




    </>
  )
}
