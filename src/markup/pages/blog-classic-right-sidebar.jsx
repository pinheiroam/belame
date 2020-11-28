import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import ProjectCarousel from '../element/project-carousel';


class BlogClassicRightSidebar extends Component {


    render() {
        return (
            <>
                <Header1 />
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr6.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog Classic Grid Right Sidebar</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Classic Grid Right Sidebar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-xl-9 col-md-7">

                                    <div id="masonry" class="dlab-blog-grid-3 row">
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic3.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic4.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic3.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic4.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="post card-container col-xl-6 col-lg-6 col-md-12	col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                                            <div class="blog-post blog-grid blog-rounded blog-effect1">
                                                <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                                <div class="dlab-info p-a20 border-1">
                                                    <div class="dlab-post-title ">
                                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                                    </div>
                                                    <div class="dlab-post-meta">
                                                        <ul class="d-flex align-items-center">
                                                            <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                            <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dlab-post-text">
                                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                                    </div>
                                                    <div class="dlab-post-readmore blog-share">
                                                        <a href="#" title="READ MORE" rel="bookmark" class="site-button outline outline-1">READ MORE
											<i class="fa fa-long-arrow-right"></i>
                                                        </a>
                                                        <div class="share-btn">
                                                            <ul class="clearfix">
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-linkedin"></i></a></li>
                                                                <li><a href="#" class="site-button sharp"><i class="fa fa-twitter"></i></a></li>
                                                                <li class="share-button"><a href="#" class="site-button sharp"><i class="fa fa-share-alt"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pagination-bx clearfix text-center">
                                        <ul class="pagination">
                                            <li class="previous"><a href="#"><i class="ti-arrow-left"></i> Prev</a></li>
                                            <li class="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li class="next"><a href="#">Next <i class="ti-arrow-right"></i></a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="col-lg-4 col-xl-3 col-md-5 sticky-top">
                                    <aside class="side-bar">
                                        <div class="widget">
                                            <h5 class="widget-title style-1">Search</h5>
                                            <div class="search-bx style-1">
                                                <form role="search" method="post">
                                                    <div class="input-group">
                                                        <input name="text" class="form-control" placeholder="Enter your keywords..." type="text" />
                                                        <span class="input-group-btn">
                                                            <button type="submit" class="fa fa-search text-primary"></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="widget recent-posts-entry">
                                            <h5 class="widget-title style-1">Recent Posts</h5>
                                            <div class="widget-post-bx">
                                                <div class="widget-post clearfix">
                                                    <div class="dlab-post-media"> <img src="images/blog/recent-blog/pic1.jpg" width="200" height="143" alt="" /> </div>
                                                    <div class="dlab-post-info">
                                                        <div class="dlab-post-header">
                                                            <h6 class="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div class="dlab-post-meta">
                                                            <ul>
                                                                <li class="post-author">By Jone</li>
                                                                <li class="post-comment"><i class="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget-post clearfix">
                                                    <div class="dlab-post-media"> <img src="images/blog/recent-blog/pic2.jpg" width="200" height="160" alt="" /> </div>
                                                    <div class="dlab-post-info">
                                                        <div class="dlab-post-header">
                                                            <h6 class="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div class="dlab-post-meta">
                                                            <ul>
                                                                <li class="post-author">By Jone</li>
                                                                <li class="post-comment"><i class="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget-post clearfix">
                                                    <div class="dlab-post-media"> <img src="images/blog/recent-blog/pic3.jpg" width="200" height="160" alt="" /> </div>
                                                    <div class="dlab-post-info">
                                                        <div class="dlab-post-header">
                                                            <h6 class="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div class="dlab-post-meta">
                                                            <ul>
                                                                <li class="post-author">By Jone</li>
                                                                <li class="post-comment"><i class="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="widget widget-newslatter">
                                            <h5 class="widget-title style-1">Newsletter</h5>
                                            <div class="news-box">
                                                <p>Enter your e-mail and subscribe to our newsletter.</p>
                                                <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                                    <div class="dzSubscribeMsg"></div>
                                                    <div class="input-group">
                                                        <input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email" />
                                                        <button name="submit" value="Submit" type="submit" class="site-button btn-block radius-no">Subscribe Now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="widget widget_gallery gallery-grid-4">
                                            <h5 class="widget-title style-1">Our services</h5>
                                            <ul>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic2.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic1.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic5.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic7.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic8.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic9.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic3.jpg" alt="" /></a></div></li>
                                                <li><div class="dlab-post-thum"><a href="#" class="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic4.jpg" alt="" /></a></div></li>
                                            </ul>
                                        </div>

                                        <div class="widget widget_archive">
                                            <h5 class="widget-title style-1">Categories List</h5>
                                            <ul>
                                                <li><a href="#">aciform</a></li>
                                                <li><a href="#">championship</a></li>
                                                <li><a href="#">chastening</a></li>
                                                <li><a href="#">clerkship</a></li>
                                                <li><a href="#">disinclination</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-project">
                                            <h5 className="widget-title style-1">Our Project</h5>
                                            <ProjectCarousel />
                                        </div>

                                        <div class="widget widget_tag_cloud radius">
                                            <h5 class="widget-title style-1">Tags</h5>
                                            <div class="tagcloud">
                                                <a href="#">Design</a>
                                                <a href="#">User interface</a>
                                                <a href="#">SEO</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">Development</a>
                                                <a href="#">Joomla</a>
                                                <a href="#">Design</a>
                                                <a href="#">User interface</a>
                                                <a href="#">SEO</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">Development</a>
                                                <a href="#">Joomla</a>
                                                <a href="#">Design</a>
                                                <a href="#">User interface</a>
                                                <a href="#">SEO</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">Development</a>
                                                <a href="#">Joomla</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer1 />
            </>
        )
    }
}
export default BlogClassicRightSidebar;