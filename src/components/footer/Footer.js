import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <p>Copyright &copy; {new Date().getFullYear()} | @ Aditya Choudhary</p>
            </div>
        </div>
    );
}

export default Footer;
