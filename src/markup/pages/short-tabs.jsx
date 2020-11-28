import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShortTabs extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Tabs</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Tabs</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="dlab-tabs product-description tabs-site-button">
                                            <ul className="nav nav-tabs ">
                                                <li><a data-toggle="tab" href="#web-design-1" className="active show"><i className="fa fa-globe"></i> Description</a></li>
                                                <li><a data-toggle="tab" href="#graphic-design-1"><i className="fa fa-photo"></i> Additional Information</a></li>
                                                <li><a data-toggle="tab" href="#developement-1"><i className="fa fa-cog"></i> Product Review</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="web-design-1" className="tab-pane active">
                                                    <p className="m-b10">Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis  commyolk augue aliquam ornare augue.</p>
                                                    <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                                    <ul className="list-check primary">
                                                        <li>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and </li>
                                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                                                    </ul>
                                                </div>
                                                <div id="graphic-design-1" className="tab-pane">
                                                    <table className="table table-bordered" >
                                                        <tr>
                                                            <td>Size</td>
                                                            <td>Small, Medium & Large</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Color</td>
                                                            <td>Pink & White</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rating</td>
                                                            <td><span className="rating-bx"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </span> </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Waist</td>
                                                            <td>26 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Length</td>
                                                            <td>40 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chest</td>
                                                            <td>33 inches</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fabric</td>
                                                            <td>Cotton, Silk & Synthetic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Warranty</td>
                                                            <td>3 Months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chest</td>
                                                            <td>33 inches</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div id="developement-1" className="tab-pane">
                                                    <div id="comments">
                                                        <ol className="commentlist">
                                                            <li className="comment">
                                                                <div className="comment_container"> <img className="avatar avatar-60 photo" src="images/testimonials/pic1.jpg" alt="" />
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star-o" data-alt="3" title="regular"></i> <i className="fa fa-star-o" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
                                                                        </div>
                                                                        <p className="meta"> <strong className="author">Cobus Bester</strong> <span><i className="fa fa-clock-o"></i> March 7, 2013</span> </p>
                                                                        <div className="description">
                                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="comment">
                                                                <div className="comment_container"> <img className="avatar avatar-60 photo" src="images/testimonials/pic2.jpg" alt="" />
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star" data-alt="3" title="regular"></i> <i className="fa fa-star-o" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
                                                                        </div>
                                                                        <p className="meta"> <strong className="author">Cobus Bester</strong> <span><i className="fa fa-clock-o"></i> March 7, 2013</span> </p>
                                                                        <div className="description">
                                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="comment">
                                                                <div className="comment_container"> <img className="avatar avatar-60 photo" src="images/testimonials/pic3.jpg" alt="" />
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star" data-alt="3" title="regular"></i> <i className="fa fa-star" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
                                                                        </div>
                                                                        <p className="meta"> <strong className="author">Cobus Bester</strong> <span><i className="fa fa-clock-o"></i> March 7, 2013</span> </p>
                                                                        <div className="description">
                                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div id="review_form_wrapper">
                                                        <div id="review_form">
                                                            <div id="respond" className="comment-respond">
                                                                <h3 className="comment-reply-title" id="reply-title">Add a review</h3>
                                                                <form className="comment-form" method="post" >
                                                                    <div className="comment-form-author">
                                                                        <label>Name <span className="required">*</span></label>
                                                                        <input type="text" aria-required="true" size="30" value="" name="author" id="author" />
                                                                    </div>
                                                                    <div className="comment-form-email">
                                                                        <label>Email <span className="required">*</span></label>
                                                                        <input type="text" aria-required="true" size="30" value="" name="email" id="email" />
                                                                    </div>
                                                                    {/* <div className="comment-form-rating">
                                                                        <label className="pull-left m-r20">Your Rating</label>
                                                                        <div class='rating-widget'>
                                                                            <!-- Rating Stars Box -->
                                                                            <div class='rating-stars'>
																				<ul id='stars'>
																					<li class='star' title='Poor' data-value='1'>
																						<i class='fa fa-star fa-fw'></i>
																					</li>
																					<li class='star' title='Fair' data-value='2'>
																						<i class='fa fa-star fa-fw'></i>
																					</li>
																					<li class='star' title='Good' data-value='3'>
																						<i class='fa fa-star fa-fw'></i>
																					</li>
																					<li class='star' title='Excellent' data-value='4'>
																						<i class='fa fa-star fa-fw'></i>
																					</li>
																					<li class='star' title='WOW!!!' data-value='5'>
																						<i class='fa fa-star fa-fw'></i>
																					</li>
																				</ul>
																			</div>
                                                                        </div>
																	</div> */}
                                                                    <div className="comment-form-comment">
                                                                        <label>Your Review</label>
                                                                        <textarea aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
                                                                    </div>
                                                                    <div className="form-submit">
                                                                        <input type="submit" value="Submit" className="site-button" id="submit" name="submit" />
                                                                    </div>
                                                                </form>
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
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-2 overlay-primary choseus-tabs  bg-img-fix"  style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
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
                                        <div className="row p-t50">
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
                                        <div className="row p-t50">
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
                                        <div className="row p-t50">
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
                                        <div className="row p-t50">
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
                        </div>
                        {/* <!-- Why Chose Us End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortTabs;