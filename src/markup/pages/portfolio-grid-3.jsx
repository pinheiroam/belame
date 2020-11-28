import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class PortfolioGrid3 extends Component {

componentDidMount() {
       window.Agency.load();
       window.Agency.init();
    }
    
    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr9.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Portfolio Grid 3</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Portfolio Grid 3</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Portfolio  --> */}
                        <div className="section-full content-inner-2 portfolio text-uppercase" id="portfolio">
                            <div className="container">
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
                                        <li className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.2s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_1.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Herbal Beauty Salon</h5>
                                                                <p>Branding and Identity</p>
                                                                <a href="images/portfolio/image_1.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="advertising branding photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.4s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_2.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Tailoring Interior</h5>
                                                                <p>Branding and Brochure</p>
                                                                <a href="images/portfolio/image_2.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="branding design photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.6s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_3.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Pixflow Studio</h5>
                                                                <p>Branding and Identity</p>
                                                                <a href="images/portfolio/image_3.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.8s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_4.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Designblast inc</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_4.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="web branding card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.2s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_5.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Haeddot stone</h5>
                                                                <p>Branding and Identity</p>
                                                                <a href="images/portfolio/image_5.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="advertising design photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.4s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_6.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Educamp School</h5>
                                                                <p>Branding and Identity</p>
                                                                <a href="images/portfolio/image_6.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="web branding card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.6s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_7.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Crop Identity</h5>
                                                                <p>Branding and Brochure</p>
                                                                <a href="images/portfolio/image_7.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="advertising design photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.8s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_8.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>violatar Series</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_8.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="web photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.2s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_9.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Johnny Cash</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_9.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="advertising branding card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.4s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_10.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>violatar Series</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_10.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.6s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_11.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Zimmermann Buch</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_11.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="advertising branding photography card-container col-lg-4 col-md-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.8s">
                                            <div className="dlab-box dlab-gallery-box">
                                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                                    <a href="javascript:void(0);"> <img src="images/portfolio/image_12.jpg" alt="" /> </a>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon align-b text-white">
                                                            <div className="text-white text-left port-box">
                                                                <h5>Stadt Gestalten</h5>
                                                                <p>Web and photography</p>
                                                                <a href="images/portfolio/image_12.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
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
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default PortfolioGrid3;