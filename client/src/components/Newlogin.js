import React,{useState} from 'react';
import axios from "axios"
import { Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Newlogin.css';
import {useHistory} from "react-router-dom";
const Newlogin =()=> {
    const history=useHistory()
    const [Nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [Email,setEmail]=useState('') 
    const [Motdepasse,setMotdepasse]=useState('') 
    const [Genre,setGenre]=useState('') 
   
  //set the state default value
  const [login,setLogin]=useState('show col-lg-6 px-lg-1')
  const [register,setRegister]=useState('hide')
  const HandleSubmit = async() => { 
    try {
     await axios.post("http://localhost:5000/api/user/register",{nom:Nom,prenom:prenom,email:Email,motdepasse:Motdepasse,genre:Genre})
    alert("Bienvenue sur SOLVY !") 
    await showlogin()
   } catch (error) {
      alert(error.response.data.msg)
    }
       
     }

     
    const HandleSubmit2 = async() => { 
        try {
         const res= await axios.post("http://localhost:5000/api/user/login",{email:Email,motdepasse:Motdepasse})
        await console.log( res.data.token);
        await localStorage.setItem('token', res.data.token);
        await localStorage.setItem('userId', res.data.userId);
        await localStorage.setItem('isAdmin',res.data.isAdmin);
         alert("Bienvenue entre nous ! ")
 
         localStorage.getItem('isAdmin')==='true'?history.push({
            pathname:'/profileAdmin',
            search:'?query=email',
            state:{email:Email}
          
          }):history.push({
            pathname:'/List',
            search:'?query=email',
            state:{email:Email}
          
          })
          
           } catch (error) { 
             alert(error.response.data.msg)
           }}
    //  await history.push({
    //    pathname:'/upload',
    //    search:'?query=email',
    //    state:{email:Email}
     
    //  })
    //     } catch (error) { 
    //       alert(error.response.data.msg)
    //     }}
  const showlogin= () => { //button click functionality
  
    setLogin('show col-lg-6 px-lg-1');
    setRegister('hide');
  }

  const showregister= () => { //button click functionality
  
    setLogin('hide');
    setRegister('show col-lg-6 px-lg-1');
  }
   
    return (
    <div className="App">
     
     <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div className="container">
        <div className="row align-items-center">
          <div className={register}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Solvy register</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-1">Hi, welcome back! 👋👋</h3>
                <p className="text-muted text-sm mb-1">Hi there, welcome to Solvy: the pefect place to share your amazing work and serach for the files you need.</p>
                <form id="loginForm" action="index.html">
                <div className="form-floating mb-1">
                <label for="floatingInput">Nom</label>
                <input className="form-control" id="floatingInput" type="text" placeholder="entrez votre nom" required onChange={(e)=>{setNom(e.target.value)}}/>
                
              </div>
              <div className="form-floating mb-1">
              <label for="floatingInput">Prenom</label>
              <input className="form-control" id="floatingInput" type="text" placeholder="entrez votre nom" required onChange={(e)=>{setPrenom(e.target.value)}}/>
              
            </div>
                  <div className="form-floating mb-1">
                  <label for="floatingInput">Addresse Email</label>
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    
                  </div>
                  <div className="form-floating mb-1">
                  <label for="floatingPassword">Mot de passe</label>
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required onChange={(e)=>{setMotdepasse(e.target.value)}}/>
                   
                  </div>
                  <div className="form-floating mb-1">
                  <label >Genre</label>
                  <div key={'radio'} className="d-flex justify-content-center">
                  <Form.Check type={'radio'} >
                    <Form.Check.Input type={'radio'} isValid onChange={(e)=>{setGenre("f")}}/>
                    <Form.Check.Label >{'Femme'}</Form.Check.Label>
                  </Form.Check>
                </div> 
                <div key={'radio'} className="d-flex justify-content-center">
                <Form.Check type={'radio'} >
                  <Form.Check.Input type={'radio'} isValid onChange={(e)=>{setGenre("g")}} />
                  <Form.Check.Label  >{'Homme'}</Form.Check.Label>
                </Form.Check>
              </div>
                  </div>
                  <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="button" onClick={HandleSubmit}>Submit</button>
                </form>
              </div>
              <div className="card-footer px-lg-2 py-lg-2">
                <div className="text-sm text-muted">j'ai un compte Solvy <a onClick={showlogin}>Login</a>.</div>
              </div>
            </div>
          </div>
          {/*} register {*/}
           <div className={login}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Solvy login</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Get started with Solvy</h3>
                <p className="text-muted text-sm mb-5">Hi there, welcome to Solvy: the pefect place to share your amazing work and serach for the files you need..</p>
                <form action="index.html">
                  <div className="form-floating mb-3">
                  <label for="username">Votre Email</label>
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required onChange={(e)=>{setEmail(e.target.value)}}/>
                   
                  </div>
             
                  <div className="form-floating mb-3">
                  <label for="floatingPassword">votre mot de passe</label>
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Mot de passe" required onChange={(e)=>{setMotdepasse(e.target.value)}} />
                  
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                    <label className="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" id="regidter" type="button" name="registerSubmit" onClick={HandleSubmit2}>Se connecter </button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Je n'ai pas un compte? <a onClick={showregister} >register</a>.</div>
              </div>
            </div>
          </div>
         <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{transform: "rotate(10deg)"}} />
            <h1 className="mb-4">Solvy<br className="d-none d-lg-inline" />The perfect website for sharing files.</h1>
            <p className="lead text-muted">Welcome to Solvy, feel free to search and earn by sharing .</p>
          </div>
        </div>
      </div>
    </div>
    </div>
)
};

export default Newlogin;