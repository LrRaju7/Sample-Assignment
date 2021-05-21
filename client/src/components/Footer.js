//IMPORTING PACKAGES
import React from "react";

const Footer = () => {
  return (
    <div className="fixed-bottom bg-light">
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © {new Date().getFullYear()} Copyright:
          <span> LUTFOR RAHMAN RAJU</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
