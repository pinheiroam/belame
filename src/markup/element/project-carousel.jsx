import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class ProjectCarousel extends Component {
    
	render() {
        return (
            <>

                <OwlCarousel
                    className="widget-project-box owl-none owl-loaded owl-theme owl-carousel dots-style-1 owl-dots-black-full"
                    loop
                    items={1}
				>

					<div className="item"><img src="images/our-services/pic1.jpg" alt="" /></div>
					<div className="item"><img src="images/our-services/pic2.jpg" alt="" /></div>
					<div className="item"><img src="images/our-services/pic3.jpg" alt="" /></div>

                </OwlCarousel>



            </>
        );
    }
}

export default ProjectCarousel;