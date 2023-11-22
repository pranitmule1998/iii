import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
       <NavLink to={"/add"} >Add</NavLink>
       <NavLink to={"/show"} >Show</NavLink>
        </>
    )
}
export default Navbar;