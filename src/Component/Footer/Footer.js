import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container text-white">
                    <div className="row">
                    <div className="col-md-3 footer-column ">
                            <h1>Edu Hive</h1>
                            <p className='mt-5'>This is a education based  web site. Here you can see out instructor, our courses, latest Blogs, event etc.</p>
                        </div>
                        <div className="col-md-3 footer-column">
                            <ul className="nav d-flex flex-column justify-content-start">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/courses">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Prices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Plans & Prices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/faq"> Frequently asked questions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Company</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Job postings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">News and articles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-column ">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contact">Contact & Support</a>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link text-white"><i className="fas fa-phone"></i> +00 00 00 00 00</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-comments"></i> Live chat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-envelope"></i> Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-star"></i> Give feedback</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>

                    <div className="row text-center">
                        <div className="col-md-4 box">
                            <span className="copyright quick-links">Copyright &copy; EduHive</span>
                        </div>
                        <div className="col-md-4 box">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-twitter  text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-facebook-f  text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-linkedin-in  text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

        </div >
    );
};

export default Footer;