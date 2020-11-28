import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import ProjectCarousel from '../element/project-carousel';



class Blank extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr9.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Blog Standard Right Sidebar</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Standard Right Sidebar</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
                                {/* <!-- Left part start --> */}
                                <div className="col-md-7 col-lg-8 col-xl-9">
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                    <div className="blog-post blog-lg wow fadeIn" data-wow-delay="0.3s">
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
                                {/* <!-- Left part END --> */}
                                {/* <!-- Side bar start --> */}
                                <div className="col-md-5 col-lg-4 col-xl-3 sticky-top">
                                    <aside className="side-bar">
                                        <div className="widget">
                                            <h5 className="widget-title style-1">Search</h5>
                                            <div className="search-bx style-1">
                                                <form role="search" method="post">
                                                    <div className="input-group">
                                                        <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="fa fa-search text-primary"></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="widget recent-posts-entry">
                                            <h5 className="widget-title style-1">Recent Posts</h5>
                                            <div className="widget-post-bx">
                                                <div className="widget-post clearfix">
                                                    <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic1.jpg" width="200" height="143" alt="" /> </div>
                                                    <div className="dlab-post-info">
                                                        <div className="dlab-post-header">
                                                            <h6 className="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div className="dlab-post-meta">
                                                            <ul>
                                                                <li className="post-author">By Jone</li>
                                                                <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic2.jpg" width="200" height="160" alt="" /> </div>
                                                    <div className="dlab-post-info">
                                                        <div className="dlab-post-header">
                                                            <h6 className="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div className="dlab-post-meta">
                                                            <ul>
                                                                <li className="post-author">By Jone</li>
                                                                <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic3.jpg" width="200" height="160" alt="" /> </div>
                                                    <div className="dlab-post-info">
                                                        <div className="dlab-post-header">
                                                            <h6 className="post-title"><a href="#">Title of first blog post entry</a></h6>
                                                        </div>
                                                        <div className="dlab-post-meta">
                                                            <ul>
                                                                <li className="post-author">By Jone</li>
                                                                <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget widget-newslatter">
                                            <h5 className="widget-title style-1">Newsletter</h5>
                                            <div className="news-box">
                                                <p>Enter your e-mail and subscribe to our newsletter.</p>
                                                <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                    <div className="dzSubscribeMsg"></div>
                                                    <div className="input-group">
                                                        <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
                                                        <button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="widget widget_gallery gallery-grid-4">
                                            <h5 className="widget-title style-1">Our services</h5>
                                            <ul>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic2.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic1.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic5.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic7.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic8.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic9.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic3.jpg" alt="" /></a></div></li>
                                                <li><div className="dlab-post-thum"><a href="#" className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src="images/gallery/pic4.jpg" alt="" /></a></div></li>
                                            </ul>
                                        </div>

                                        <div className="widget widget_archive">
                                            <h5 className="widget-title style-1">Categories List</h5>
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

                                        <div className="widget widget_tag_cloud radius">
                                            <h5 className="widget-title style-1">Tags</h5>
                                            <div className="tagcloud">
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
                                {/* <!-- Side bar END --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Blank;