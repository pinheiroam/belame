import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





class HomeCarousel extends Component {

    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
			1500: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <>

                <OwlCarousel
                    className="owl-theme owl-slider"
                    loop
                    margin={10}
                    items={1}
                >

                    <div className="item slide-item">
                        <div className="slide-item-img"><img src="images/main-slider/slide1.jpg" className="" alt="" /></div>
                        <div className="slide-content overlay-primary">
                            <div className="slide-content-box container">
                                <div className="max-w600 text-white">
                                    <h2 className="text-white font-weight-400">We mould great ideas into<br /> prodigious and innovative products. <br /></h2>
                                    <p>We are passionate of deep understanding of management and communication and how to interact with the digital world is the true value we provide. We help you in all the stages of realization of your digital products.</p>
                                    <Link to={'#'} className="site-button m-r10 white button-lg">Get Started</Link>
                                    <Link to={'#'} className="site-button outline outline-2 button-lg">How It Work</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-item">
                        <div className="slide-item-img"><img src="images/main-slider/slide3.jpg" className="" alt="" /></div>
                        <div className="slide-content overlay-primary">
                            <div className="slide-content-box container">
                                <div className="max-w600 text-white">
                                    <h2 className="text-white font-weight-400">We connect, integrate and develop<br /> your great future in the digital world. </h2>
                                    <p>This is the bold truth with passion. Bellcricket is a strategic business planner company with the best customer service and operations management. We take care of brand, specialized research and style for real business communication need.</p>
                                    <Link to={'#'} className="site-button m-r10 white button-lg">Get Started</Link>
                                    <Link to={'#'} className="site-button outline outline-2 button-lg">How It Work</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-item">
                        <div className="slide-item-img"><img src="images/main-slider/slide2.jpg" className="" alt="" /></div>
                        <div className="slide-content overlay-primary ">
                            <div className="slide-content-box container">
                                <div className="max-w600 text-white">
                                    <h2 className="text-white font-weight-400">Move with passion, perform best work<br /> and be pride, whatever you do. </h2>
                                    <p>A forward thinking representation for a research production and the ability to do it dynamically with broad stability and drive your business up to a higher level.</p>
                                    <Link to={'#'} className="site-button m-r10 white button-lg">Get Started</Link>
                                    <Link to={'#'} className="site-button outline outline-2 button-lg">How It Work</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

                {/* <!-- Service --> */}

                <div className="service-box-slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <OwlCarousel
                                    className="owl-theme img-carousel-content owl-carousel owl-dots-none text-center text-white owl-none"
                                    margin={30}
                                    items={4}
                                    autoplay={true}
                                    responsive={this.state.responsive}

                >
                                    <div className="item">
                                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">
                                                <span className="icon-sm pr-3"><i className="flaticon-notebook"></i></span>
                                                Validation
											</h5>
                                            <p>Helping you identify the <br /> opportunities</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">
                                                <span className="icon-sm pr-3"><i className="flaticon-file"></i></span>
                                                Documentation
											</h5>
                                            <p>Helping you with the Initial <br /> paperwork</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">
                                                <span className="icon-sm pr-3"><i className="flaticon-devices"></i></span>
                                                Development
											</h5>
                                            <p>Mobile App or Website, we <br /> build the MVP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">
                                                <span className="icon-sm pr-3"><i className="flaticon-rocket-ship"></i></span>
                                                Launching
											</h5>
                                            <p>Product & the news, we launch <br /> with a buzz</p>
                                        </div>
                                    </div>
                                </div>
                                </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
                {/* <!-- Service End --> */ }

            </>
        );
    }
}

export default HomeCarousel;