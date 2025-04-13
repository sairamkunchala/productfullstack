import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './index.css'

import axios from "axios";


const Home = () => {
    const [data,setData]= useState([]);
    
    const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data)
    };

    useEffect(()=>{
          loadData();
    },[])
    return(
        <div style={{marginTop: "150px"}}>
            <div className="containertopbutn">
             <Link to='/login/proucts/log'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>UploadProduct</button>
            </Link>
            <Link to='/addContact'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>AddUser</button>
            </Link>
            <Link to='/productpage'>
                <button className="btn btn-edit" style={{textAlign:"center"}}>ProductDetail</button>
            </Link>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>NO.</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Email</th>
                        <th style={{textAlign:"center"}}>MOBILE NUM</th>
                        <th style={{textAlign:"center"}}>password</th>
                        <th style={{textAlign:"center"}}>H:NO</th>
                        <th style={{textAlign:"center"}}>CITY</th>
                        <th style={{textAlign:"center"}}>STATE</th>
                        <th style={{textAlign:"center"}}>DISTRICT</th>
                        <th style={{textAlign:"center"}}>COUNTRY</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>{
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobilenumber}</td>
                                <td>{item.password}</td>
                                <td>{item.housenumber}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.district}</td>
                                <td>{item.country}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                    <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete">Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                    <button className="btn btn-edit">View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Home
