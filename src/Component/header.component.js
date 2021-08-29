import { Component, useState } from "react";
import firebase from "../firebase/base";
import defaultBadge from "../asset/badge.gif";
import tbadge from "../asset/tbadge.png";


const Header= ()=>{

    let db = firebase.firestore();
    

    const [BadgeNo, setBadge] = useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    

    const [show, setShow] = useState(false);


  

    const VerifyBadge=(e)=>{
        e.preventDefault();

        db.collection("Verify-Badge-No")
            .doc(BadgeNo)
            .get()
            .then(doc => {
            const data = doc.data();
            if(doc.exists){

                setMessage('Badge Number '+BadgeNo+' is validated');
                    setTimeout(function(){ 
                        setMessage('');
                    }, 2000);

                    setShow(!show);

                document.getElementById("getName").innerHTML=data.Name;
                document.getElementById("award").innerHTML="Awarded on the "+data.date;
                document.getElementById("badgenum").innerHTML="Barde No: "+BadgeNo;

                console.log(data);
            }
            else{
                setError('Badge Number '+BadgeNo+' is invalid');
                setTimeout(function(){ 
                    setError('');
                 }, 2000);
            }

            
            });
            setBadge("")   

    }

    
   


    return(
        <>
           <div className="container text-center">

           <img src={defaultBadge} className="img-fluid " />

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
                    <input className="form-control no-border" placeholder="Leave a comment here" id="floatingTextarea" value={BadgeNo} onClick={()=>setShow(false)} onChange={(e)=> setBadge(e.target.value)}  required></input>
                    <label htmlFor="floatingInput">Enter Your Badge Number</label>
                </div>
                </div>
                <div>
                    <button  type="submit" className="btn cbtn">Submit</button>
                    {show ? <Certificate /> : null}
                </div>
             </div>
             </form>
            </div>

        </>
    );
    
}

const Certificate = () => <div>
    <button className="cbtn btn" id="Download">Donwload Badge</button>
  <div id="startBadge" className="Gen-Badge d-flex justify-content-center">

        <div className="card badge-card">
            <div className="card-body b-body text-center">
            <img src={tbadge} className="img-fluid" alt="Internship completion Badge | cwipedia"/>
                <p className="display-5">This is awarded to</p>
                <p className="h2" id="getName"></p>
                
                <p className="h6">for successfully completing the internship program in Web Development.</p>
                <p id="award"></p>

                <div className="row gy-5">
                    <div className="col-6">
                        <hr/>
                        <p id="badgenum"></p>
                    </div>
                    <div className="col-6">
                        <hr/>
                        <h6>Shivam Hande</h6>
                        <p>Instructor</p>
                    </div>
                </div>

            </div>
        </div>
</div>



</div>;

export default Header;