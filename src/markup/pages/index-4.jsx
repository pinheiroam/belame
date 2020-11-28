import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header5 from '../layout/header5';
import Footer3 from '../layout/footer3';
import ReactRevSlider4 from '../element/revslider4';
import TestimonialCarousel3 from '../element/testimonial3'


class Index4 extends Component {

      componentDidMount() {
        window.dz_rev_slider_4();
        window.Agency.load();
    }



    render() {
        return (
            <>
                <Header5 />


                <div className="page-content bg-white rubik">

                    <ReactRevSlider4 />

                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner about-progress">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <h2 className="text-uppercase"><span className="font-weight-300">Give the </span><br />green light</h2>

                                        <div className="progress-section">
                                            <div className="progress-bx">
                                                <h4>Hard Work</h4>
                                                <div className="count-box">70%</div>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-delay="1s" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Projects Delivery</h4>
                                                <div className="count-box">80%</div>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-delay="1s" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Customers Love</h4>
                                                <div className="count-box">90%</div>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-delay="1s" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="m-b10">The Project</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                    </div>
                                    <div className="col-md-12 col-lg-6 d-flex ">
                                        <div className="img-half-bx align-items-stretch">
                                            <img src="images/about/pic9.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- Tabs End --> */}
                        <div className="section-full content-inner-2 tab-bx br-top">
                            <div className="container">
                                <div className="">
                                    <div className="dez-tabs">
                                        <div className="m-auto text-center tab-market">
                                            <ul className="nav nav-tabs">
                                                <li><a data-toggle="tab" href="#web-design" className=""><i className="ti-ruler-pencil"></i><span className="title-head">Web Design</span></a></li>
                                                <li><a data-toggle="tab" href="#web-development" className=""><i className="ti-desktop"></i><span className="title-head">Web Development</span></a></li>
                                                <li><a data-toggle="tab" href="#mobile-app" className="active show"><i className="ti-mobile"></i><span className="title-head">Mobile Applications</span></a></li>
                                                <li><a data-toggle="tab" href="#internet-marketing" className=""><i className="ti-bar-chart"></i><span className="title-head">Internet marketing</span></a></li>
                                            </ul>
                                        </div>
                                        <div className="tab-content m-t50 text-white">
                                            <div id="web-design" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-lg-8 m-b30">
                                                        <div className="box">
                                                            <h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                            <a href="#" className="site-button radius-xl button-md">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="images/about/pic4.jpg" className="radius-sm" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="web-development" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-lg-4 m-b30">
                                                        <img src="images/about/pic4.jpg" className="radius-sm" alt="" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="box">
                                                            <h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                            <a href="#" className="site-button radius-xl button-md">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mobile-app" className="tab-pane active show fade">
                                                <div className="row">
                                                    <div className="col-lg-8 m-b30">
                                                        <div className="box">
                                                            <h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                            <a href="#" className="site-button radius-xl button-md">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="images/about/pic4.jpg" className="radius-sm" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="internet-marketing" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-lg-4 m-b30">
                                                        <img src="images/about/pic4.jpg" className="radius-sm" alt="" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="box">
                                                            <h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                            <a href="#" className="site-button radius-xl button-md">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Testimonial --> */}
                        <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient testimonial-curv-bx" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-8">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase"><span className="font-weight-300">Happy customers</span> <br /> Our Reviews</h2>
                                            <h5 className="font-weight-300 text-gray-dark">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</h5>
                                        </div>
                                        <TestimonialCarousel3 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Pricing Table --> */}
                        <div className="section-full content-inner bg-gray pricing-bx">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase "><span className="font-weight-300">Check our opportunities</span> <br /> Start Pre-ICO & Get a Reward</h2>
                                            <h5 className="font-weight-400 text-gray-dark max-w800 m-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</h5>
                                        </div>
                                        {/* <!-- Pricing table-1 Columns 3 with gap --> */}
                                        <div className="section-content box-sort-in button-example m-t80">
                                            <div className="pricingtable-row">
                                                <div className="row max-w1000 m-auto">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 left">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-rocket-ship"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Starter</h4>
                                                                    <span className="pricingtable-bx text-primary">$25</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <a href="javascript:void(0);" className="site-button outline outline-2 radius-xl button-md">Sign Up</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 active">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-users"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                                                    <span className="pricingtable-bx text-primary">$50</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20 m-b5">
                                                                    <a href="javascript:void(0);" className="site-button white outline outline-2 radius-xl button-md">Sign Up</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 right">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-bar-chart"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Enterprise</h4>
                                                                    <span className="pricingtable-bx text-primary">$75</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <a href="javascript:void(0);" className="site-button outline outline-2 radius-xl button-md">Sign Up</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pricing Table End --> */}
                        {/* <!-- Pricing Table --> */}
                        <div className="section-full content-inner bg-white workspace-bx mfp-gallery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase "><span className="font-weight-300">Check our space</span> <br />Our Workspace</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="dlab-box portfolio-box m-b30">
                                            <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic10.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon text-white">
                                                        <h5>Website Name</h5>
                                                        <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                        <a href="images/gallery/pic10.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                        <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="dlab-box portfolio-box m-b30">
                                                    <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic11.jpg" alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon text-white">
                                                                <h5>Website Name</h5>
                                                                <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                                <a href="images/gallery/pic11.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                                <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="dlab-box portfolio-box m-b30">
                                                    <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic12.jpg" alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon text-white">
                                                                <h5>Website Name</h5>
                                                                <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                                <a href="images/gallery/pic12.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                                <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="dlab-box portfolio-box m-b30">
                                                    <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic13.jpg" alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon text-white">
                                                                <h5>Website Name</h5>
                                                                <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                                <a href="images/gallery/pic13.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                                <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="dlab-box portfolio-box m-b30">
                                            <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic14.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon text-white">
                                                        <h5>Website Name</h5>
                                                        <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                        <a href="images/gallery/pic14.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                        <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box portfolio-box m-b30">
                                            <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic16.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon text-white">
                                                        <h5>Website Name</h5>
                                                        <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                        <a href="images/gallery/pic16.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                        <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box portfolio-box m-b30">
                                            <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src="images/gallery/pic15.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon text-white">
                                                        <h5>Website Name</h5>
                                                        <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                                        <a href="images/gallery/pic15.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
                                                        <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pricing Table End --> */}
                        {/* <!-- Testimonial --> */}
                        <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient subscribe-bx" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="container">
                                <form className="row text-white dezPlaceAni align-items-center dzSubscribe" action="script/mailchamp.php" method="post">

                                    <div className="col-lg-4  col-md-12">
                                        <h2 className="m-b0"><span className="font-weight-300">Subscribe to our</span><br /> Newsletter</h2>
                                    </div>
                                    <div className="col-lg-6 col-md-9 contact-form-bx">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Your Email Address</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                                <div className="dzSubscribeMsg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3">
                                        <button name="submit" value="Submit" type="submit" className="site-button button-md radius-xl white btn-block">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Contact Us --> */}
                        <div className="section-full content-inner-2 bg-white contact-form-bx" style={{ backgroundImage: "url(" + './images/background/bg16.jpg' + ")" , backgroundSize: "100%" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="text-uppercase"><span className="font-weight-300">Contact </span> us</h2>
                                </div>
                                <div className="dezPlaceAni">
                                    <div className="dzFormMsg"></div>
                                    <form method="post" className="" action="">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="row">
                                            <div className="col-lg-4 col-md-5 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Name</label>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Email Address</label>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Phone</label>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Message...</label>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                                <button name="submit" type="submit" value="Submit" className="site-button outline outline-2 radius-xl button-md m-t10">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Contact Us End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer3 />
            </>
        )
    }
}
export default Index4;