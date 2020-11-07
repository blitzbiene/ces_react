import React from 'react';
import './AboutUs.css';


class AboutUs extends React.Component{


    title = ()=>{
        return(
            <div>
            <div className="exe5">
            <div className="aboutus__header" id="myHeader">
            <h2>About Us
            <img className="aboutus__vidlogo" src="images/vidhaan/vidhaan_logo.png" height="40px" width="50px" alt="logo"/> </h2>
  
            </div>
            </div>
            <div className="aboutus__image-container" style={{backgroundImage: "url('images/aboutus/3556.jpg')" }}>
            <div className="aboutus__text2">Civil Engineering Society</div>
            </div>
            </div>
        );
    }
    description = ()=>{
        return(
            <div className="aboutus__exe6 container">
<h3><u>ESTABLISHMENT AND ORIGIN :-</u></h3>
<br/>
<p>
The fervent demeanour of civil engineers and the upcoming aspirants to establish a common platform for sharing new views and ideas led to establishment of civil engineering society of NIT Jamshedpur in 2008.</p>
<h3><u>VISION :-</u></h3><br/>
<p>We believe in the idea of creation and aspire to harness the beauty of this believed abstraction using tools of innovation and technology. We work in a very lucid way and believe in the idea of learning from the learned hence establishing a new creed of creators. We have a firm belief in the injunction of “carpe diem” seize the day so every new day is a new challenge for us in the order of creating something better. </p>
<p>We want to reach a point where the belief system of civil engineering is not just limited to knowledge in fine prints and grabbing employment but to create something new, build something extraordinary and make human lives better. We want to squeeze out every last drop of innovation and use it for creating a sustainable and eco-friendly environment at all construction sites. We work as a family for the greater good and will continue to do so and anyone who wishes to be part of this mission statement just needs to believe in the idea of creation.
Construisons Creons (let’s build let’s create)… </p>

<h3><u>EVENTS :-</u></h3><br/>
<h4><li><u>VIDHAAN :-</u></li></h4>
<p>VIDHAAN, which literally means 'creation', is the annual branch fest of Civil engineering department of NIT Jamshedpur. Being true to it's name and motto, it is a great platform for budding civil engineers to utilize their potential and work practically towards the problems in the modern world. It's a great medium for the students to think, discuss, adapt and improvise a for better change in the field of civil engineering. With the event coordinators and participants being civil engineering students themselves, first edition of VIDHAAN was successful in extracting enormous creativity and engagement of students!</p>
<h4><li><u>CIVIL PREMIER LEAUGE :-</u></li></h4>
<p>It is the annual cricket league organized by the civil engineering society. The participation comes from all four undergraduate year students, all post graduate students and professors aas well. This is organized in order to spread heath awareness and strength the student teacher relationship.</p>
<h4><li><u>FOOTBALL MATCH :-</u></li></h4>
<p>Like the cpl CES also organizes a football match between the professors and students. The event turns out to be a great excitement for both students and teachers.  </p>

<h4><li><u>FUTURE ASPIRATONS :-</u></li></h4>
<p>Including a vision to expand the reach of our society and make it better we are also committed to organize our technical fest for the first time in the history of NIT JAMSHEDPUR. We hope that our efforts will be fruitful in the coming future and we will leave our footprint in the futuristic world.</p>



</div>
        );
    }

    render(){
        return(
            <div className="container">
            <div>{this.title()}
            {this.description()}</div>
            </div>
        );
    }
}
export default AboutUs;