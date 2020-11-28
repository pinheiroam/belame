import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





class HomeCarousel7 extends Component {

    state = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1024: {
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

                {/* <!-- Service --> */}


                <OwlCarousel
                    className="owl-theme img-carousel-content owl-carousel text-center text-white owl-none owl-dots-none"
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

                {/* <!-- Service End --> */}

            </>
        );
    }
}

export default HomeCarousel7;