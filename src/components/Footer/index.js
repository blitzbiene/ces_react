import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faTwitter, faGooglePlusG,faLinkedinIn} from '@fortawesome/free-brands-svg-icons' 
import './Footer.css';

class Footer extends React.Component{


    render(){
        return(
            <div className="footer">
            <footer className="page-footer font-small mdb-color pt-4">

            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">CES NIT JAMSHEDPUR</h6>
                <p><img src="images/logos/ceslogo.png" height="150px" width="150px" alt="ceslogo" /></p>
                </div>
            <hr className="w-100 clearfix d-md-none"/>

      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Mridang</h6>
        <p>
          <Link to='/mridang'>2020</Link>
        </p>
        </div>
      

      <hr className="w-100 clearfix d-md-none"/>

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
            <Link to="/aboutus">About Us</Link>
        </p>
        <p>
        <Link to="/team">Team</Link>
        </p>
        <p>
        <Link to="/vidhaan">Vidhaan</Link>
        </p>
      </div>

      
      <hr className="w-100 clearfix d-md-none"/>

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <FontAwesomeIcon icon={faAddressBook}/> <span style={{marginLeft:"10px"}}> NIT Jamshedpur,831014</span></p>
        <p>
          <FontAwesomeIcon icon={faEnvelope}/> <a style={{marginLeft:"10px"}} href="mailto: president.ces@nitjsr.ac.in">ces@nitjsr.ac.in</a></p>
        <p>
        <FontAwesomeIcon icon={faEnvelope}/> <a  style={{marginLeft:"10px"}}href="mailto: president.ces@nitjsr.ac.in">
            president.ces@nitjsr.ac.in </a></p>
     

    </div>
      

    </div>
    

    <hr/>

   
    
    <div className="row d-flex align-items-center">
      
     
     <div className="col-md-7 col-lg-8">

       
        <p className="text-center text-md-left">© 2020 Copyright:
          <a href="https://cesnitjsr.co.in/">
            <strong> Civil Engineering Society</strong>
          </a>
        <p className="text-center text-md-left"> Designed By:
          <a href="https://www.facebook.com/abhi.verma1709">
            <strong> Abhishek verma</strong>
          </a>
        </p>
        </p>

</div>
      

      
      <div className="col-md-5 col-lg-4 ml-lg-0">

       
        <p className="text-center text-md-right">
          <a>
            <strong> Follow Us</strong>
          </a>
        </p>
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.fb.com/CESnitjsr"
                target="_blank">
                 <FontAwesomeIcon icon={faFacebookF}/> 
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <FontAwesomeIcon icon={faTwitter}/> 
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <FontAwesomeIcon icon={faGooglePlusG}/> 
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <FontAwesomeIcon icon={faLinkedinIn}/> 
              </a>
            </li>
          </ul>
        </div>

</div>
      

    </div>
  

  </div>
 

</footer>



</div>
        );
    }
}
export default Footer;


