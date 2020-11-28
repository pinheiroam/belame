import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

import ReactRevSlider2 from '../element/revslider2';
import TestimonialCarousel2 from '../element/testimonial2'
import BlogCarousel from '../element/blog-carousel';

class Index2 extends Component {

    componentDidMount() {
        window.dz_rev_slider_1();
        window.Agency.load();
    }



    render() {
        return (
            <>
                <Header1 />

                <div className="page-content">
                    <ReactRevSlider2 />
                    {/* <!-- About Us --> */}
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="max-w800 m-auto text-center wow fadeIn" data-wow-delay="0.1s">
                                <h6>About Digital Agency</h6>
                                <h4 className="m-b50 ">The Agency corporate's vision is to continue to grow and challenge convention through our spirit, scientific advancements, forward-thinking leadership, and collaborative approach.</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                        <div className="icon-sm m-b20"> <a href="#" className="icon-cell"><i className="ti-headphone-alt"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Market forecast</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                            <Link to={'about-1'} className="site-button">Site Button</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                        <div className="icon-sm m-b20"> <a href="#" className="icon-cell"><i className="ti-ruler-pencil"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Most Versatile</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
											<Link to={'about-1'} className="site-button">Site Button</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 m-b10 wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                        <div className="icon-sm m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-desktop"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Workflow automation</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                            <Link to={'about-1'} className="site-button">Site Button</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us End--> */}
                    {/* <!-- Services --> */}
                    <div className="section-full about-section bg-white">
                        <div className="container-fluid">
                            <div className="row dzseth">
                                <div className="bg-primary col-xl-3 p-a0 col-md-6 col-lg-3 col-xs-12 d-flex dis-tbl">
                                    <div className="p-a30 text-white dis-tbl-cell align-self-center wow fadeIn" data-wow-delay="0.3s">
                                        <p className="font-weight-600 m-b10">create best website</p>
                                        <h4 className="font-weight-700">Extremely well organized with perfect coding</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                                        <Link to={'#'} className="site-button white outline outline-2">Read More</Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 p-a0 col-xs-12 d-flex">
                                    <img src="images/about-us/img4.jpg" className="abt-img img-cover" alt="" />
                                </div>
                                <div className="bg-primary col-xl-3 p-a0 col-md-6 col-lg-3 col-xs-12 d-flex dis-tbl">
                                    <div className="p-a30 text-white dis-tbl-cell align-self-center wow fadeIn" data-wow-delay="0.6s">
                                        <p className="font-weight-600 m-b10">create best website</p>
                                        <h4 className="font-weight-700">Extremely well organized with perfect coding</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
										<Link to={'#'} className="site-button white outline outline-2">Read More</Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 p-a0 col-xs-12 d-flex">
                                    <img src="images/about-us/img2.jpg" className="abt-img img-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Services END --> */}
                    {/* <!-- About Us --> */}
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row m-b50 equal-wraper2">
                                <div className="col-xl-6 col-lg-6 col-md-12 equal-col wow fadeInLeft m-b20" data-wow-delay="0.3s">
                                    <img src="images/about-us/img3.jpg" className="object-cover radius-sm" alt="" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 dis-tbl equal-col wow fadeInRight" data-wow-delay="0.6s">
                                    <div className="dis-tbl-cell">
                                        <h5 className="text-primary m-b5">With graceful feature, create a modern design</h5>
                                        <h2 className="font-weight-500 m-t0 m-b10">Gorgeous website template for online presence</h2>
                                        <h6 className="font-weight-400 m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</h6>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="icon-bx-wraper  left">
                                                    <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-desktop"></i></a> </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Lifetime Updates</h5>
                                                        <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="icon-bx-wraper  left">
                                                    <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-ruler-pencil"></i></a> </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Fast Supports</h5>
                                                        <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6  m-b30">
                                                <div className="icon-bx-wraper  left">
                                                    <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-palette"></i></a> </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Interactive Elements</h5>
                                                        <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6  m-b10">
                                                <div className="icon-bx-wraper  left">
                                                    <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-file"></i></a> </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Flexible Layout</h5>
                                                        <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dlab-divider bg-gray-dark"><i className="icon-dot c-square"></i></div>
                            <div className="row m-t30">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon flaticon-bar-chart text-primary"></i>
                                            <span className="counter">7652</span>
                                        </div>
                                        <span className="counter-text">Completed Projects</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon flaticon-avatar text-primary"></i>
                                            <span className="counter">4562</span>
                                        </div>
                                        <span className="counter-text">Happy Clients</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon flaticon-file text-primary"></i>
                                            <span className="counter">3569</span>
                                        </div>
                                        <span className="counter-text">Questions Answered</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon flaticon-pen text-primary"></i>
                                            <span className="counter">2089</span>
                                        </div>
                                        <span className="counter-text">Ordered Coffee's</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us --> */}
                    {/* <!-- Team And Process --> */}
                    <div className="section-full bg-black-light content-inner">
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b50 text-white">
                                <h6 className="font-weight-300 m-t0">Why Choose Us?</h6>
                                <h3>Provide you a website which is full of extreme feature.</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="dlab-box-bg m-b30 box-hover" style={{ backgroundImage: "url(" + './images/our-services/pic1.jpg' + ")" }}>
                                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                                            <div className="text-primary m-b30">
                                                <span className="icon-cell icon-sm"><i className="ti-ruler-pencil"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Creative design</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box-btn text-center">
											<Link to={'#'} className="site-button btn-block">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="dlab-box-bg m-b30 box-hover" style={{ backgroundImage: "url(" + './images/our-services/pic2.jpg' + ")" }}>
                                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                                            <div className="text-primary m-b30">
                                                <span className="icon-cell icon-sm"><i className="ti-heart"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Just Easy Way</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box-btn text-center">
                                            <Link to={'#'} className="site-button btn-block">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="dlab-box-bg m-b30 box-hover active" style={{ backgroundImage: "url(" + './images/our-services/pic3.jpg' + ")" }}>
                                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                                            <div className="text-primary m-b30">
                                                <span className="icon-cell icon-sm"><i className="ti-brush-alt"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Awesome function</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box-btn text-center">
                                            <Link to={'#'} className="site-button btn-block">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div className="dlab-box-bg m-b30 box-hover" style={{ backgroundImage: "url(" + './images/our-services/pic4.jpg' + ")" }}>
                                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                                            <div className="text-primary m-b30">
                                                <span className="icon-cell icon-sm"><i className="ti-mouse-alt"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Flexible Layout</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box-btn text-center">
                                            <Link to={'#'} className="site-button btn-block">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team And Process END --> */}
                    {/* <!-- Portfolio --> */}
                    <div className="section-full bg-white content-inner-1 portfolio">
                        <div className="container-fluid">
                            <div className="max-w600 m-auto text-center m-b30">
                                <h6 className="m-t0">Our recent works</h6>
                                <h2 className="m-t0">Our clients are special so we make special products</h2>
                            </div>
                            <div className="site-filters clearfix center  m-b40">
                                <ul className="filters" data-toggle="buttons">
                                    <li data-filter="" className="btn active">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>All</span></a>
                                    </li>
                                    <li data-filter="web" className="btn">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>Web</span></a>
                                    </li>
                                    <li data-filter="advertising" className="btn">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>Advertising</span></a>
                                    </li>
                                    <li data-filter="branding" className="btn">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>Branding</span></a>
                                    </li>
                                    <li data-filter="design" className="btn">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>Design</span></a>
                                    </li>
                                    <li data-filter="photography" className="btn">
                                        <input type="radio" />
                                        <a href="#" className="site-button-secondry radius-sm"><span>Photography</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                <ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
                                    <li className="advertising branding photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.2s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_2.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Tailoring Interior</h5>
                                                            <p>Branding and Brochure</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="advertising design photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.4s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_6.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Educamp School</h5>
                                                            <p>Branding and Identity</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="web branding card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_7.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Crop Identity</h5>
                                                            <p>Branding and Brochure</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="advertising design photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.8s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_8.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>violatar Series</h5>
                                                            <p>Web and photography</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="web photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_9.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Johnny Cash</h5>
                                                            <p>Web and photography</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="advertising branding card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.2s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_10.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>violatar Series</h5>
                                                            <p>Web and photography</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="web design card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.4s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_11.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Zimmermann Buch</h5>
                                                            <p>Web and photography</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="advertising branding photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.6s">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                                <a href="javascript:void(0);"> <img src="images/portfolio/image_12.jpg" alt="" /> </a>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon align-b text-white">
                                                        <div className="text-white text-left port-box">
                                                            <h5>Stadt Gestalten</h5>
                                                            <p>Web and photography</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio End --> */}
                    {/* <!-- Map And Form --> */}
                    <div className="section-full bg-white content-inner-2 ">
                        <div className="container">
                            <div className="row equal-wraper3">
                                <div className="col-lg-5 equal-col dis-tbl m-b30 wow zoomInLeft" data-wow-delay="0.4s">
                                    <div className="dis-tbl-cell  m-b30">
                                        <h2 className="m-t0 m-b10">Build your website with extra functionality</h2>
                                        <ul className="list-angle-right">
                                            <li>fully focused on accessibility</li>
                                            <li>Based on modern design concept</li>
                                            <li>impressive and attractive design with graceful features</li>
                                            <li>More creative with smoothness and flexibility </li>
                                            <li>Unlimited power and customization possibilities</li>
                                        </ul>
                                        <Link to={'#'} className="site-button black outline outline-2">Read More <i className="ti-arrow-right m-l10"></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 equal-col wow zoomInRight" data-wow-delay="0.8s">
                                    <img src="images/pc.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Map And Form END --> */}

                    {/* <!-- Clients Words --> */}
                    <div className="section-full overlay-primary-middle content-inner bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg2.jpg' + ")" }}>
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b30 text-white">
                                <h6 className="m-t0">What people say</h6>
                                <h2 className="m-t0">Clients Words</h2>
                            </div>
                            <div className="section-content m-b30 wow fadeIn" data-wow-delay="0.5s">
                                <TestimonialCarousel2 />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Clients Words END --> */}
                    <div className="section-full bg-white content-inner">
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b30">
                                <h6 className="m-t0">Publish what you think</h6>
                                <h2 className="m-t0">Latest Blogs</h2>
                            </div>
                            <BlogCarousel />
                        </div>
                    </div>
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Index2;