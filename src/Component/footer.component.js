
const Footer =()=>{
    return(
        <div className="text-center" >
            <footer>
        <div className="container overflow-hidden">
        <a aria-hidden='true' class='fa fa-envelope' href='mailto:business@cwipedia.in' id='devso' rel='noreferrer' target='_blank' title='mail us'></a>
        <a aria-hidden='true' class='fa fa-instagram' href='http://instagram.com/cwipedia.in' id='devso' rel='noreferrer' target='_blank' title='follow us'></a>
        <a aria-hidden='true' class='fa fa-twitter' href='https://twitter.com/cwipedia' id='devso' rel='noreferrer' target='_blank' title='follow us'></a>
        <a aria-hidden='true' class='fa fa-linkedin' href='https://www.linkedin.com/company/cwipedia' id='devso' rel='noreferrer' target='_blank' title='follow us'></a>
        <a aria-hidden='true' class='fa fa-telegram' href='https://telegram.me/msbteresources' id='devso' rel='noreferrer' target='_blank' title='Join group'></a>
        <a aria-hidden='true' class='fa fa-youtube-play' href='https://www.youtube.com/channel/UCzARaaZ1furvIwUaNUsORWQ' id='devso' rel='noreferrer' target='_blank' title='follow us'></a>
        <hr/>
        <div className="row gx-5">
       
            <div className="col-sm">

                <p className="h4">cwipedia.in</p>
                <p className="h5">Pune, Maharashtra</p>
                {/* <p className="h5">cwipedia.in</p> */}

            </div>
            <div className="col-sm">

                <a href="https://career.cwipedia.in" className="link">Career</a><br/>
                <a href="https://training.cwipedia.in" className="link">Training</a>

            </div>
            <div className="col-sm">

                <a href="https://www.cwipedia.in/p/terms-and-conditions.html" className="link">Terms</a><br/>
                <a href="https://www.cwipedia.in/p/contact-us-demofont-familyarial.html" className="link">Contact</a>

            </div>

            <hr/>
            <p>
            Copyright &#169;2017-2021 All rights reserved | <a className="link" href='https://www.cwipedia.in' >cwipedia.in</a>
            </p>

        </div>
        </div>

</footer>
        </div>
    )

}
export default Footer;