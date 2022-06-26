import React from 'react';
import {Link} from "react-router-dom"
const NavComp = () => {
return (
    <nav>
        <Link to="/">Spencer</Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)
}

export default NavComp

// export function CustomLink({path, children}) {
//   return (
//     <li>
//         <Link to={path}>{children}</Link>
//     </li>
//   )
// }

// <CustomLink path="/contact"></CustomLink>

