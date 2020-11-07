import React from 'react'


import CESHeading from './CESHeading';
import Carousel from './Carousel';
import Cards from './Cards';

class Landing extends React.Component{



       render(){
           return(
                <div>
                 <CESHeading/>
                 <Carousel/>
                 <Cards/>
                </div>
           );
       }
}
export default Landing;