import React from "react";
import Professor from './Professor';
import HOD from './HOD';
import Member from './Member';

import './Team.css'

class Team extends React.Component{



       render(){
           return(
            <div class="container">
            <h1 class="heading" >Meet the team</h1>
            <HOD/>
            <Professor/>
            <Member/>
              </div>
           );
       }
}
export default Team;
