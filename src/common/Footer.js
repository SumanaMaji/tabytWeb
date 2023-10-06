import React from 'react';
import logo from '../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import '../App.css';

const Footer = () => {
  var imgUrl = process.env.REACT_APP_IMGURL;
  
  return (
    <div>
      <Container>
        <div className='footerImgBanner'>
          <h1 className='footerBannerText'>Instantly Access The Best Events</h1>
          <div className='footetBannerLinks'>
            <a href='#android' className='d-inline-block me-5'><img src= {imgUrl+'/'+'uploads/andrid.png'} alt='Android' /></a>
            <a href="https://apps.apple.com/in/app/tabyt/id1641352108" target={'_blank'} className='d-inline-block'><img src={imgUrl+'/'+'uploads/ios.png'} alt='Ios' /></a>
          </div>
        </div>
      </Container>


      <div className='footer'>
        <Container>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <img src={logo} alt='Logo' className='footerLogo' title='Tabyt.com'/>
              <p className='footerContent'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <div className='footerIcons'>
                <ul className='footer-social-icons'>
                  <li><a href="https://www.facebook.com/" ><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/" ><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/" ><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.instagram.com/" ><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-8 col-sm-6'>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget ps-3">
                    <h3>Quick Links</h3>

                    <ul className="quick-links">
                      <li><a href="#null">Home </a></li>
                      <li><a href="#null">Latest Events </a></li>
                      <li><a href="#null">Popular Events </a></li>
                      <li><a href="https://apps.apple.com/in/app/tabyt-organizers/id1641348594" target={'_blank'}>Create An Event </a></li>
                      <li><a href="#null">Contact Us </a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget ps-3">
                    <h3>Cities</h3>

                    <ul className="quick-links">
                      <li><a href="#null">New York City</a></li>
                      <li><a href="#null">Boston</a></li>
                      <li><a href="#null">Miami</a></li>
                      <li><a href="#null">Las Vegas</a></li>
                      <li><a href="#null">Philadelphia</a></li>
                      <li><a href="#null">Washington</a></li>
                      <li><a href="#null">San Francisco</a></li>
                      <li><a href="#null">Foxwoods </a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget ps-3">
                    <h3>Legal</h3>

                    <ul className="quick-links">
                      <li><a href="about.html">Privacy Policy</a></li>
                      <li><a href="find-doctor.html">Terms of Use</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h3 className='paddingLeft'>Contact Us</h3>

                    <div className="widget-newsletter-content">
                      <p className='paddingLeft'>support@tabyt.com</p>
                    </div>

                    <h3 className="mt-5 paddingLeft">Download Tabyt App</h3>
                    <a href="#null"><img src= {imgUrl+'/'+'uploads/footer_andrid.png'} alt='Android' className="footerImg" /></a>
                    <a href="https://apps.apple.com/in/app/tabyt/id1641352108" target={'_blank'}><img src={imgUrl+'/'+'uploads/footer_ios.png'} alt='Ios' className="footerImg" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
