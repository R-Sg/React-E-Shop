import React from "react";
import { Link } from "react-router-dom";

const HeaderMiddle = () => {
    return (
        <>
            {/* <!--header--> */}
            <header id="header">
            {/* <!--header-middle--> */}
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 clearfix">
                            <div className="logo pull-left">
                                <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-8 clearfix">
                            <div className="shop-menu clearfix pull-right">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/contact-us">Contact</Link></li>
                                    <li><Link to="/about-us">AboutUs</Link></li>
                                    <div className="search_box pull-right">
                                        <input type="text" placeholder="Search"/>
                                    </div>
                                    {/* <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                                    <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default HeaderMiddle;