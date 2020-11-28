import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import HomeCarousel1 from '../element/home-carousel1';
import HomeCarousel7 from '../element/home-carousel7';



class ShortIconBox extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Icon Box</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Icon Box</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="development-box">
                                <div className="container">
                                    <HomeCarousel1 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2 overlay-primary bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <HomeCarousel7 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-white">
                            <div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row m-b30">
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                            <div className="icon-sm m-b20"> <a href="#" className="icon-cell"><i className="ti-headphone-alt"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Market forecast</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <a href="#" className="site-button">Site Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                            <div className="icon-sm m-b20"> <a href="#" className="icon-cell"><i className="ti-ruler-pencil"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Most Versatile</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <a href="#" className="site-button">Site Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 m-b10 wow fadeInUp" data-wow-delay="0.9s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                            <div className="icon-sm m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-desktop"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Workflow automation</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <a href="#" className="site-button">Site Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="icon-bx-wraper  left">
                                            <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-desktop"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Lifetime Updates</h5>
                                                <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="icon-bx-wraper  left">
                                            <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-ruler-pencil"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Fast Supports</h5>
                                                <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6  m-b30">
                                        <div className="icon-bx-wraper  left">
                                            <div className="icon-sm text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-palette"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Interactive Elements</h5>
                                                <h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6  m-b10">
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
                        <div className="section-full bg-black-light content-inner">
                            <div className="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
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
                                                <a href="#" className="site-button btn-block">Read More</a>
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
                                                <a href="#" className="site-button btn-block">Read More</a>
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
                                                <a href="#" className="site-button btn-block">Read More</a>
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
                                                <a href="#" className="site-button btn-block">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 5">Element Style 5 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.2s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-devices"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">Web Design Solutions</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.4s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-pen"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">Web Development Solutions</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-bar-chart"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">SEO/SMO Solutions</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.2s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-file"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">Pre Customized Solutions</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.4s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-notebook"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">Project Maintenance</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 m-b30 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                                            <div className="icon-lg m-b20"> <a href="#" className="icon-cell"><i className="flaticon-team"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase"><a href="#">Social Networking Portal</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row serv">
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-devices"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">Custom Applications</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-pen"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">Dynamic Website</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-layers"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">CMS Development</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-shop"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">PHP based E-commerce</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="1.0s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-technology"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">API <br /> Integration</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="1.2s">
                                        <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                            <div className="icon-bx-sm bg-primary radius m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-internet"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte"><a href="#">Cloud (SaaS, PaaS)</a></h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-blue-light content-inner about-us-box" style={{ backgroundImage: "url(" + './images/background/bg15.jpg' + ")" }}>
                            <div className="sort-title-bx" data-name="Element Style 6">Element Style 6 <i className="fa fa-angle-double-right"></i></div>
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
                                                <a href="#" className="site-button">Read More</a>
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
                                                <a href="#" className="site-button">Read More</a>
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
                                                <a href="#" className="site-button">Read More</a>
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
                                                <a href="#" className="site-button">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        <div className="section-full facility bg-gray">
                            <div className="sort-title-bx text-white" data-name="Element Style 7">Element Style 7 <i className="fa fa-angle-double-right"></i></div>
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
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + './images/background/bg1.png' + ")" }}>
                            <div className="sort-title-bx" data-name="Element Style 8">Element Style 8 <i className="fa fa-angle-double-right"></i></div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 9">Element Style 9 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row text-white">
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <a href="#" className="icon-cell text-white"><i className="flaticon-pen"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Creative</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <a href="#" className="icon-cell text-white"><i className="flaticon-diamond"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Innovative</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <a href="#" className="icon-cell text-white"><i className="flaticon-devices"></i></a> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Functional</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 10">Element Style 10 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-bar-chart"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-trophy"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Unique design</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-devices"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">True Responsiveness</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
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
export default ShortIconBox;