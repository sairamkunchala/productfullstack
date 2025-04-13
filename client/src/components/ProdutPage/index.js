import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './index.css'

import axios from "axios";


const ProductPage = () => {
    const [data,setData]= useState([]);
    
    const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/getproduct");
    console.log(response)
    setData(response.data)
    console.log(response.data)
    };

    useEffect(()=>{
          loadData();
    },[])
    return(
        <div style={{marginTop: "150px"}}>
            <div className="containertopbutn">
             <Link to='/login/proucts/log'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>AddProduct</button>
            </Link>
            <Link to='/'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>Back</button>
            </Link>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>productimage</th>
                        <th style={{textAlign:"center"}}>MachineNameName</th>
                        <th style={{textAlign:"center"}}>sellername</th>
                        <th style={{textAlign:"center"}}>contact</th>
                        <th style={{textAlign:"center"}}>location</th>
                        <th style={{textAlign:"center"}}>rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>{
                        return(
                            <tr key={item.id}>
                                
                                <td><img src = {item.productimage} /></td>
                                <td>{item.machinename}</td>
                                <td>{item.sellername}</td>
                                <td>{item.contact}</td>
                                <td>{item.location}</td>
                                <td>{item.rating}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ProductPage