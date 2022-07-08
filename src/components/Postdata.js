import React, { useState } from "react";
import "../Assets/Home.css";
import Axios from "axios";

function Postdata() {
  const url = "http://localhost:7000/web/facebook/user/page";
  const [data, setData] = useState({
    message: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      message: data.message,
      access_token: "EAAGLZBI10qI4BAHiiosSYOZAka0276LWBTxi8eM7oPidaB2F5VlymoZAhyPHUZCmGC9ybPui5n775AnsqxjY2jd2FZBqcLQLjRGHcGu9l5klFwfXp1yyDyDQqJ8FI58BsaL6ogjZBFSTZCZCdv7NKUcVrUoQ2ynZByozqTGk1KDuUjNMSz0DCZBZBP2p7kGfQR3jvkZD"
      
    },{
        headers:{
          "x-access-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMCwiYXV0aF90eXBlIjoyLCJpYXQiOjE2NTcyNTY4MTksImV4cCI6MTY1Nzg2MTYxOX0.SzIYEcGegquGEZnejl1uSc2xLAv99hfuivJlLMmSCzE" 
        }
      }
    ).then((res) => {
      console.log(res.data);
      alert("Post successfully Created");
    })
    .catch(error =>{
      console.log(error);
    })
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <label>
        <textarea
          className="textarea"
          placeholder="What do you want to talk about ?"
          type="text"
          id="message"
           
          value={data.message}
          onChange={(e) => handle(e)}
        />
      </label>
      <button>submit</button>
    </form>
  );
}

export default Postdata;
