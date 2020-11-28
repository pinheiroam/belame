import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class BlogCarousel2 extends Component {

    state= {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    }

    render() {
        return (
            <>

                <OwlCarousel
                    className="blog-carousel owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-none owl-btn-center-lr owl-btn-1"
                    loop
                    margin={30}
                    nav
                    items={3}
                    responsive={this.state.responsive}
                    navText={this.state.navText}
                >

                    <div className="item">
                        <div className="blog-post blog-grid blog-rounded blog-effect1">
                            <div className="dlab-post-media dlab-img-effect "> <Link to={'blog-details'}><img src="images/blog/grid/pic1.jpg" alt="" /></Link> </div>
                            <div className="dlab-info p-a20 border-1">
                                <div className="dlab-post-title ">
                                    <h5 className="post-title font-weight-500"><Link to={'blog-details'}>Latest product, full of marvelous features and functionality</Link></h5>
                                </div>
                                <div className="dlab-post-meta ">
                                    <ul>
                                        <li className="post-date"> <i className="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <Link to={'#'}>Jone</Link> </li>
                                    </ul>
                                </div>
                                <div className="dlab-post-text">
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                </div>
                                <div className="dlab-post-readmore">
                                    <Link to={'blog-details'} title="READ MORE" rel="bookmark" className="site-button-link black outline">READ MORE <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-post blog-grid blog-rounded blog-effect1">
                            <div className="dlab-post-media dlab-img-effect "> <Link to={'blog-details'}><img src="images/blog/grid/pic2.jpg" alt="" /></Link> </div>
                            <div className="dlab-info p-a20 border-1">
                                <div className="dlab-post-title ">
                                    <h5 className="post-title font-weight-500"><Link to={'blog-details'}>Design a perfect website according to your need and desire</Link></h5>
                                </div>
                                <div className="dlab-post-meta ">
                                    <ul>
                                        <li className="post-date"> <i className="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <Link to={'#'}>Jone</Link> </li>
                                    </ul>
                                </div>
                                <div className="dlab-post-text">
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                </div>
                                <div className="dlab-post-readmore">
                                    <Link to={'blog-details'} title="READ MORE" rel="bookmark" className="site-button-link black outline">READ MORE <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-post blog-grid blog-rounded blog-effect1">
                            <div className="dlab-post-media dlab-img-effect "> <Link to={'blog-details'}><img src="images/blog/grid/pic3.jpg" alt="" /></Link> </div>
                            <div className="dlab-info p-a20 border-1">
                                <div className="dlab-post-title ">
                                    <h5 className="post-title font-weight-500"><Link to={'blog-details'}>Design a creative website with perfection and smart technology</Link></h5>
                                </div>
                                <div className="dlab-post-meta ">
                                    <ul>
                                        <li className="post-date"> <i className="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <Link to={'#'}>Jone</Link> </li>
                                    </ul>
                                </div>
                                <div className="dlab-post-text">
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                </div>
                                <div className="dlab-post-readmore">
                                    <Link to={'blog-details'} title="READ MORE" rel="bookmark" className="site-button-link black outline">READ MORE <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="item">
                        <div className="blog-post blog-grid blog-rounded blog-effect1">
                            <div className="dlab-post-media dlab-img-effect "> <Link to={'blog-details'}><img src="images/blog/grid/pic1.jpg" alt="" /></Link> </div>
                            <div className="dlab-info p-a20 border-1">
                                <div className="dlab-post-title ">
                                    <h5 className="post-title font-weight-500"><Link to={'blog-details'}>Latest product, full of marvelous features and functionality</Link></h5>
                                </div>
                                <div className="dlab-post-meta ">
                                    <ul>
                                        <li className="post-date"> <i className="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <Link to={'#'}>Jone</Link> </li>
                                    </ul>
                                </div>
                                <div className="dlab-post-text">
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                </div>
                                <div className="dlab-post-readmore">
                                    <Link to={'blog-details'} title="READ MORE" rel="bookmark" className="site-button-link black outline">READ MORE <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>



            </>
        );
    }
}

export default BlogCarousel2;