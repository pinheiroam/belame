import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShortCounter extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Counter</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Counter</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 align-self-center wow fadeInLeft" data-wow-delay="0.2s">
                                        <h5>Who We Are</h5>
                                        <h2 className="font-weight-700">Leading The Way In Consulting Business For Over 25 Years</h2>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="90" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" ></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Day Of Experience</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="49" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" ></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">49%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Awards Winning</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="65" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" ></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">65%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Happy Clients</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.2s">
                                        <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-bag m-r10"></i><span className="counter">15</span>+</h2>
                                        <h4 className="font-weight-300 m-t0">Years in Business</h4>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.4s">
                                        <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-user m-r10"></i><span className="counter">700</span>+</h2>
                                        <h4 className="font-weight-300 m-t0">Happy Clients</h4>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.6s">
                                        <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-users m-r10"></i><span className="counter">50</span>+</h2>
                                        <h4 className="font-weight-300 m-t0">Technical Experts</h4>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.8s">
                                        <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-mobile m-r10"></i><span className="counter">200</span>+</h2>
                                        <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix bg-img-fix">
                            <div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row m-b30">
                                    <div className="col-lg-4 col-md-12 align-self-center wow fadeInLeft" data-wow-delay="0.2s">
                                        <h5>Who We Are</h5>
                                        <h2 className="font-weight-700">Leading The Way In Consulting Business For Over 25 Years</h2>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                                <div className="icon-bx-wraper bx-style-1 p-tb30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <h2 className="counter font-45">768</h2>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Day Of Experience</h5>
                                                        <p className="m-b0 font-14">Take a trivial example, which seds ever undertakes laborious.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                                <div className="icon-bx-wraper bx-style-1 p-tb30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <h2 className="counter font-45">128</h2>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Awards Winning</h5>
                                                        <p className="m-b0 font-14">Take a trivial example, which seds ever undertakes laborious.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-delay="0.6s">
                                                <div className="icon-bx-wraper bx-style-1 p-tb30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <h2 className="counter font-45">654</h2>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Happy Clients</h5>
                                                        <p className="m-b0 font-14">Take a trivial example, which seds ever undertakes laborious.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                        <img src="images/about/about1.jpg" className="radius-sm" alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
                                        <img src="images/about/about2.jpg" className="radius-sm" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-bar-chart text-primary"></i>
                                                    <span className="counter">4922</span>
                                                </div>
                                                <span className="counter-text">Completed Projects</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-avatar text-primary"></i>
                                                    <span className="counter">2934</span>
                                                </div>
                                                <span className="counter-text">Happy Clients</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.6s">
                                            <div className="counter-style-1">
                                                <div className="">
                                                    <i className="icon flaticon-file text-primary"></i>
                                                    <span className="counter">2296</span>
                                                </div>
                                                <span className="counter-text">Questions Answered</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.8s">
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
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 5">Element Style 5 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="counter-style-1">
                                            <div className="">
                                                <i className="icon flaticon-bar-chart text-primary"></i>
                                                <span className="counter">7652</span>
                                            </div>
                                            <span className="counter-text">Completed Projects</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="counter-style-1">
                                            <div className="">
                                                <i className="icon flaticon-avatar text-primary"></i>
                                                <span className="counter">4562</span>
                                            </div>
                                            <span className="counter-text">Happy Clients</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="counter-style-1">
                                            <div className="">
                                                <i className="icon flaticon-file text-primary"></i>
                                                <span className="counter">3569</span>
                                            </div>
                                            <span className="counter-text">Questions Answered</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
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
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortCounter;