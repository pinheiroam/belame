import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class HomeCarousel3 extends Component {
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
        },
        navText: ['<img src="images/bubbles/errow-left.png" alt="">', '<img src="images/bubbles/errow-right.png" alt="">'],
    }
	
	render() {
        return (
            <>

                <OwlCarousel
                    className="product-gallery-bx owl-loaded owl-theme owl-carousel mfp-gallery owl-dots-none owl-dots-black-full owl-drag"
                    loop
                    nav
                    items={3}
					responsive={this.state.responsive}
                    navText ={this.state.navText}
                >
                    <div className="item">
                        <div className="dlab-box dlab-gallery-box">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                <a href="javascript:void(0);"> <img src="images/watch/pic1.jpg" alt="" /> </a>
                                <div className="overlay-bx ">
                                    <div className="overlay-icon align-m text-white text-center">
                                        <div className="text-white text-center port-box">
                                            <a href="images/watch/pic1.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box dlab-gallery-box">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                <a href="javascript:void(0);"> <img src="images/watch/pic2.jpg" alt="" /> </a>
                                <div className="overlay-bx ">
                                    <div className="overlay-icon align-m text-white text-center">
                                        <div className="text-white text-center port-box">
                                            <a href="images/watch/pic2.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box dlab-gallery-box">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                <a href="javascript:void(0);"> <img src="images/watch/pic3.jpg" alt="" /> </a>
                                <div className="overlay-bx ">
                                    <div className="overlay-icon align-m text-white text-center">
                                        <div className="text-white text-center port-box">
                                            <a href="images/watch/pic3.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box dlab-gallery-box">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                <a href="javascript:void(0);"> <img src="images/watch/pic4.jpg" alt="" /> </a>
                                <div className="overlay-bx ">
                                    <div className="overlay-icon align-m text-white text-center">
                                        <div className="text-white text-center port-box">
                                            <a href="images/watch/pic4.jpg" className="mfp-link portfolio-fullscreen" title="Title Come Here"><i className="ti-fullscreen icon-bx-xs"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </OwlCarousel>



            </>
        );
    }
}

export default HomeCarousel3;