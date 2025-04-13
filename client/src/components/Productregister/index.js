import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import './index.css'


const Productregister = () => {
    const[productData, setProductData] = useState({
        machinename: "",
        rating: "",
        location: "",
        sellername: "",
        contact: "",
        productimage: ""
    })
    
    const navigate = useNavigate();

    const handleSubmit =async event => {
        event.preventDefault();
        if(productData.machinename==="" || productData.rating==="" || productData.location==="" || productData.sellername==="" || productData.contact==="" || productData.productimage ===""){
            toast.error("Please provide value in each filed")
        }else{
            try{
            const response =  await axios.post("http://localhost:5000/api/postproduct",productData).then((res) => navigate("/login")).catch((err) => toast.error(err.response.data));
            if(response && response.data){

            }
        } catch(error){
            console.error("erroe",error) 
        }
        }
        
    }

    const handleInputChange = (event) => {
        setProductData(prev => ({...prev, [event.target.name]:[event.target.value]}));
    }

  return (
    <div style={{marginTop: "100px"}} className='signContainer'>
        <div className='buttonContainer'>
        <Link to="/">
             <input type='button' value="Login" />
         </Link>
         <Link to="/login">
             <input type='button' value="back" />
         </Link>
        </div>
      <form onSubmit={handleSubmit} className='formContainer'>
         <label htmlFor='machinename' className="name">MachineName</label>
         <input type='text' className="namebox" id='machinename' name='machinename' placeholder='Enter your machinename'  onChange={handleInputChange} />
         <label htmlFor='rating' className="name">rating</label>
         <input type='text' className="namebox" id='rating' name='rating' placeholder='Enter your rating'  onChange={handleInputChange} />
         <label htmlFor='location' className="name">location</label>
         <input type='text' className="namebox" name='location' id='loaction' placeholder='Enter your loaction' onChange={handleInputChange} />
         <label htmlFor='sellername' className="name">sellername</label>
         <input type='text' className="namebox" name='sellername' id='sellername' placeholder='Enter your seller are company name'  onChange={handleInputChange} />
         <label htmlFor='contact' className="name">contact</label>
         <input type='text' className="namebox" id='contact' name='contact' placeholder='Enter your contact'  onChange={handleInputChange} />
         <label htmlFor='productimage' className="name">UploadImage</label>
         <input type='file'  id='productimage' name='productimage' placeholder='add image' onChange={handleInputChange} />
         <div>
         <input type='submit' value="save"  className='btn-btn'/>
         </div>
         <Link to="/login">
             <input type='button' value="go back" />
         </Link>
      </form>
    </div>
  )
}

export default Productregister
