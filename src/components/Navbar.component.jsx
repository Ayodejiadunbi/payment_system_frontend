import { Outlet,Link } from "react-router-dom"

const Navbar= ()=>{
    return (
    <>
    <nav className="container-lg mt-5"  style={{display:"flex",justifyContent:"space-between",}} >
        <Link to = "/" style={{display:"flex",gap:"5px",textDecoration:'none', color:'black'}}>
        <i className="bi bi-currency-bitcoin"></i>
        <h6>payment</h6>
        </Link>
        <div className=""style={{display:"flex",gap:"5px"}}>
        <Link to='/signin'><button className="btn btn-outline-primary"   type="submit" style={{borderRadius:'2rem', paddingLeft:"20px", paddingRight:"20px"}}>Sign In</button></Link>
        <Link to='/signup'><button className="btn btn-success"   type="submit" style={{borderRadius:'2rem', paddingLeft:"20px", paddingRight:"20px"}}>Sign Up</button></Link>
          
           
        </div>
       
    </nav>
    <Outlet/>
    </>
    )
}
export default Navbar