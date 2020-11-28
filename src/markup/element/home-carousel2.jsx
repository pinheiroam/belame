import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class HomeCarousel2 extends Component {

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
    }
    
    render() {
        return (
            <>

                <OwlCarousel
					className="explore-carousel owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 owl-dots-none primary owl-drag"
                    loop
                    margin={10}
                    nav
                    items={3}
                    responsive={this.state.responsive}
                >
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic1.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Epcot Park</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="project-details" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic2.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Tokyo Bridg</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="project-details" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic3.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Baptist Church</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="project-details" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic1.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Epcot Park</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="#" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic2.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Tokyo Bridg</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="project-details" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dlab-box">
                            <div className="dlab-media dlab-img-effect rotate"> <a href="project-details"><img src="images/our-services/industry/pic3.jpg" alt="" /></a> </div>
                            <div className="dlab-info bg-white">
                                <h5 className="dlab-title m-t0"><a href="#">Baptist Church</a></h5>
                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                            </div>
                            <a href="project-details" className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>


                </OwlCarousel>



            </>
        );
    }
}

export default HomeCarousel2;