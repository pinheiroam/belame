import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class TestimonialCarousel2 extends Component {
    
	state= {
    	navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    }
	
	render() {
        return (
            <>

                <OwlCarousel
                    className="testimonial-two-dots-bx owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-black-full btn-black owl-loaded owl-drag"
                    loop
                    margin={10}
                    nav={true}
                    items={1}
					navText={this.state.navText}
                >
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius">
                                <img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" />
                            </div>
                            <div className="testimonial-detail">
                                <strong className="testimonial-name">David Matin</strong>
                                <span className="testimonial-position">Client Form IBM</span>
                            </div>
                            <div className="testimonial-text">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius">
                                <img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" />
                            </div>
                            <div className="testimonial-detail">
                                <strong className="testimonial-name">David Matin</strong>
                                <span className="testimonial-position">Client Form IBM</span>
                            </div>
                            <div className="testimonial-text">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius">
                                <img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" />
                            </div>
                            <div className="testimonial-detail">
                                <strong className="testimonial-name">David Matin</strong>
                                <span className="testimonial-position">Client Form IBM</span>
                            </div>
                            <div className="testimonial-text">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>



            </>
        );
    }
}

export default TestimonialCarousel2;