import React, { useState ,useEffect} from 'react'
import Accueil from './Accueil'
import axios from 'axios'
import Header from './Header1'
const List = (props) => {
const [isAuth,setIsAuth] = useState(false)
const [data,setData] = useState({})
const email=props.location.state
console.log(email);
  useEffect(async() => {
    try {
      const token=await localStorage.getItem('token')
      const rslt=await axios.get("http://localhost:5000/api/user/auth",{
        headers:{'authorization':token}
      })

      return(setIsAuth(rslt.data.isAuth))
    } catch (error) {
      console.log(error);
    }
    
  }, [])
  
    const [inputText,setInputText]=useState('')
    const [inputspec,setInputSpec]=useState('')
    const inputHandler=(e)=>{
        const lowerCase=e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const inputHandler2=(e)=>{
        const spec=e.target.value.toLowerCase();
        setInputSpec(spec);
    }
  return (
    <div>
    <Header email={email} />
    {isAuth?
      <div>
   
      <h1>Search</h1>
      <div>
      <textarea aria-label='Search' onChange={inputHandler}></textarea>
      </div>
      <h1>Specialité</h1>
      <div>
      <textarea aria-label='Search' onChange={inputHandler2}></textarea>
      
      </div>
      <div><Accueil input1={inputText} input2={inputspec}/></div>
      </div>
    :
  <div><h1>hello</h1></div>}
    </div>
  )
}

export default List