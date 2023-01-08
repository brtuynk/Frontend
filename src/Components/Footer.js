import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Berat UYANIK</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/berat-uyanık-7b5162175/" className="footer-icon"><LinkedInIcon/></a>
                <a href="https://www.linkedin.com/in/berat-uyanık-7b5162175/" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2022 copyright all right reserved</p>
        </div>
    )
}

export default Footer
