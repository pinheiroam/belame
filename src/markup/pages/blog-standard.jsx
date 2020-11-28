import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class BlogStandard extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Blog Standard</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Standard</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-area">
                        <div className="container max-w900">
                            {/* <!-- Blog large img --> */}
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum1.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum2.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum3.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum4.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum1.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.2s">
                                <div className="dlab-post-media dlab-img-effect zoom-slow"> <a href="#"><img src="images/blog/default/thum2.jpg" alt="" /></a> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-title ">
                                        <h4 className="post-title"><a href="#">Title of first blog post</a></h4>
                                    </div>
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="dlab-post-readmore blog-share">
                                        <a href="#" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right m-l5"></i>
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
                            {/* <!-- Blog large img END --> */}
                            {/* <!-- Pagination start --> */}
                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><a href="#"><i className="ti-arrow-left"></i> Prev</a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li className="next"><a href="#">Next <i className="ti-arrow-right"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- Pagination END --> */}
                        </div>
                    </div>
                </div>

                <Footer1 />
            </>
        )
    }
}
export default BlogStandard;