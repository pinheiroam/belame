import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShopColumnsSidebar extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt"  style={{ backgroundImage: "url(" + './images/banner/bnr5.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Shop Columns Sidebar</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Shop Columns Sidebar</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row sp10-sm">
                                <div className="col-lg-12 col-md-12 col-sm-12 filter-bar">
                                    <div className="filter-mobile">
                                        <div className="filter-bx">
                                            <select>
                                                <option>Sort By</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className="filter-bx">
                                            <a href="javascript:;" className="filter-btn black"><i className="fa fa-filter"></i> Fillter</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 sticky-top filter-bar">
                                    <aside className="side-bar shop-categories filter-left filter-off">
                                        <a href="javascript:;" className="filter-btn close black"><i className="fa fa-close"></i></a>
                                        <div className="widget recent-posts-entry">
                                            <div className="dlab-accordion advanced-search toggle" id="accordion1">
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#categories">
                                                                Product categories
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="categories" className="acod-body collapse show">
                                                        <div className="acod-content">
                                                            <div className="widget widget_services">
                                                                <ul>
                                                                    <li>Bags</li>
                                                                    <li>Jeans</li>
                                                                    <li>Shoes</li>
                                                                    <li>Sweaters</li>
                                                                    <li>Tops</li>
                                                                    <li>Women</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#price-range">
                                                                Price Range
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="price-range" className="acod-body collapse show">
                                                        <div className="acod-content">
                                                            <div className="price-slide-2 range-slider">
                                                                <div className="price">
                                                                    <input type="text" id="amount-2" className="amount" readonly="" value="$400 - $4000" />
                                                                    <div id="slider-range-2"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#color" >
                                                                COLOR
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="color" className="acod-body collapse show">
                                                        <div className="acod-content">
                                                            <h6>Select the color</h6>
                                                            <div className="btn-group product-item-color" data-toggle="buttons">
                                                                <label className="btn bg-red active">
                                                                    <input name="options" id="option1" checked="" type="radio" />
                                                                </label>
                                                                <label className="btn bg-pink">
                                                                    <input name="options" id="option2" type="radio" />
                                                                </label>
                                                                <label className="btn bg-yellow">
                                                                    <input name="options" id="option3" type="radio" />
                                                                </label>
                                                                <label className="btn bg-blue">
                                                                    <input name="options" id="option4" type="radio" />
                                                                </label>
                                                                <label className="btn bg-green">
                                                                    <input name="options" id="option5" type="radio" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#size">
                                                                Size
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="size" className="acod-body collapse show">
                                                        <div className="acod-content">
                                                            <h6>Product Size</h6>
                                                            <div className="btn-group product-item-size" data-toggle="buttons">
                                                                <label className="btn active">
                                                                    <input name="options" id="option6" checked="" type="radio" />XS
													</label>
                                                                <label className="btn">
                                                                    <input name="options" id="option7" type="radio" /> LG
													</label>
                                                                <label className="btn">
                                                                    <input name="options" id="option8" type="radio" /> MD
													</label>
                                                                <label className="btn">
                                                                    <input name="options" id="option9" type="radio" /> SM
													</label>
                                                                <label className="btn">
                                                                    <input name="options" id="option10" type="radio" /> Xl
													</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#vendor">
                                                                VENDOR
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="vendor" className="acod-body collapse show">
                                                        <div className="acod-content">
                                                            <div className="product-brand">
                                                                <div className="search-content">
                                                                    <input id="seating1" type="checkbox" />
                                                                    <label for="seating1" className="search-content-area">Gap</label>
                                                                </div>
                                                                <div className="search-content">
                                                                    <input id="seating2" type="checkbox" />
                                                                    <label for="seating2" className="search-content-area">Guess</label>
                                                                </div>
                                                                <div className="search-content">
                                                                    <input id="seating3" type="checkbox" />
                                                                    <label for="seating3" className="search-content-area">Lacoste</label>
                                                                </div>
                                                                <div className="search-content">
                                                                    <input id="seating4" type="checkbox" />
                                                                    <label for="seating4" className="search-content-area">Levi's</label>
                                                                </div>
                                                                <div className="search-content">
                                                                    <input id="seating5" type="checkbox" />
                                                                    <label for="seating5" className="search-content-area">Polo</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#tags" className="collapsed" >
                                                                POPULAR TAGS
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="tags" className="acod-body collapse">
                                                        <div className="acod-content">
                                                            <div className="widget_tag_cloud radius">
                                                                <div className="tagcloud"> <a href="javascript:void(0);">Design</a>
                                                                    <a href="javascript:void(0);">User interface</a>
                                                                    <a href="javascript:void(0);">SEO</a>
                                                                    <a href="javascript:void(0);">WordPress</a>
                                                                    <a href="javascript:void(0);">Development</a>
                                                                    <a href="javascript:void(0);">Joomla</a>
                                                                    <a href="javascript:void(0);">Design</a>
                                                                    <a href="javascript:void(0);">User interface</a>
                                                                    <a href="javascript:void(0);">SEO</a>
                                                                    <a href="javascript:void(0);">WordPress</a>
                                                                    <a href="javascript:void(0);">Development</a>
                                                                    <a href="javascript:void(0);">Joomla</a>
                                                                    <a href="javascript:void(0);">Design</a>
                                                                    <a href="javascript:void(0);">User interface</a>
                                                                    <a href="javascript:void(0);">SEO</a>
                                                                    <a href="javascript:void(0);">WordPress</a>
                                                                    <a href="javascript:void(0);">Development</a>
                                                                    <a href="javascript:void(0);">Joomla</a> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel">
                                                    <div className="acod-head">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#features" className="collapsed" >
                                                                Features
												</a>
                                                        </h5>
                                                    </div>
                                                    <div id="features" className="acod-body collapse">
                                                        <div className="acod-content">
                                                            <div className="item-widgets-box">
                                                                <div className="item-widgets-left">
                                                                    <img src="images/product/thumb/item1.jpg" alt="" />
                                                                </div>
                                                                <div className="item-widgets-body text-black">
                                                                    <h6 className="item-title text-uppercase font-weight-500 m-t0"><a href="#">Product Title</a></h6>
                                                                    <ul className="item-review text-yellow-light">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="item-widgets-box">
                                                                <div className="item-widgets-left">
                                                                    <img src="images/product/thumb/item2.jpg" alt="" />
                                                                </div>
                                                                <div className="item-widgets-body text-black">
                                                                    <h6 className="item-title text-uppercase font-weight-500 m-t0"><a href="#">Product Title</a></h6>
                                                                    <ul className="item-review text-yellow-light">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="item-widgets-box">
                                                                <div className="item-widgets-left">
                                                                    <img src="images/product/thumb/item3.jpg" alt="" />
                                                                </div>
                                                                <div className="item-widgets-body text-black">
                                                                    <h6 className="item-title text-uppercase font-weight-500 m-t0"><a href="#">Product Title</a></h6>
                                                                    <ul className="item-review text-yellow-light">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 ">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item1.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Checked Short Dress</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src="images/product/item2.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Slim Fit Chinos</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item3.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Dark Brown Boots</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item4.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Light Blue Denim Dress</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item5.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Green Trousers</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src="images/product/item6.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Unisex Sunglasses</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item7.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Blue Round-Neck Tshirt</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item8.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Men Grey Casual Shoes</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item1.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Checked Short Dress</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src="images/product/item2.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Slim Fit Chinos</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item3.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Dark Brown Boots</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src="images/product/item4.jpg" alt="" />
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="ti-eye"></i></a></li>
                                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><a href="#">Light Blue Denim Dress</a></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    <div className="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
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
                                <div className="col-md-4 col-sm-4">
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
                                <div className="col-md-4 col-sm-4">
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
export default ShopColumnsSidebar;