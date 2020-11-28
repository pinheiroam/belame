import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';

import ReactRevSlider6 from '../element/revslider6';
import HomeCarousel3 from '../element/home-carousel3';

class Index6 extends Component {

    componentDidMount() {
        window.dz_rev_slider_6();
        window.Agency.load();
    }

    render() {
        return (
            <>
                <Header4 />

                <div className="page-content bg-white rubik-font">

                    <ReactRevSlider6 />

                    <div className="content-block">
                        {/* <!-- Coded & Maintained --> */}
                        <div className="section-full content-inner-2 about-bx2" style={{ backgroundImage: "url(" + './images/background/bg4.png' + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="row">
                                            <div className="col-5 bubbx1">
                                                <div className="bubbles-bx bubbles-bx1 wow zoomIn" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles1.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon1.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Diamond</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx2 ml-auto wow zoomIn" data-wow-delay="0.4s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles3.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon3.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Diamond</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 bubbx1">
                                                <div className="bubbles-bx bubbles-bx3 wow zoomIn" data-wow-delay="0.6s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles2.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon2.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Cube</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx4 wow zoomIn" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles4.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon4.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Delicious</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 bubbx1 d-flex align-items-center">
                                                <div className="bubbles-bx bubbles-bx5 wow zoomIn" data-wow-delay="1s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles5.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon5.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">G & G</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 title-bx about-bx2-content text-right wow fadeInRight" data-wow-delay="1.2s">
                                        <h2>Smartly Coded & Maintained</h2>
                                        <div className="dlab-separator bg-primary op8"></div>
                                        <p>Aliquam vulputate, tortor nec commodo ultricies, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
							Vestibulum imperdiet nibh vel magna lacinia ultrices. Nam ac elit a ante commodo tristique</p>
                                        <a href="javascript:void(0);" className="site-button radius-xl button-md btn-long">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Coded & Maintained End --> */}
                        {/* <!-- Our Product Gallery --> */}
                        <div className="section-full content-inner our-product-gallery">
                            <div className="setResizeMargin">
                                <div className="section-head title-bx">
                                    <h2>Our Product Gallery</h2>
                                </div>
                                <div className="content-section">
                                    <HomeCarousel3 />
                                    <div className="m-t30">
                                        <a href="javascript:void(0);" className="site-button button-md btn-long radius-xl">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Product Gallery END --> */}
                        {/* <!-- Our Branded Products --> */}
                        <div className="section-full business-pro-blog" style={{ backgroundImage: "url(" + './images/background/bg6.png' + ")" }}>
                            {/* <!-- Our Branded Products --> */}
                            <div className="content-inner business-product">
                                <div className="container">
                                    <div className="section-head title-bx text-center">
                                        <h2>Our Branded Products</h2>
                                    </div>
                                    <div className="row align-items-center d-flex">
                                        <div className="col-md-12 col-lg-3">
                                            <div className="product-box wow zoomIn" data-wow-delay="1s">
                                                <div className="product-img">
                                                    <img src="images/product/watch/item1.jpg" alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                    <span className="product-tage">Sports Watch</span>
                                                    <ul className="rating-star">
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <div className="product-price">
                                                        <h4>$67.00</h4>
                                                    </div>
                                                    <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="row align-items-end d-flex">
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.2s">
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="images/product/watch/item2.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product-box product-sm wow zoomIn" data-wow-delay="0.8s">
                                                        <div className="product-img">
                                                            <img src="images/product/watch/item3.jpg" alt="" />
                                                        </div>
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-self-start">
                                                    <div className="product-box product-sm wow zoomIn" data-wow-delay="0.6s">
                                                        <div className="product-img">
                                                            <img src="images/product/watch/item5.jpg" alt="" />
                                                        </div>
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.4s">
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="images/product/watch/item6.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-3">
                                            <div className="product-box wow zoomIn" data-wow-delay="1s">
                                                <div className="product-details">
                                                    <h4 className="product-title"><a href="shop-product-details">Product Name here</a></h4>
                                                    <span className="product-tage">Sports Watch</span>
                                                    <ul className="rating-star">
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <div className="product-price">
                                                        <h4>$67.00</h4>
                                                    </div>
                                                    <a href="shop-product-details" className="site-button button-sm radius-xl">Shop Now</a>
                                                </div>
                                                <div className="product-img">
                                                    <img src="images/product/watch/item4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Our Branded Products END --> */}
                            {/* <!-- Our Featured Products --> */}
                            <div className="content-inner our-featured">
                                <div className="setResizeMargin">
                                    <div className="row m-a0 d-flex align-items-center">
                                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="1s">
                                            <div className="section-head title-bx">
                                                <h2>Our Featured  <br /> Products</h2>
                                                <h3 className="text-primary font-weight-500">Pricing starts from 30$</h3>
                                                <p className="m-b30">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                                <a href="javascript:void(0);" className="site-button button-long button-md radius-xl">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 text-right">
                                            <div className="feature-img-bx wow zoomIn" data-wow-delay="1s" data-wow-duration="3s">
                                                <img src="images/background/bg8.png" alt="" className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Our Featured Products END --> */}
                        </div>
                        {/* <!-- Customer Review  --> */}
                        <div className="content-inner pro-client-review">
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>What our Customer Reviews <br /> About Us</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="flip-bx testimonial-flip wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                            <div className="front">
                                                <div className="inner text-white">
                                                    <div className="testimonial-pic radius">
                                                        <img src="images/testimonials/pic1.jpg" alt="" width="100" height="100" />
                                                    </div>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner text-white">
                                                    <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 m-tb30">
                                        <div className="flip-bx testimonial-flip wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="front">
                                                <div className="inner text-white">
                                                    <div className="testimonial-pic radius">
                                                        <img src="images/testimonials/pic3.jpg" alt="" width="100" height="100" />
                                                    </div>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner text-white">
                                                    <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="flip-bx testimonial-flip wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="front">
                                                <div className="inner text-white">
                                                    <div className="testimonial-pic radius">
                                                        <img src="images/testimonials/pic2.jpg" alt="" width="100" height="100" />
                                                    </div>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner text-white">
                                                    <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Customer Review END --> */}
                        {/* <!-- Our Recent Blog Posts --> */}
                        <div className="content-inner business-blog">
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Our Recent Blog Posts</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                            <div className="dlab-post-info">
                                                <div className="blog-number">01</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href="javascript:void(0);">How to find, install, apps on your Apple Watch</a></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href="javascript:void(0);">Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href="#">2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img">
                                                <a href="javascript:void(0);">
                                                    <img src="images/blog/latest-blog/pic1.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="dlab-post-media blog-curve-img">
                                                <a href="javascript:void(0);"><img src="images/blog/latest-blog/pic2.png" alt="" /></a>
                                            </div>
                                            <div className="dlab-post-info">
                                                <div className="blog-number">02</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href="javascript:void(0);">How to find, install, apps on your Apple Watch</a></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href="javascript:void(0);">Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href="javascript:void(0);">2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="dlab-post-info">
                                                <div className="blog-number">03</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href="javascript:void(0);">How to find, install, apps on your Apple Watch</a></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href="javascript:void(0);">Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href="javascript:void(0);">2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img">
                                                <a href="javascript:void(0);"><img src="images/blog/latest-blog/pic3.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Recent Blog Posts END --> */}
                        {/* <!-- Newsletter --> */}
                        <div className="content-inner newsletter-bx">
                            <div className="container">
                                <form className="row text-white dezPlaceAni align-items-center dzSubscribe m-lr0 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s" action="script/mailchamp.php" method="post">
                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="title-bx">
                                            <h2 className="m-b0">Join our monthly <br /> newsletter</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-12 contact-form-bx">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Write your email</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                                <button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
                                            </div>
                                            <div className="dzSubscribeMsg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Newsletter END --> */}
                        {/* <!-- Our Team --> */}
                        <div className="content-inner newsletter-bx" style={{ backgroundImage: "url(" + './images/background/bg9.png' + ")",  backgroundPosition:"center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Meet Our Team</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="dlab-box team-curve-bx wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                            <div className="dlab-media">
                                                <img src="images/our-team/pic1.jpg" alt="" />
                                            </div>
                                            <div className="dlab-title-bx p-a10 text-center">
                                                <h5 className="title"><a href="#">Oliver James</a></h5>
                                                <img src="images/sign/sign1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="dlab-box team-curve-bx wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="dlab-media">
                                                <img src="images/our-team/pic2.jpg" alt="" />
                                            </div>
                                            <div className="dlab-title-bx p-a10 text-center">
                                                <h5 className="title"><a href="#">Enna Matthews</a></h5>
                                                <img src="images/sign/sign2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dlab-box team-curve-bx wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="dlab-media">
                                                <img src="images/our-team/pic3.jpg" alt="" />
                                            </div>
                                            <div className="dlab-title-bx p-a10 text-center">
                                                <h5 className="title"><a href="#">Nick Marshall</a></h5>
                                                <img src="images/sign/sign3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Team END --> */}
                        {/* <!-- Contact Us --> */}
                        <div className="content-inner business-contact" style={{ backgroundImage: "url(" + './images/background/bg10.png' + ")", backgroundPosition:"right center", backgroundRepeat:"no-repeat" }}>
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Have a question? Contact Us</h2>
                                </div>
                                <form className="row dezPlaceAni contact-form-bx">
                                    <div className="dzFormMsg"></div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Full name*</label>
                                                <input name="dzName" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Email Address*</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Phone Number*</label>
                                                <input name="dzOther[Subject]" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Your Questions*</label>
                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="1s" data-wow-duration="1s">
                                        <button name="submit" type="submit" value="Submit" className="site-button radius-xl">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container m-t80 ">
                            <div className="section-head title-bx text-center">
                                <h2>Download Our Mobile App</h2>
                            </div>
                            <div className="app-btn-bx text-center">
                                <a href="javascript:void(0);" className="site-button radius-xl m-lr5 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s"><i className="fa fa-apple"></i>IOS</a>
                                <a href="javascript:void(0);" className="site-button radius-xl m-lr5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s"><i className="fa fa-android"></i>Android</a>
                            </div>
                        </div>
                        {/* <!-- Contact Us END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer5 />
            </>
        )
    }
}
export default Index6;