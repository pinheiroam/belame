import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

// var bg1 = require('images/banner/bnr2.jpg');


class About2 extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">

                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr1.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">About us 2</h1>

                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>About us 2</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="content-block">

                        <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + './images/background/bg1.png' + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <a href="#" className="icon-cell text-black"><i className="flaticon-trophy"></i></a>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Elegant / Unique design</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <a href="#" className="icon-cell text-black"><i className="flaticon-technology"></i></a>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">Different Layout Type</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <a href="#" className="icon-cell text-black"><i className="flaticon-bar-chart"></i></a>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Make it Simple</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper  m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <a href="#" className="icon-cell text-black"><i className="flaticon-devices"></i></a>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">True Responsiveness</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src="images/about/pic1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src="images/about/pic2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full ">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 col-xs-12 p-a0">
                                        <img src="images/about/pic3.jpg" alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-xs-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell wow fadeInRight" data-wow-delay="0.2s">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h2>We provide high quality and cost effective services</h2>
                                                        <h5 className="m-b30">Since our foundation in 2005 our goal has been to use digital technology to create experiences.</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 text-gray">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <a href="#" className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + './images/pattern/pic1.jpg' + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="text-uppercase m-b10">About Agency</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-effect rotate"> <a href="#"><img src="images/our-work/pic1.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <h5 className="dlab-title m-t0"><a href="#">Understand the situation</a></h5>
                                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-effect rotate"> <a href="#"><img src="images/our-work/pic5.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <h5 className="dlab-title m-t0"><a href="#">Bring the experience to life</a></h5>
                                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-effect rotate"> <a href="#"><img src="images/our-work/pic3.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <h5 className="dlab-title m-t0"><a href="#">Strategise chart the course</a></h5>
                                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-bar-chart text-primary"></i>
                                                    <span className="counter">4922</span>
                                                </div>
                                                <span className="counter-text">Completed Projects</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30 wow fadeIn" data-wow-delay="0.4s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-avatar text-primary"></i>
                                                    <span className="counter">2934</span>
                                                </div>
                                                <span className="counter-text">Happy Clients</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30 wow fadeIn" data-wow-delay="0.6s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-file text-primary"></i>
                                                    <span className="counter">2296</span>
                                                </div>
                                                <span className="counter-text">Questions Answered</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30 wow fadeIn" data-wow-delay="0.8s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-pen text-primary"></i>
                                                    <span className="counter">1343</span>
                                                </div>
                                                <span className="counter-text">Ordered Coffee's</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full p-tb80">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center max-w600 m-auto ">
                                            <div className="m-b20"><i className="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 className="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                            <a href="#" className="site-button radius-xl outline outline-2"><span className="p-lr10">Start New Projects</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <Footer1 />

            </>
        )
    }
}
export default About2;