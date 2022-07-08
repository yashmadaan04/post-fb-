import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvwhKif43OBwf_InujuetW4hOi7FCgNnY",
  authDomain: "rjss-87f4e.firebaseapp.com",
  projectId: "rjss-87f4e",
  storageBucket: "rjss-87f4e.appspot.com",
  messagingSenderId: "48024159464",
  appId: "1:48024159464:web:722038322b876c3f36b55d",
  measurementId: "G-D94GMYG6R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
