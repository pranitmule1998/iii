import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Show=()=>{
      const [user,setuser] =  useState([])

       async function fetchdata(){
        const result = await
        axios.get("http://localhost:8000/students")
        setuser(result.data);

       }

       useEffect(()=>{
        fetchdata();
       },[])



    return(
        <>
       <table>
        <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Degree</th>
        </tr>
        {
            user.map(obj=>{
                return(
                    <tr>
                        <td>{obj.name}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.course}</td>
                        <td>{obj.degree}</td>
                        <td><NavLink to={`/update/${obj.id}`} ><button>Update</button></NavLink></td>
                        <td><NavLink to={`/delete/${obj.id}`} ><button>Delete</button></NavLink></td>
                    </tr>
                )
            })
        }
       </table>
        </>
    )
}
export default Show;