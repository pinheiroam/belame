import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Footer2 from '../layout/footer2';

import ReactRevSlider3 from '../element/revslider3';
import TestimonialCarousel2 from '../element/testimonial2'
import BlogCarousel2 from '../element/blog-carousel2';

class Index3 extends Component {

    componentDidMount() {
        window.dz_rev_slider_2();
        window.Agency.load();
    }


    render() {
        return (
            <>
                <Header2 />

                <div className="page-content bg-white">

                    <ReactRevSlider3 />

                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-blue-light content-inner about-us-box" style={{ backgroundImage: "url(" + './images/background/bg15.jpg' + ")", backgroundSize: "cover" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/our-work/pic1.jpg' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-lg"><i className="flaticon-diamond"></i></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Business</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                </div>
                                                <Link to={'#'} className="site-button">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/our-work/pic2.jpg' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-lg"><i className="flaticon-pen"></i></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Consulting</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                </div>
                                               <Link to={'#'} className="site-button">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="dlab-box-bg m-b30 box-hover active fly-box" style={{ backgroundImage: "url(" + './images/our-work/pic3.jpg' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-lg"><i className="flaticon-file"></i></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Finance</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                </div>
												<Link to={'#'} className="site-button">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/our-work/pic4.jpg' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-lg"><i className="flaticon-bar-chart"></i></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Growth</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                </div>
                                                <Link to={'#'} className="site-button">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg11.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 text-center section-head">
                                        <h2 className="font-weight-700 max-w700 m-auto">Invest in Our Company and have Healthy Profits for Long Term</h2>
                                        <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay5"> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="flaticon-money"></i></a> <div></div></div>
                                                <h5 className="dlab-title m-t0"><a href="#">Business Planning, Strategy & Execution</a></h5>
                                                <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius [...] </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay5"> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="flaticon-bar-chart"></i></a> <div></div></div>
                                                <h5 className="dlab-title m-t0"><a href="#">Financial Projections <br /> And Analysis</a></h5>
                                                <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius [...] </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4 col-sm-6 m-b30 wow fadeIn" data-wow-delay="0.6s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay5"> <a href="#"><img src="images/blog/grid/pic3.jpg" alt="" /></a> </div>
                                            <div className="dlab-info p-a30 border-1 bg-white">
                                                <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="flaticon-notebook"></i></a> <div></div></div>
                                                <h5 className="dlab-title m-t0"><a href="#">International Business Opportunities</a></h5>
                                                <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius [...] </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full facility bg-gray">
                            <div className="row m-a0">
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left bg-primary text-white p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-check-box"></i>
                                                        <i className="ti-check-box"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Ensure Security</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-user"></i>
                                                        <i className="ti-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">expert team</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left bg-primary text-white p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-headphone-alt"></i>
                                                        <i className="ti-headphone-alt"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">24/7 SUPPORT</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg12.jpg' + ")" }}>
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
                        <div className="section-full content-inner-2 bg-primary bg-img-fix overlay-primary tax-info-chart" style={{ backgroundImage: "url(" + './images/background/bg3.jpg' + ")" }}>
                            <div className="container">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex mb-4 mb-md-4 mb-lg-0 wow fadeInLeft" data-wow-delay="0.2s">
                                        <div className="chart-box align-self-stretch d-flex">
                                            <canvas id="canvas" style={{"height":"200px"}} className="align-self-center" height="200px"></canvas>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 dis-tbl d-flex">
                                        <div className="bg-white text-black p-a30 p-t40 form-tax align-self-center wow fadeInRight" data-wow-delay="0.4s">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                                    <div className="form-group">
                                                        <label>choose your business</label>
                                                        <select className="form-control">
                                                            <option>Select Your Business</option>
                                                            <option>Marketing</option>
                                                            <option>IT Industries</option>
                                                            <option>Management Industries</option>
                                                            <option>Property Business</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                                    <div className="form-group">
                                                        <label>Country of residence</label>
                                                        <select className="form-control">
                                                            <option>Australia</option>
                                                            <option>United State</option>
                                                            <option>United Kingdom</option>
                                                            <option>Germany</option>
                                                            <option>Netherland</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-4">
                                                    <div className="form-group">
                                                        <label>employees</label>
                                                        <select className="form-control">
                                                            <option>Select Here</option>
                                                            <option>0-20</option>
                                                            <option>21-50</option>
                                                            <option>51-150</option>
                                                            <option>151-500</option>
                                                            <option>500+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12 mb-4">
                                                    <div className="form-group">
                                                        <label>Tax Year</label>
                                                        <select className="form-control">
                                                            <option>2000-2005</option>
                                                            <option>2006-2010</option>
                                                            <option>2011-2015</option>
                                                            <option>2016-2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-12 col-md-5 col-sm-12 col-12 mb-4">
                                                    <div className="form-group">
                                                        <label>Yearly total income</label>
                                                        <select className="form-control">
                                                            <option>Select Range</option>
                                                            <option>0 - 1 Million</option>
                                                            <option>1 Million - 3 Million</option>
                                                            <option>3 Million - 10 Million</option>
                                                            <option>10 Million - 20 Million</option>
                                                            <option>20Million+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-3 col-sm-12 col-12 mb-4 d-flex">
                                                    <div className="calculate align-self-end btn-block">
                                                        <button className="site-button btn-block" type="button">Calculate</button>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-9 col-sm-12 col-12 mb-4">
                                                    <div className="calculate">
                                                        <div className="">
                                                            <label>Total Payable Tax</label>
                                                            <input type="text" className="form-control" placeholder="$000.00" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner-2 bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg13.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Team</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row m-b50">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic1.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic2.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic3.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section ">
                                            <img src="images/our-team/pic4.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-12 text-center section-head">
                                        <h2 className="m-b10">We lead the global rankings</h2>
                                        <h5 className="m-b0 font-weight-300 max-w600 m-auto">Our unmatched quality services are recognized by world's top research &amp; review companies</h5>
                                    </div>
                                </div>
                                <div className="row m-b30">
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo2.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo3.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo4.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo2.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo3.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo4.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo5.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo5.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                                    <div className="col-md-2 col-sm-4 col-6 m-b30"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <Link to={'#'} className="site-button button-md">View All Partner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner-2 bg-gray bg-img-fix overlay-primary" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head text-white" >
                                        <h2 className="font-weight-700 text-white m-b0">Our Testimonial</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <TestimonialCarousel2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg14.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Blog</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <BlogCarousel2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Quotes End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer2 />
            </>
        )
    }
}
export default Index3;