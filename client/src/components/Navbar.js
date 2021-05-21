import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {

  return (
    
          <nav className="nav navbar navbar-light bg-light justify-content-between">
          <div className="container">
          <Link className="nav navbar-brand" to={'/'}>
            Ami Coding Pari Na
          </Link>
          </div>
        </nav>
        
  );
}

export default Navbar;
