import React from 'react';
import './cv.css';

class CertificateVerification extends React.Component{


      title = ()=>{
          return(
            <div className="exe5">
            <div className="cv__header" id="myHeader">
              <h2>CES
              <img className="cv__vidlogo" src="images/vidhaan/vidhaan_logo.png" height="40px" width="50px" alt="logo"/>
              </h2>
              
            </div>
            <div className="cv__image-container" style={{backgroundImage: 'url("images/cv/2345.jpg")'}}>
              
              <div className="cv__text">
                  Certificate Verification
                </div>
            </div>
            </div>
          );
      }

      handleSubmit = (event)=>{
        event.preventDefault();

      }

      certificate = ()=>{
          return(
            <div>
            <form class="cv__center cv__portal" onSubmit={(event)=>this.handleSubmit(event)}>
            <label for="certiverify"><h1><u>Certificate Verification Portal</u>:-</h1></label>
             <br/>
            <input type="text" id="certiverify" name="certiverify" placeholder="Registration No." style={{fontSize: "30px"}}/>
            <br/>
            <input type="submit" value="Submit" style={{fontSize: "25px"}}/>
            </form>
            </div>
          );
      }




       render(){
           return(
           <div>
               {this.title()}
               {this.certificate()}
            </div>
           );
       }
}
export default CertificateVerification;
