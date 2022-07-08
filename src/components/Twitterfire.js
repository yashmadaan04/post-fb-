import { authentication } from './firebase-config';
import { TwitterAuthProvider,signInWithPopup } from 'firebase/auth';

function App() {

 const signInWithTwitter = ()=>{

    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication,provider)
    .then((re)=>{
        console.log(re);
    })
    .catch((err)=>{
        console.log(err);
    })
 }


 return (
         <button onClick={signInWithTwitter}> sign in with twitter</button>
 );

 }

 export default App;







