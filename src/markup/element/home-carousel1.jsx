import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class HomeCarousel1 extends Component {
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
                    className="img-carousel-content owl-carousel owl-none wow fadeIn"
                    loop
                    margin={30}
                    nav
                    items={4}
					responsive={this.state.responsive}
                >
                    <div className="item">
								<div className="box-item-service text-center">
									<div className="item-service-content m-b40">
										<h5>Web Design</h5>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
									<div className="clearfix">
										<span className="text-primary round-center"></span>
									</div>
									<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
										<span className="icon-cell"><i className="flaticon-devices"></i></span> 
									</div>
									<Link to={'services-details'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
								</div>
							</div>
							<div className="item">
								<div className="box-item-service text-center">
									<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
										<span className="icon-cell"><i className="flaticon-pen"></i></span> 
									</div>
									<Link to={'services-details'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
									<div className="clearfix">
										<span className="text-primary round-center"></span>
									</div>
									<div className="item-service-content m-t40">
										<h5>Web Development</h5>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="box-item-service text-center">
									<div className="item-service-content m-b40">
										<h5>Mobile Applications</h5>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
									<div className="clearfix">
										<span className="text-primary round-center"></span>
									</div>
									<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
										<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
									</div>
									<Link to={'services-details'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
								</div>
							</div>
							<div className="item">
								<div className="box-item-service text-center">
									<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
										<span className="icon-cell"><i className="flaticon-team"></i></span> 
									</div>
									<Link to={'services-details'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
									<div className="clearfix">
										<span className="text-primary round-center"></span>
									</div>
									<div className="item-service-content m-t40">
										<h5>Internet marketing</h5>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
								</div>
							</div>

                </OwlCarousel>



            </>
        );
    }
}

export default HomeCarousel1;