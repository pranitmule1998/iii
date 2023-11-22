import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Add=()=>{
       const navigate = useNavigate()

    function savedata(data){
        axios.post("http://localhost:8000/students",data)
        navigate("/show");
       
    }
     const {register,handleSubmit} = useForm()

    return(
        <form onSubmit={handleSubmit(savedata)}>
      <h1>Student Info Form</h1>
 
 <label  >Name</label> <br/>
 <input type="text" id="name" placeholder="Enter Name" {...register("name")} /> <br/>


      
 <label  >Gender</label>  <br/>
 <label htmlFor="gender" ></label>
 <input type="radio" id="male" value="Male" name="gender"  {...register("gender")} />
 <label>Male</label>

 <input type="radio" id="female" value="Female" name="gender"  {...register("gender")} />
 <label>Female</label> <br/> <br/>


 <label  >Select Course</label>
  <select id="course"   {...register("course")} >
    <option value="HTML" >HTML</option>
    <option value="CSS" >CSS</option>
    <option value="JS" >JS</option>

  </select> <br/>


<label htmlFor="degree"></label>
  <input type="checkbox" id="b.a" value="B.A" name="degree"  {...register("degree")} />
  <label>B.A</label>

  <input type="checkbox" id="bca" value="BCA"  name="degree"  {...register("degree")} />
  <label>BCA</label>

  <input type="checkbox" id="bcom" value="B.COM" name="degree"  {...register("degree")} />
  <label>B.com</label>

  <button type="submit">Submit</button>


        </form>
    )
}
export default Add;