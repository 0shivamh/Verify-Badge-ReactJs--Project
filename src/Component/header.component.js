import { useState } from "react";
import firebase from "../firebase/base";



const Header= ()=>{

    let db = firebase.firestore();
  

    const [BadgeNo, setBadge] = useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

   
      
  

    const VerifyBadge=(e)=>{
        e.preventDefault();
        if(BadgeNo==="hi"){
            setMessage('Badge Number '+BadgeNo+' is validated');
            setTimeout(function(){ 
                setMessage('');
             }, 2000);
        }
        else{
            setError('Badge Number '+BadgeNo+' is invalid');
            setTimeout(function(){ 
                setError('');
             }, 2000);
        }
        db.collection("Verify-Badge-No")
            .doc(BadgeNo)
            .get()
            .then(doc => {
            const data = doc.data();
            console.log(data); // LA city object with key-value pair
            });
        setBadge("")

    }

    return(
        <>
           <div className="container text-center">
               <p className="display-6"><i className="fa fa-id-badge" aria-hidden="true"> Verify Badge </i></p>
            <form onSubmit={VerifyBadge}>

            {message && <div className="alert alert-success" role="alert">
                {message}
            </div>}
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}

            <div className="row g-2">
                <div className="">
                <div className="form-floating">
                    <input className="form-control no-border" placeholder="Leave a comment here" id="floatingTextarea" value={BadgeNo} onChange={(e)=> setBadge(e.target.value)}  required></input>
                    <label htmlFor="floatingInput">Enter Your Badge Number</label>
                </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button  type="submit" className="btn cbtn">Submit</button>
                </div>
             </div>
             </form>
            </div>


           


        </>
    );
}
export default Header;