import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class ProductSlider extends Component {


    render() {
        return (
            <>
                <Header1 />
                <Carousel>
                    <div>
                        <img src="images/product/item1.jpeg" />
                    </div>
                    <div>
                        <img src="images/product/item1.jpeg" />
                    </div>
                    <div>
                        <img src="images/product/item1.jpeg" />
                    </div>
                </Carousel>
                <Footer1 />
            </>
        )
    }
}
export default ProductSlider;