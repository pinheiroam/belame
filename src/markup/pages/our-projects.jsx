import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class OurProjects extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Our Projects</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Our Projects</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner portfolio-section mfp-gallery">
                            <div className="container-fluid">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark font-weight-300 m-b10">Our Portfolio</h4>
                                    <h2 className="box-title m-tb0">Web Development Portfolio<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="site-filters clearfix center  m-b40">
                                    <ul className="filters" data-toggle="buttons">
                                        <li data-filter="" className="btn active">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Show All</span></a>
                                        </li>
                                        <li data-filter="wordpress" className="btn">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Wordpress</span></a>
                                        </li>
                                        <li data-filter="joomla" className="btn">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Joomla</span></a>
                                        </li>
                                        <li data-filter="php" className="btn">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Php</span></a>
                                        </li>
                                        <li data-filter="drupal" className="btn">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Drupal</span></a>
                                        </li>
                                        <li data-filter="laravel" className="btn">
                                            <input type="radio" />
                                            <a href="#" className="site-button-secondry"><span>Laravel</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul id="masonry" className="dlab-gallery-listing gallery-grid-4 mfp-gallery row">
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 drupal php wordpress wow zoomIn" data-wow-delay="0.2s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic8.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic8.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 joomla wordpress wow zoomIn" data-wow-delay="0.4s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic7.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic7.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 joomla php wow zoomIn" data-wow-delay="0.6s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic6.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic6.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 laravel drupal wordpress wow zoomIn" data-wow-delay="0.8s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic5.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic5.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 joomla wow zoomIn" data-wow-delay="0.2s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic1.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic1.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 laravel wordpress wow zoomIn" data-wow-delay="0.4s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic4.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic4.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 drupal wow zoomIn" data-wow-delay="0.6s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic3.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic3.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 laravel drupal wordpress wow zoomIn" data-wow-delay="0.8s">
                                            <div className="dlab-box portfolio-box">
                                                <div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic2.jpg" alt="" />
                                                    <div className="dlab-info-has p-a15 bg-primary">
                                                        <a href="#" className="site-button outline radius-xl white">Wordpress</a>
                                                        <a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
                                                    </div>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon text-white p-lr10">
                                                            <h5>Website Name</h5>
                                                            <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                            <a href="images/project/pic2.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                            <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default OurProjects;