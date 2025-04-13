
import React,{useState} from "react"
import {useNavigate, useParams, Link} from 'react-router-dom'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import './index.css'

const LoginAdmin = () =>{
    const[logData, setlogData] = useState({
            email: "",
            mobilenumber: "",
            password: "",
        })
        const navigate = useNavigate();

    const handleSubmit =async event => {
        event.preventDefault();
        if(logData.email==="" || logData.mobilenumber==="" || logData.password===""){
            toast.error("Please provide value in each filed")
        }else{
            try{
            const response =  await axios.post("http://localhost:5000/api/login",logData).then((res) => {if(res.data === "success"){ navigate("/home")} else{console.log("falserequesting")} }).catch((err) => toast.error(err.response.data));
            if(response && response.data){

            }
        } catch(error){
            console.error("erroe",error) 
        }
        }
       
    }

    const handleInputChange = (event) => {
        setlogData(prev => ({...prev, [event.target.name]:[event.target.value]}));
    }

  return (
    <div style={{marginTop: "100px"}} className='signContainer'>
      <form onSubmit={handleSubmit} className='formContainer'>
         <label htmlFor='email' className="name">email</label>
         <input type='text' className="namebox" id='email' name='email' placeholder='Enter your email'  onChange={handleInputChange} />
         <label htmlFor='mobilenumber' className="name">Moblie</label>
         <input type='text' className="namebox" name='mobilenumber' id='mobilenumber' placeholder='Enter your mobilenumber' onChange={handleInputChange} />
         <label htmlFor='password' className="name">password</label>
         <input type='text' className="namebox" name='password' id='password' placeholder='Enter your password'  onChange={handleInputChange} />
         <Link to="/home">
             <input type='button' value="Enter" />
         </Link>
         <Link to="/">
             <input type='button' value="Create account" />
         </Link>
      </form>
    </div>
  )

}

export default LoginAdmin