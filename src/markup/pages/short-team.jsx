import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShortTeam extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Our Team</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Our Team</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full content-inner bg-gray">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Team</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic1.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic2.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section">
                                            <img src="images/our-team/pic3.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="team-section ">
                                            <img src="images/our-team/pic4.jpg" alt="" />
                                            <div className="team-content text-white">
                                                <p className="m-a0">Manager</p>
                                                <h6 className="text-uppercase text-black m-b0">John Deo</h6>
                                                <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                <ul className="list-inline m-a0">
                                                    <li><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full text-center bg-gray content-inner">
                            <div className="sort-title-bx text-left" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2>Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic5.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dlab-title-bx p-a10">
                                                <h5 className="text-black m-a0">John Doe</h5>
                                                <span className="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic6.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dlab-title-bx p-a10">
                                                <h5 className="text-black m-a0">John Doe</h5>
                                                <span className="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic7.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dlab-title-bx p-a10">
                                                <h5 className="text-black m-a0">John Doe</h5>
                                                <span className="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6 m-b5 wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src="images/our-team/pic8.jpg" alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-twitter"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-linkedin"></a></li>
                                                            <li><a href="javascript:void(0);" className="fa text-white fa-facebook"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dlab-title-bx p-a10">
                                                <h5 className="text-black m-a0">John Doe</h5>
                                                <span className="clearfix">Creative Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team Section END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortTeam;