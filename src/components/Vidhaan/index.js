import React from 'react';
import './Vidhaan.css';
//import bg from 'images/vidhaan/6530.jpg';

class Vidhaan extends React.Component{



     title = ()=>{
         return(
            <div className="exe5">
            <div className="vidhaan__header" id="myHeader">
              <h2>VIDHAAN
              <img className="vidhaan__vidlogo" src="images/vidhaan/vidhaan_logo.png" height="40px" width="50px" alt="vidhaan_logo"/> </h2>
              
            </div>
            <div className="vidhaan__image-container" style={{ backgroundImage: "url('images/vidhaan/6530.jpg')"}}>
              <div className="vidhaan__text">VIDHAAN</div>
            </div>
            </div>
         );
     }
     description = ()=>{
         return(
            <div className="vidhaan__exe6 container">
            <h3><u>MOTTO</u>:- Create. Enhance. Sustain.</h3>
            <br/>
            <p>
            VIDHAAN, which literally means 'creation', is the annual branch fest of Civil engineering department of NIT Jamshedpur. Being true to it's name and motto, it is a great platform for budding civil engineers to utilize their potential and work practically towards the problems in the modern world. It's a great medium for the students to think, discuss, adapt and improvise a for better change in the field of civil engineering. With the event coordinators and participants being civil engineering students themselves, first edition of VIDHAAN was successful in extracting enormous creativity and engagement of students!
            </p>
            <br/>
            <ul>
            <li>VIDHAAN'19, the first ever edition of the fest was held on 9th-10th November, 2019.</li>
            <li>Organised for the first time, It witnessed a zealous and enthusiastic participation of students from all years.</li>
            <li>Key events of the fest included model making competitions like 'Nirmaan', cube making event 'Concube', civil quiz 'Pragyan' and many other exciting events as well.</li>
            <li>Events like 'Vichaar' - Group Discussion, 'Kaushal' - Aptitude test, 'Pratyaksh' - Powerpoint presentation focused on the overall development and improvement of social skills of students.</li>
            <li>Fun events like Treasure hunt and PUBG added up to the extravaganza of the two exciting days!</li>
            <li>Prize money worth Rs 30k.</li>
            
            </ul>
            <br/>
            <p>Team VIDHAAN worked towards implementing scientific and technological advances in the field of civil engineering, by inculcating new ideas in students and providing a base to the futuristic aspirations. It served as a foundation of applying theoretical knowledge in real life, and meeting the demands of the modern world problems. It also helped in connecting the students to professors in a lucid manner of interaction. Keeping up with the world’s advancements in Civil engineering, VIDHAAN will continue to serve as an establishment of coming up with best ideas and providing an extensive experience of development symposium.
            
            </p>
            </div>
         );
     }


    render(){
        return(
            <div>
                {this.title()}
                {this.description()}
            </div>
        );
    }
}
export default Vidhaan;