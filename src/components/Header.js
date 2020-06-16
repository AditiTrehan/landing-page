import React,{Fragment} from "react";
import Logo from '../assets/images/logo.png';
import Search from '../assets/images/search.png';
import Profile from '../assets/images/profile.png';
import Cart from '../assets/images/cart.png';

function Header(){
    return(
        <Fragment>
            <div className="row">
            <div className="col-sm-2 col-xs-12 text-center cursor-pointer">
              <div className="logo-container">
                <img src={Logo} alt=""></img>
              </div>
            </div>
            <div className="col-xs-12 col-sm-7 col-sm-offset-3 col-md-9 col-md-offset-1 col-lg-7 col-lg-offset-3">
              <div className="row">
              <div className="col-sm-8 col-xs-12 nav-bar">
                <nav>
                  <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Gallery</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                  </ul>
                </nav>
              </div>
              <div className="col-sm-4 col-xs-12 menu-bar">
                <ul>
                  <li><img width={24} height={24} src={Search} alt="search"></img></li>
                  <li><img width={24} height={24} src={Profile} alt="profile"></img></li>
                  <li><img width={24} height={24} src={Cart} alt="cart"></img></li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default Header;