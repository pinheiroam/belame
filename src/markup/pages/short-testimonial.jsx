import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';
import TestimonialCarousel from '../element/testimonial';
import TestimonialCarousel2 from '../element/testimonial2';




class ShortTestimonial extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div class="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div class="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Testimonial</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Testimonial</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div class="content-block">
                        {/* <!-- Testimonials --> */}
                        <div class="section-full content-inner wow fadeIn" data-wow-delay="0.4s" style={{ backgroundImage: "url(" + './images/background/bg-map.jpg' + ")" }}>
                            <div class="sort-title-bx" data-name="Element Style 1">Element Style 1 <i class="fa fa-angle-double-right"></i></div>
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="box-title m-tb0">Our Testimonials<span class="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div class="section-content m-b30 row">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Clients Words --> */}
                        <div class="section-full overlay-primary-middle content-inner bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg2.jpg' + ")" }}>
                            <div class="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i class="fa fa-angle-double-right"></i></div>
                            <div class="container">
                                <div class="max-w600 m-auto text-center m-b30 text-white">
                                    <h6 class="m-t0">What people say</h6>
                                    <h2 class="m-t0">Clients Words</h2>
                                </div>
                                <div class="section-content m-b30 wow fadeIn" data-wow-delay="0.5s">
                                    <TestimonialCarousel2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Clients Words END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortTestimonial;