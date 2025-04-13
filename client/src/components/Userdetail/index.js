import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './index.css'

import axios from "axios";


const Userdetail = () => {
    const [data,setData]= useState([]);
    
    const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/getproduct");
    setData(response.data)
    console.log(response.data)
    };

    useEffect(()=>{
          loadData();
    },[])
    return(
        <div className="bg-container">
            
        <div style={{marginTop: "13px"}}>
            <div className="containertopbutn">
             <Link to='/'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>Back</button>
            </Link>
            <Link to='/login/proucts/log'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>Addourproduct</button>
            </Link>
            </div>
            <div>
            <ul className="styled-unorderlist">
                    {data.map((item, index)=>{
                        return(
                                
                            <li className="list_item">
                                <div className="img-retreved">
                                <img src = {item.productimage} />
                                </div>
                                <div>
                                    <h2 className="machine-headinh">{item.machinename}</h2>
                                    <h5 className="rating">{item.rating}</h5><p>rating</p>
                                    <p className="para">{item.location}</p>
                                    <p className="para">{item.sellername}</p>
                                </div>
                                </li>
                        
                        )
                    })}
            </ul>
            </div>
         </div>
        </div>
    )
}
export default Userdetail