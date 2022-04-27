import { Link, NavLink } from "react-router-dom";

function HeaderComponent() {
    return ( 
       <nav className="header">
           <h1 className="no-margin"><Link to="/">Student Management System</Link></h1>
           <div>
                <NavLink to="/add" className="nav-link">Add Student</NavLink>
                <NavLink to="/students" className="nav-link">View Students</NavLink>
           </div>          
       </nav>
    );
}

export default HeaderComponent;