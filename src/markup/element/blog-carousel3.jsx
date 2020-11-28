import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class BlogCarousel3 extends Component {

    // state = {
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 2,
    //         },
    //         1000: {
    //             items: 3,
    //         },
    //     },
    //     navText: ['<i className="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    // }

    render() {
        return (
            <>

                <OwlCarousel
                    className="widget-project-box owl-none owl-loaded owl-theme owl-carousel dots-style-1 owl-dots-black-full"
                    loop
                    margin={10}
                    nav={true}
                    items={1}
                    // responsive={this.state.responsive}
                    // navText={this.state.navText}
                >

                    <div className="item"><img src="images/our-services/pic1.jpg" alt="" /></div>
                    <div className="item"><img src="images/our-services/pic2.jpg" alt="" /></div>
                    <div className="item"><img src="images/our-services/pic3.jpg" alt="" /></div>

                </OwlCarousel>



            </>
        );
    }
}

export default BlogCarousel3;