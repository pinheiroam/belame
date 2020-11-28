import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class ShopCarousel extends Component {
    state= {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
			768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
			1500: {
                items: 4,
            },
        },
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    }
	
	render() {
        return (
            <>

                <OwlCarousel
                    className="img-carousel-content owl-carousel owl-btn-center-lr owl-btn-1 primary owl-dots-none"
                    loop
                    margin={30}
                    items={4}
					nav={true}
					responsive={this.state.responsive}
					navText ={this.state.navText}
                >

                    <div className="item">
						<div className="item-box">
							<div className="item-img">
								<img src="images/product/item1.jpg" alt="" />
								<div className="item-info-in">
									<ul>
										<li><a href="#"><i className="ti-shopping-cart"></i></a></li>
										<li><a href="#"><i className="ti-eye"></i></a></li>
										<li><a href="#"><i className="ti-heart"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="item-info text-center text-black p-a10">
								<h6 className="item-title text-uppercase font-weight-500"><a href="#">Product Title</a></h6>
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
					<div className="item">
						<div className="item-box">
							<div className="item-img">
								<img src="images/product/item2.jpg" alt="" />
								<div className="item-info-in">
									<ul>
										<li><a href="#"><i className="ti-shopping-cart"></i></a></li>
										<li><a href="#"><i className="ti-eye"></i></a></li>
										<li><a href="#"><i className="ti-heart"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="item-info text-center text-black p-a10">
								<h6 className="item-title text-uppercase font-weight-500"><a href="#">Product Title</a></h6>
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
					<div className="item">
						<div className="item-box">
							<div className="item-img">
								<img src="images/product/item3.jpg" alt="" />
								<div className="item-info-in">
									<ul>
										<li><a href="#"><i className="ti-shopping-cart"></i></a></li>
										<li><a href="#"><i className="ti-eye"></i></a></li>
										<li><a href="#"><i className="ti-heart"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="item-info text-center text-black p-a10">
								<h6 className="item-title text-uppercase font-weight-500"><a href="#">Product Title</a></h6>
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
					<div className="item">
						<div className="item-box">
							<div className="item-img">
								<img src="images/product/item4.jpg" alt="" />
								<div className="item-info-in">
									<ul>
										<li><a href="#"><i className="ti-shopping-cart"></i></a></li>
										<li><a href="#"><i className="ti-eye"></i></a></li>
										<li><a href="#"><i className="ti-heart"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="item-info text-center text-black p-a10">
								<h6 className="item-title text-uppercase font-weight-500"><a href="#">Product Title</a></h6>
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
					<div className="item">
						<div className="item-box">
							<div className="item-img">
								<img src="images/product/item1.jpg" alt="" />
								<div className="item-info-in">
									<ul>
										<li><a href="#"><i className="ti-shopping-cart"></i></a></li>
										<li><a href="#"><i className="ti-eye"></i></a></li>
										<li><a href="#"><i className="ti-heart"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="item-info text-center text-black p-a10">
								<h6 className="item-title text-uppercase font-weight-500"><a href="#">Product Title</a></h6>
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

                </OwlCarousel>



            </>
        );
    }
}

export default ShopCarousel;