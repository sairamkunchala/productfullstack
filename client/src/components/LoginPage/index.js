import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import './index.css'


const LoginPage = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        mobilenumber: "",
        password: "",
        housenumber: "",
        city: "",
        state: "",
        district: "",
        country: ""
    })
    
    const navigate = useNavigate();

    const handleSubmit =async event => {
        event.preventDefault();
        if(formData.name==="" || formData.email==="" || formData.mobilenumber==="" || formData.password==="" || formData.housenumber==="" || formData.city ==="" || formData.state ==="" || formData.district ==="" || formData.country === ""){
            toast.error("Please provide value in each filed")
        }else{
            try{
            const response =  await axios.post("http://localhost:5000/api/post",formData).then((res) => console.log("pased")).catch((err) => toast.error(err.response.data));
            if(response && response.data){

            }
        } catch(error){
            console.error("erroe",error) 
        }
        }
        navigate("/")
    }

    const handleInputChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]:[event.target.value]}));
    }

  return (
    <div style={{marginTop: "70px"}} className='sinContainer'>
      
      <form onSubmit={handleSubmit} className='form-Container'>
        <div className='items'>
         <label htmlFor='name' className='labelname'>Name</label>
         <input type='text' id='name' name='name' className='inputname' placeholder='Enter your name'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='email' className='labelname'>email</label>
         <input type='text' id='email' className='inputname' name='email' placeholder='Enter your email'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='mobilenumber' className='labelname'>Moblie</label>
         <input type='text' name='mobilenumber' id='mobilenumber' className='inputname' placeholder='Enter your mobilenumber' onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='password' className='labelname'>password</label>
         <input type='text' name='password' id='password' className='inputname' placeholder='Enter your password'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='housenumber' className='labelname'>H:no</label>
         <input type='text' id='housenumber' name='housenumber' className='inputname' placeholder='Enter your housenumber'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='city' className='labelname'>city</label>
         <input type='text' id='city' name='city' className='inputname' placeholder='Enter your city' onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='state' className='labelname'>state</label>
         <input type='text' id='state' name='state' className='inputname' placeholder='Enter your state'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='district' className='labelname'>district</label>
         <input type='text' name='district' id='district' className='inputname' placeholder='Enter your district'  onChange={handleInputChange} /></div>
         <div className='items'><label htmlFor='country' className='labelname'>country</label>
         <input type='text' name='country' id='country' className='inputname' placeholder='Enter your country'  onChange={handleInputChange} /></div>
         <div>
         <input type='submit' value="save"  className='btn-btn'/>
         </div>
         <Link to="/">
             <input type='button' className='btn-btn' value="go back" />
         </Link>
      </form>
    </div>
  )
}

export default LoginPage
