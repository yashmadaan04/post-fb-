import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../Assets/Home.css";
 
import Getpost from "./Getpost";
import Postdata from "./Postdata";
// import Fb from "./Fb";
import Checkbox from "./Checkbox";
import axios from "axios"; 
 
let config = { "x-access-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMCwiYXV0aF90eXBlIjoyLCJpYXQiOjE2NTcyNTY4MTksImV4cCI6MTY1Nzg2MTYxOX0.SzIYEcGegquGEZnejl1uSc2xLAv99hfuivJlLMmSCzE" }; 
const url = "http://localhost:7000/web/facebook/user/pages";

const feeds = () => {
    axios.get(`${url}`,{ headers: config })
         .then((res)=> {
            console.log(res.data);
         })
         .catch((error) => console.error(`Error: ${error}`));
        };
  

const Home = () => {
 
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
 
 
   
  const handleLogin = () => {

     window.open(`http://localhost:7000/web/auth/linkedin`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");

}


const handleLogin1 = () => {

  window.open(`http://localhost:7000/web/auth/twitter/callback`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");

}
 

const handleLogin2 = () => {

  window.open(`http://localhost:7000/web/auth/facebook`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");

}

const handleLogin3 = () => {

  window.open(`http://localhost:7000/web/facebook/user/pages`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");

}

 


  //  const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };
  return (
    
    <>
      <div className="main">
        <div className="box1">
          Hello Welcome <br />
          {user && user.email}
        </div>
        <div className="box2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
      <div className="post">
         
        
          <form  > 
        
           <input type="button" onClick={handleLogin} value="Linkedin" name="Linkedin" />
         </form> <br></br>
         <form className="twitter"  > 
        
        <input type="button" onClick={handleLogin1} value="Twitter" name="Twitter" />
      </form> <br></br>
      <form className="facebook"  > 
        
        <input type="button" onClick={handleLogin2} value="Facebook" name="Facebook" />
        
      </form><br></br>
      <form className="facebook"  > 
        
        <input type="button" onClick={handleLogin3} value="Pages" name="page" />
      </form>
      
      <button className='nf' onClick={feeds}> Get pages </button>



        <div>
      {/* <button onClick={() => openInNewTab('http://localhost:7000/web/auth/linkedin/callback')}>
        linkedin
      </button> */}
    </div>

        <br></br>

        <div className="post1">
          <h1> create a post</h1>
          {/* <textarea className="textarea"  id="example1"     type="text" name="area" value={area}
            onChange={(e) => {
              setName(e.target.value);
            }}
                         >
                    Hello there, this is some text in a text area
               </textarea>
 

              <Button className="btn1" type="button" onClick={saveUser}>
               {" "}
                POST{" "}
               </Button> */}

             

              
               <Postdata />
               <div className="boxes"> 
                  <Checkbox />       </div>
                
               
        </div>

          


          <Getpost />
      </div>
    </>
  );
};

export default Home;
