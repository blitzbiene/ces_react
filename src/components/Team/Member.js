import React from 'react';
import Card from './Card';

class Member extends React.Component{

     width="13.2rem";
    render(){
        return(

            <div class="card-wrapper">
         
            <Card width={this.width}/>
            <Card width={this.width}/>
            <Card width={this.width}/>
            <Card width={this.width}/>

            <Card width={this.width}/>
            <Card width={this.width}/>
            <Card width={this.width}/>
            <Card width={this.width}/>
            <Card width={this.width}/>

            
            

            
          
            </div>
            
        );
    }
}
export default Member;

