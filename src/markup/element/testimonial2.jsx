import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class TestimonialCarousel2 extends Component {

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
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    }

    render() {
        return (
            <>

                <OwlCarousel
                    className="testimonial-two-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-white-full btn-white owl-loaded owl-drag"
                    loop
                    margin={30}
                    nav
                    items={3}
                    responsive={this.state.responsive}
					navText={this.state.navText}
                >

                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic2.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic3.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic2.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic3.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic2.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-9">
                            <div className="testimonial-pic radius style1"><img src="images/testimonials/pic3.jpg" alt="" width="100" height="100" /></div>
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail"> <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                        </div>
                    </div>

                </OwlCarousel>



            </>
        );
    }
}

export default TestimonialCarousel2;