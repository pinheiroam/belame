import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import HomeCarousel from '../element/home-carousel'
import HomeCarousel1 from '../element/home-carousel1'
import HomeCarousel6 from '../element/home-carousel6'
import TestimonialCarousel from '../element/testimonial'



class Index extends Component {


    render() {
        return (
            <>
                <Header1 />
				
				<div className="page-content bg-white">
                    {/* <!-- Slider Banner --> */}
                    <div className="owl-slider-banner">
                        <HomeCarousel />
                        
                    </div>
                    {/* <!-- Slider Banner --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full bg-white content-inner-1 about-us">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row wow fadeIn" data-wow-delay="0.6s">
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">About Us<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">We create unique experiences</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img wow fadeIn" data-wow-delay="0.4s">
                                        <img src="images/about/pic4.jpg" data-tilt alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Our Services</h4>
                                    <h2 className="box-title m-tb0">Web Development Services<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="development-box">
                                <div className="container">
                                    <HomeCarousel1 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="box-title m-tb0">Why Chose Us<span className="bg-primary"></span></h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="dlab-tabs choseus-tabs wow fadeIn" data-wow-delay="0.4s">
                                    <ul className="nav row justify-content-center">
                                        <li><a data-toggle="tab" href="#cost" className="active"><span className="title-head">Cost Effectiveness</span></a></li>
                                        <li><a data-toggle="tab" href="#flexible"><span className="title-head">Flexible Engagement Models</span></a></li>
                                        <li><a data-toggle="tab" href="#technology"><span className="title-head">Technology Expertization</span></a></li>
                                        <li><a data-toggle="tab" href="#packages"><span className="title-head">Pre-Built Packages</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="container">
                                <div className="tab-content chosesus-content">
                                    <div id="cost" className="tab-pane active">
                                        <div className="row p-tb50">
                                            <div className="col-lg-6 m-b10 col-md-4 about-img wow fadeIn" data-wow-delay="0.4s">
                                                <img src="images/about/pic5.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-8 text-white">
                                                <div className="p-l30 wow fadeInRight" data-wow-delay="0.6s">
                                                    <h4 className="font-weight-300">Project Cost Effectiveness</h4>
                                                    <ul className="list-checked primary">
                                                        <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                                        <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                                        <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                                    </ul>
                                                </div>
                                                <div className="abuot-box p-lr30 wow fadeInLeft" data-wow-delay="0.6s">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="flexible" className="tab-pane">
                                        <div className="row p-tb50">
                                            <div className="col-lg-6 col-md-4 about-img">
                                                <img src="images/about/pic6.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-8 text-white">
                                                <div className="p-l30">
                                                    <h4 className="font-weight-300">Flexible Engagement Models</h4>
                                                    <ul className="list-checked primary">
                                                        <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                                        <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                                        <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                                    </ul>
                                                </div>
                                                <div className="abuot-box p-lr30">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="technology" className="tab-pane">
                                        <div className="row p-tb50">
                                            <div className="col-lg-6 col-md-4 about-img">
                                                <img src="images/about/pic7.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-8 text-white">
                                                <div className="p-l30">
                                                    <h4 className="font-weight-300">Technology Expertization</h4>
                                                    <ul className="list-checked primary">
                                                        <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                                        <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                                        <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                                    </ul>
                                                </div>
                                                <div className="abuot-box p-lr30">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="packages" className="tab-pane">
                                        <div className="row p-tb50">
                                            <div className="col-lg-6 col-md-4 about-img">
                                                <img src="images/about/pic8.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-8 text-white">
                                                <div className="p-l30">
                                                    <h4 className="font-weight-300">Pre-Built Packages</h4>
                                                    <ul className="list-checked primary">
                                                        <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                                        <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                                        <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                                    </ul>
                                                </div>
                                                <div className="abuot-box p-lr30">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choses-info text-white">
                                <div className="container-fluid">
                                    <div className="row choses-info-content">
                                        <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.2s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-bag m-r10"></i><span className="counter">15</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Years in Business</h4>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.4s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-user m-r10"></i><span className="counter">700</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Happy Clients</h4>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.6s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-users m-r10"></i><span className="counter">50</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Technical Experts</h4>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn" data-wow-delay="0.8s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="ti-mobile m-r10"></i><span className="counter">200</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Our Portfolio --> */}
                        <div className="section-full content-inner-1 mfp-gallery wow fadeIn" data-wow-delay="0.4s">
                            <div className="container-fluid">
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Our Portfolio</h4>
                                    <h2 className="box-title m-tb0">We work to innovate & are proud<br /> of what we've created<span className="bg-primary"></span></h2>
                                    <h5>YOU’LL LOVE TO SEE SOME OF OUR BEST PROJECTS. TAKE A LOOK!</h5>
                                </div>
                                    <HomeCarousel6 />
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner wow fadeIn" data-wow-delay="0.4s" style={{ backgroundImage: "url(" + './images/background/bg-map.jpg' + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 row">
                                    
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
                                        <h2 className="box-title m-b15 wow fadeInLeft" data-wow-delay="0.2s">Let's get in touch<span className="bg-primary"></span></h2>
                                        <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                                        <h3 className="font-weight-500 m-b50 op6 wow fadeInLeft" data-wow-delay="0.6s">By 700+ customers for 3200+ Web and Mobile App development projects.</h3>
                                        <h4 className="wow fadeInLeft" data-wow-delay="0.8s">& What you will get:</h4>
                                        <ul className="list-checked primary wow fadeInLeft" data-wow-delay="1s">
                                            <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                            <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                            <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-7 col-md-7 m-b30">
                                        <form className="inquiry-form wow fadeInUp dzForm" data-wow-delay="0.2s" action="script/contact.php">
                                            <div className="dzFormMsg"></div>
                                            <h3 className="box-title m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>

        )
    }
}
export default Index;