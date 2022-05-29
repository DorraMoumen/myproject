import React from 'react';
import './App.css';
import NavPage from './components/NavPage';
import Description from './components/Description';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2'; 
import Sidebar1 from './components/Sidebar1';
import Navbar1 from './components/Navbar1';
//import Home from './components/Home';
import Accueil from './components/Accueil';
import UploadFile from './components/UploadFile';

import Profil from './components/Profil';


import Login from './components/Login'

import UploadFiles from './components/uploadfiles';

import Test from './components/Test';

import Home from './components/Home';

import SignUp from './components/Signup';

import AppRouter from './components/AppRouter';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Upload from './components/Upload';
import Header from './components/Header1';
import FileList from './components/FilesList';
import PrincipalHeader from './components/PrincipalHeader';
import FilesList from './components/FilesList';
import List from './components/List';
import Signup from './components/Signup';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardItem from './components/CardItem';
import Newlogin from './components/Newlogin';
import Paiement from './components/Paiement';
function App() {

  
  return (
    
    <div className="App">

    <Switch>
    <Route exact path='/' component={Newlogin}></Route>
    <Route path='/upload' component={Upload}></Route>
    <Route path='/sinscrire' component={SignUp}></Route>
    <Route exact path='/List' component={List}></Route>
    <Route path='/profileAdmin' component={FileList}></Route>
    <Route path='/Signup' component={Signup}></Route>
    <Route path='/Acceuil' component={Accueil}></Route>
    <Route path='/carditem' component={CardItem}></Route>

    </Switch>  
    
    
       
      </div>
  
  )
}
// <Route exact path='/' component={List}></Route>
// <Switch>
// <Route exact path='/' component={List}></Route>
// <Route path='/upload' component={Upload}></Route>
// <Route path='/sinscrire' component={SignUp}></Route>
// <Route path='/seconnecter' component={Login}></Route>
// <Route path='/profileAdmin' component={FileList}></Route>
// </Switch>  







 //<Login/><nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //     <Route path='/' element={<Home/>} />
    //     <Route path="/about" component={<About/>} />
    //     <Route path='/users' render={(props)=> <Users {...props}/>} />  
        
    //     </Switch> 
  



// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return<div> 
//   <h2>About</h2>
//   <button> Go Back </button>
//   </div>
//   ;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


    

export default App;

// <Profil utilisateur={'Dorra Mn '} email={'dmoumen011@gmail.com'} />
    

//     <UploadFiles/>
//     <SignUp/>
//     <Accueil/>
 

//     <Navbar1/>
//     <Sidebar/>
//     <Footer1/>
//     <Footer2/>
//     <section className="container">
//            <section className="col1">
//            <img src={logo} alt="logo" />
           
//            </section>
//     <section className="col2">
//     <NavPage/>
//     <Description/>
//     <Footer/> 
    
//     </section>
// </section>

    
     

