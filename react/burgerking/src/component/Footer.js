import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <hr/><hr/>
                <div id="footmain">
                <div clasName="footdiv">
                    <a href="Homepage/about.html" target="_blank" >
                    <p>About Us</p>
                    </a>
                </div>
                <div className="footdiv">
                    <a href="Homepage/contact.html" target="_blank" >
                    <p>Contact Us</p>
                    </a>               
                </div>
                <div className="footdiv noborder">
                    <a href="Homepage/terms.html" target="_blank" >
                        <p>Terms & Condition</p>
                    </a>               
                </div>
            </div>
               
            <div id="foottext">
                <div className="footdiv1">
                    <img src="https://i.ibb.co/ZXCpXsP/TB-Icon.png" alt="BK Icon" class="iconhome"/>
                </div>
                <div className="footdiv1">
                    <p>&copy;Developer KaushalJ7 &hearts;</p>
                </div>
                <div className="footdiv1">
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/0Mnvgrr/facebook.jpg" alt="fb" className="social"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://i.ibb.co/ZG0mY93/insta.png" alt="insta" className="social"/>
                    </a>
                    <a href="https://www.youtube.com/"  target="_blank">
                        <img src="https://i.ibb.co/0XYhYZ8/youtube.png" alt="ytube" className="social"/>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img src="https://i.ibb.co/CJK9nv5/twitter.png" alt="twit" className="social"/>
                    </a>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Footer