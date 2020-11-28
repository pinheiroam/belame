import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class HomeCarousel4 extends Component {
    render() {
        return (
            <>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    nav={false}
                    items={1}
                    dots={false}
                >
                    <div className="item">
                        <img src="images/blog/grid/pic1.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="images/blog/grid/pic2.jpg" alt="" />
                    </div>

                </OwlCarousel>



            </>
        );
    }
}

export default HomeCarousel4;