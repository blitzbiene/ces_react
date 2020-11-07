import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';



import Landing from './Landing';
import Header from './Header/Header.js';
import Vidhaan from './Vidhaan'; 
import Team from './Team';
import Mridang from './Mridang';
import AboutUs from './AboutUs';
import Certificate from './CertificateVerification';
import Footer from './Footer';
import Cpl from './Cpl';

import GalleryVidhaan from './Gallery/GalleryVidhaan';
import GalleryCPL from './Gallery/GalleryCPL';
import GalleryGuestLecture from './Gallery/GalleryGuestLecture';



class App extends React.Component{




       render(){

            return(
                 <BrowserRouter>
                    <Header/>
                    
                    
                   <Switch>
                       <Route path="/" exact component={Landing}></Route>
                       <Route path="/vidhaan" exact component={Vidhaan}></Route>
                       <Route path="/team" exact component={Team}></Route>
                       <Route path="/mridang" exact component={Mridang}></Route>
                       <Route path="/aboutus" exact component={AboutUs}></Route>
                       <Route path="/certificate" exact component={Certificate}></Route>
                       <Route path="/cpl" exact component={Cpl}></Route>

                       <Route path="/gallery/vidhaan" exact component={GalleryVidhaan}></Route>
                       <Route path='/gallery/cpl' exact component={GalleryCPL}></Route>
                       <Route path='/gallery/guestlecture' exact component={GalleryGuestLecture}></Route>
                       


                       <Redirect to='/'></Redirect>
                   </Switch>
                   <Footer/>
                 </BrowserRouter>

            );
       }
}

export default App;