import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class HomeCarousel6 extends Component {

	state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1024: {
                items: 3,
            },
			1200: {
                items: 4,
            },
        },
	}
	
	render() {
		return (
			<>

				<OwlCarousel
					className="portfolio-carousel owl-carousel owl-none"
					loop
					margin={10}
					nav
					items={4}
					responsive={this.state.responsive}
				>
					<div className="item">
						<div className="dlab-box portfolio-box">
							<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic1.jpg" alt="" />
								<div className="dlab-info-has p-a15 bg-primary">
									<a href="#" className="site-button outline radius-xl white">Wordpress</a>
									<a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
								</div>
								<div className="overlay-bx">
									<div className="overlay-icon text-white">
										<h5>Website Name</h5>
										<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
										<a href="images/project/pic1.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
										<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-box portfolio-box">
							<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic2.jpg" alt="" />
								<div className="dlab-info-has p-a15 bg-primary">
									<a href="#" className="site-button outline radius-xl white">Wordpress</a>
									<a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
								</div>
								<div className="overlay-bx">
									<div className="overlay-icon text-white">
										<h5>Website Name</h5>
										<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
										<a href="images/project/pic1.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
										<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-box portfolio-box">
							<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic3.jpg" alt="" />
								<div className="dlab-info-has p-a15 bg-primary">
									<a href="#" className="site-button outline radius-xl white">Wordpress</a>
									<a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
								</div>
								<div className="overlay-bx">
									<div className="overlay-icon text-white">
										<h5>Website Name</h5>
										<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
										<a href="images/project/pic1.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
										<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-box portfolio-box">
							<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src="images/project/pic4.jpg" alt="" />
								<div className="dlab-info-has p-a15 bg-primary">
									<a href="#" className="site-button outline radius-xl white">Wordpress</a>
									<a href="#" className="site-button outline radius-xl white pull-right">Vist Site</a>
								</div>
								<div className="overlay-bx">
									<div className="overlay-icon text-white">
										<h5>Website Name</h5>
										<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
										<a href="images/project/pic1.jpg" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
										<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>

				</OwlCarousel>



			</>
		);
	}
}

export default HomeCarousel6;