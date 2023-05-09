import {Link } from "react-router-dom";
// import Inspiration from "../Pages/Inspiration";

function Navbar(){
return (
<div className="Navbar" style={{margin:"10px",
 padding:'50px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
 width:"90%" ,justifyContent:"space-between" ,border:"2px solid black" }}>
<Link style={{textDecoration: 'none',fontSize:"large",fontFamily:"serif",color:"deeppink"}} to="/">Dribbble</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/inspiration">Inspiration</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/findwork">Find Work</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/learndesign">Learn Design</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/gopro">Go Pro</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/hire">Hire </Link>
<Link style={{textDecoration: 'none'}} to="/products">Products</Link>
<Link style={{textDecoration: 'none',marginLeft:"300px",background:"deeppink",color:"white",fontSize:"20px"}} to="/signup">Sign Up</Link>
</div>

)
}
export default Navbar;