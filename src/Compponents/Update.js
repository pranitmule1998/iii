import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update=()=>{
     const  navigate = useNavigate()

     const {register,handleSubmit,setValue} =  useForm();
     const {studentId} = useParams()

     

  
    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/get/${studentId}`)
        result.data=result.data[0]
        setValue("name",result.data.name);
        setValue("gender",result.data.gender);
        setValue("course",result.data.course);
        setValue("degree",result.data.degree);

       }

       function savedata(data){
        axios.put(`http://localhost:8000/students/update/${studentId}`,data)
        navigate("/show");
       
    }

       useEffect(()=>{
        fetchdata()
       },[])



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
export default Update;