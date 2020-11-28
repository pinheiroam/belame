import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';


class BlogClassicGrid extends Component {


    render() {
        return (
            <>
                <Header1 />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr8.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Blog Classic Grid</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Classic Grid</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-area">
                        <div className="container">
                            <div className="dlab-blog-grid-3 row" id="masonry" >
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic3.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic4.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt="" /></a> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">5k</a> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right"></i>
                                                </a>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="site-button sharp"><i className="fa fa-twitter"></i></a></li>
                                                        <li className="share-button"><a href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><a href="#"><i className="ti-arrow-left"></i> Prev</a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li className="next"><a href="#">Next <i className="ti-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer1 />
            </>
        )
    }
}
export default BlogClassicGrid;