import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import ProductSlider from '../element/product-slider';
import ShopCarousel from '../element/shop-carousel';



class ShopProductDetails extends Component {

    componentDidMount(){
        window.sliderr();
        window.Agency.load();
    }

    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr7.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Product Details</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Product Details</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner bg-white">
                        {/* <!-- Product details --> */}
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-md-5 col-sm-5">
                                    <div className="product-gallery on-show-slider">
                                        <div id="sync1" class="owl-carousel owl-theme owl-btn-center-lr m-b5 owl-btn-1 primary">
                                            <div class="item">
                                                <div class="mfp-gallery">
                                                    <div class="dlab-box">
                                                        <div class="dlab-thum-bx dlab-img-overlay1 ">
                                                            <img src="images/product/product/item1.jpg" alt="" />
                                                            <div class="overlay-bx">
                                                                <div class="overlay-icon">
                                                                    <a class="mfp-link" href="images/product/product/item1.jpg">
                                                                        <i class="ti-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="mfp-gallery">
                                                    <div class="dlab-box">
                                                        <div class="dlab-thum-bx dlab-img-overlay1 ">
                                                            <img src="images/product/product/item2.jpg" alt="" />
                                                            <div class="overlay-bx">
                                                                <div class="overlay-icon">
                                                                    <a class="mfp-link" href="images/product/product/item2.jpg">
                                                                        <i class="ti-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="mfp-gallery">
                                                    <div class="dlab-box">
                                                        <div class="dlab-thum-bx dlab-img-overlay1 ">
                                                            <img src="images/product/product/item3.jpg" alt="" />
                                                            <div class="overlay-bx">
                                                                <div class="overlay-icon">
                                                                    <a class="mfp-link" href="images/product/product/item3.jpg">
                                                                        <i class="ti-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="mfp-gallery">
                                                    <div class="dlab-box">
                                                        <div class="dlab-thum-bx dlab-img-overlay1 ">
                                                            <img src="images/product/product/item4.jpg" alt="" />
                                                            <div class="overlay-bx">
                                                                <div class="overlay-icon">
                                                                    <a class="mfp-link" href="images/product/product/item4.jpg">
                                                                        <i class="ti-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="mfp-gallery">
                                                    <div class="dlab-box">
                                                        <div class="dlab-thum-bx dlab-img-overlay1 ">
                                                            <img src="images/product/product/item5.jpg" alt="" />
                                                            <div class="overlay-bx">
                                                                <div class="overlay-icon">
                                                                    <a class="mfp-link" href="images/product/product/item5.jpg">
                                                                        <i class="ti-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="sync2" class="owl-carousel owl-theme owl-none">
                                            <div class="item">
                                                <div class="dlab-media">
                                                    <img src="images/product/product/thumb/item1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="dlab-media">
                                                    <img src="images/product/product/thumb/item2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="dlab-media">
                                                    <img src="images/product/product/thumb/item3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="dlab-media">
                                                    <img src="images/product/product/thumb/item4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="dlab-media">
                                                    <img src="images/product/product/thumb/item5.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-7 ">
                                    <form method="post" className="cart sticky-top">
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title"><a href="#">Product name</a></h4>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                            <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>
                                        </div>
                                        <div className="relative">
                                            <h3 className="m-tb10">$2,140.00 </h3>
                                            <div className="shop-item-rating">
                                                <span className="rating-bx">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </span>
                                                <span>4.5 Rating</span>
                                            </div>
                                        </div>
                                        <div className="shop-item-tage">
                                            <span>Tags :- </span>
                                            <a href="">Shoes,</a>
                                            <a href="">Clothing</a>
                                            <a href="">T-shirts</a>
                                        </div>
                                        <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>
                                        <div className="row">
                                            <div className="m-b30 col-md-7">
                                                <h6>Product Size</h6>
                                                <div className="btn-group product-item-size" data-toggle="buttons">
                                                    <label className="btn active">
                                                        <input type="radio" name="options" id="option1" />XS
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option2" /> LG
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option3" /> MD
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option4" /> SM
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option5" /> Xl
											        </label>
                                                </div>
                                            </div>
                                            <div className="m-b30 col-md-5">
                                                <h6>Select quantity</h6>
                                                <div className="quantity btn-quantity style-1">
                                                    <input id="demo_vertical2" type="text" value="1" name="demo_vertical2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-b30">
                                            <h6>Select the color</h6>
                                            <div className="btn-group product-item-color" data-toggle="buttons">
                                                <label className="btn bg-red active">
                                                    <input type="radio" name="options" id="option6" checked />
                                                </label>
                                                <label className="btn bg-pink">
                                                    <input type="radio" name="options" id="option7" />
                                                </label>
                                                <label className="btn bg-yellow">
                                                    <input type="radio" name="options" id="option8" />
                                                </label>
                                                <label className="btn bg-blue">
                                                    <input type="radio" name="options" id="option9" />
                                                </label>
                                                <label className="btn bg-green">
                                                    <input type="radio" name="options" id="option10" />
                                                </label>
                                            </div>
                                        </div>
                                        <button className="site-button radius-no"><i className="ti-shopping-cart"></i> Add To Cart</button>
                                    </form>
                                </div>
                            </div>
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
                                                                <div className="comment-form-rating">
                                                                    {/* <label className="pull-left m-r20">Your Rating</label> */}
                                                                    <div class='rating-widget'>
                                                                        {/* <!-- Rating Stars Box --> */}
                                                                        {/* <div class='rating-stars'>
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
                                                                        </div> */}
                                                                    </div>
                                                                </div>
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
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="m-b20">Related Products</h5>
                                    <ShopCarousel />
                                </div>
							</div>
                        </div>
                        {/* <!-- Product details --> */}
                    </div>
                    {/* <!-- contact area  END --> */}
                    <div className="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-gift"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-plane"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-history"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">60 days money back guranty!</h5>
                                            <p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
                                        </div>
                                    </div>
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
export default ShopProductDetails;