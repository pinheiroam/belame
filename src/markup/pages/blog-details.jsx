import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import ProjectCarousel from '../element/project-carousel';


class BlogDetails extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr5.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog Details</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-xl-9">
                                    <div class="blog-post blog-single">
                                        <div class="dlab-post-title ">
                                            <h4 class="post-title m-t0"><a href="#">Title of first blog post</a></h4>
                                        </div>
                                        <div class="dlab-post-meta m-b20">
                                            <ul class="d-flex align-items-center">
                                                <li class="post-date"> <i class="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"><i class="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                                <li class="post-comment"><i class="fa fa-comments"></i> <a href="#">0 Comments</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-media dlab-img-effect zoom-slow wow fadeIn" data-wow-delay="0.2s"> <a href="#"><img src="images/blog/default/thum1.jpg" alt="" /></a> </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum
                                                is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.</blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <h5>Completely Responsive</h5>
                                            <img class="alignleft wow fadeIn" data-wow-delay="0.2s" width="300" src="images/blog/grid/pic4.jpg" alt="" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                                Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release</p>
                                            <div class="dlab-divider bg-gray-dark"></div>
                                            <img class="alignright wow fadeIn" data-wow-delay="0.2s" width="300" src="images/blog/grid/pic1.jpg" alt="" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                                Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release</p>
                                        </div>
                                        <div class="dlab-post-tags clear">
                                            <div class="post-tags"> <a href="#">Child </a> <a href="#">Eduction </a> <a href="#">Money </a> <a href="#">Resturent </a> </div>
                                        </div>
                                        <div class="dlab-divider bg-gray-dark op4"><i class="icon-dot c-square"></i></div>
                                        <div class="share-details-btn">
                                            <ul>
                                                <li><h5 class="m-a0">Share Post</h5></li>
                                                <li><a href="#" class="site-button facebook button-sm"><i class="fa fa-facebook"></i> Facebook</a></li>
                                                <li><a href="#" class="site-button google-plus button-sm"><i class="fa fa-google-plus"></i> Google Plus</a></li>
                                                <li><a href="#" class="site-button linkedin button-sm"><i class="fa fa-linkedin"></i> Linkedin</a></li>
                                                <li><a href="#" class="site-button instagram button-sm"><i class="fa fa-instagram"></i> Instagram</a></li>
                                                <li><a href="#" class="site-button twitter button-sm"><i class="fa fa-twitter"></i> Twitter</a></li>
                                                <li><a href="#" class="site-button whatsapp button-sm"><i class="fa fa-whatsapp"></i> Whatsapp</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="clear" id="comment-list">
                                        <div class="comments-area" id="comments">
                                            <h2 class="comments-title">8 Comments</h2>
                                            <div class="clearfix m-b20">
                                                <ol class="comment-list">
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic1.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                                    Nam vitae neque vitae sapien malesuada aliquet. </p>
                                                            <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                        </div>
                                                        <ol class="children">
                                                            <li class="comment odd parent">
                                                                <div class="comment-body">
                                                                    <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic2.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                                    <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                            ac elementum ligula blandit ac.</p>
                                                                    <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                                </div>
                                                                <ol class="children">
                                                                    <li class="comment odd parent">
                                                                        <div class="comment-body">
                                                                            <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic3.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                                            <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                    ac elementum ligula blandit ac.</p>
                                                                            <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic1.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                        </div>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic2.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                        </div>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src="images/testimonials/pic3.jpg" alt="" /> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <a href="#">October 6, 2015 at 7:15 am</a> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <a href="#" class="comment-reply-link">Reply</a> </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <div class="comment-respond" id="respond">
                                                    <h4 class="comment-reply-title" id="reply-title">Leave a Reply <small> <a className="d-none" href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h4>
                                                    <form class="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                                        <p class="comment-form-author">
                                                            <label for="author">Name <span class="required">*</span></label>
                                                            <input type="text" value="Author" name="Author" placeholder="Author" id="author" />
                                                        </p>
                                                        <p class="comment-form-email">
                                                            <label for="email">Email <span class="required">*</span></label>
                                                            <input type="text" value="email" placeholder="Email" name="email" id="email" />
                                                        </p>
                                                        <p class="comment-form-url">
                                                            <label for="url">Website</label>
                                                            <input type="text" value="url" placeholder="Website" name="url" id="url" />
                                                        </p>
                                                        <p class="comment-form-comment">
                                                            <label for="comment">Comment</label>
                                                            <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                        </p>
                                                        <p class="form-submit">
                                                            <input type="submit" value="Post Comment" class="submit" id="submit" name="submit" />
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-xl-3 sticky-top">
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
export default BlogDetails;