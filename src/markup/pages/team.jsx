import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

class Team extends Component {
	
	componentDidMount() {
        window.dz_rev_slider_3();
		window.Agency.load();
    }
	
    render() {
        return (
            <>
                <Header1 />

                <div class="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div class="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr3.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Our Team</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Our Team</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div class="content-block">
                        {/* <!-- Team Section --> */}
                        <div class="section-full text-center bg-white content-inner-1">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2>Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.2s">
                                        <div class="dlab-box">
                                            <div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic1.jpg" alt="" />
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <ul class="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dlab-title-bx p-a10">
                                                <h5 class="text-black m-a0">John Doe</h5>
                                                <span class="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.4s">
                                        <div class="dlab-box">
                                            <div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic2.jpg" alt="" />
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <ul class="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dlab-title-bx p-a10">
                                                <h5 class="text-black m-a0">John Doe</h5>
                                                <span class="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.6s">
                                        <div class="dlab-box">
                                            <div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic3.jpg" alt="" />
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <ul class="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dlab-title-bx p-a10">
                                                <h5 class="text-black m-a0">John Doe</h5>
                                                <span class="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.8s">
                                        <div class="dlab-box">
                                            <div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic4.jpg" alt="" />
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <ul class="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dlab-title-bx p-a10">
                                                <h5 class="text-black m-a0">John Doe</h5>
                                                <span class="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team Section END --> */}
                        {/* <!-- Mission And Vision --> */}
                        <div class="section-ful our-about-info content-inner-1 wow fadeIn " data-wow-delay="0.4s"  style={{ backgroundImage: "url(" + './images/background/bg-map.jpg' + ")" }}>
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="box-title m-tb0">Mission And Vision<span class="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div class="row dzseth m-b30">
                                    <div class="col-lg-6 col-md-6 m-b30 about-img wow fadeIn" data-wow-delay="0.8s">
                                        <img src="images/our-services/pic1.jpg" data-tilt alt="" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 m-b30 dis-tbl text-justify">
                                        <div class="dis-tbl-cell">
                                            <h3 class="box-title">Mision<span class="bg-primary"></span></h3>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row dzseth column-reverse">
                                    <div class="col-lg-6 col-md-6 dis-tbl text-justify">
                                        <div class="dis-tbl-cell">
                                            <h3 class="box-title">Vision<span class="bg-primary"></span></h3>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            <p class="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 about-img wow fadeIn" data-wow-delay="0.8s">
                                        <img src="images/our-services/pic2.jpg" data-tilt alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Mission And Vision END --> */}
						 
						{/* <!-- About Quotes --> */}
                        <div class="section-full p-b80">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="text-center max-w600 m-auto ">
                                            <div class="m-b20"><i class="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 class="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                            <a href="#" class="site-button radius-xl outline outline-2"><span class="p-lr10">Start New Projects</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Quotes END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Team;