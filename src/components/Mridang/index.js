import React from "react";
import Pdf from './Pdf';

class Mridang extends React.Component{



       render(){
           return(
               <div class="container">
            <object data="/sample.pdf" type="application/pdf" width="100%" height="800px" > 
                <p>It appears you don't have a PDF plugin for this browser.
                    No biggie... you can <a href="/sample.pdf">click here to
                        download magazine.</a></p>  
            </object>
            </div>

           );
       }
}
export default Mridang;