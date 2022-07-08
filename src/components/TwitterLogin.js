import React from "react";
import ReactTwitterLogin from "react-twitter-login";



export default function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey={"bu5pTsklEDCutfNzFTBFOQhw0"} 
      consumerSecret={"PRgaQkbPaNSMH9VhjkOZl9wrEhhpi3E6G2hW33mqWHQCey8NVk"} 
 
    />
  );
}

 