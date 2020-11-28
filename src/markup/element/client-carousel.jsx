import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class ClientCarousel extends Component {
    state= {
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
			768: {
                items: 4,
            },
            1000: {
                items: 5,
            },
			1500: {
                items: 6,
            },
        },
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    }
	
	render() {
        return (
            <>

                <OwlCarousel
                    className="client-logo-carousel owl-carousel owl-btn-center-lr owl-btn-3 owl-loaded owl-drag"
                    loop
                    margin={30}
                    nav
                    items={6}
                    dots={false}
					responsive={this.state.responsive}
                    navText={this.state.navText}
                >

                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo2.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo3.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo4.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo2.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo3.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo4.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo5.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo5.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                    <div className="item"><div className="br-col-b1 border-1"><img src="images/client-logo/logo/logo1.jpg" alt="" /></div></div>
                </OwlCarousel>



            </>
        );
    }
}

export default ClientCarousel;