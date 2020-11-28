import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class Faqs extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr4.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Faq's</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Faq's</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Your Faq --> */}
                        <div className="section-full overlay-white-middle content-inner" style={{ backgroundImage: "url(" + './images/pattern/pic1.jpg' + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h3>Do you have Questions?</h3>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                        <div className="faq-video">
                                            <a className="play-btn popup-youtube" href="https://www.youtube.com/embed/6lt2JfJdGSY">
                                                <i className="flaticon-play-button text-white"></i></a>
                                            <img src="images/about/pic10.jpg" alt="" className="img-cover radius-sm" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="dlab-accordion faq-1 box-sort-in m-b30" id="accordion1">
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#faq1" className="collapsed" data-parent="#faq1">
                                                            1. Web design aorem apsum dolor sit amet?</a> </h6>
                                                </div>
                                                <div id="faq1" className="acod-body collapse">
                                                    <div className="acod-content">Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#faq2" className="collapsed" data-parent="#faq2">
                                                            2. Graphic design aorem apsum dolor ?</a> </h6>
                                                </div>
                                                <div id="faq2" className="acod-body collapse">
                                                    <div className="acod-content">Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#faq3" className="collapsed" data-parent="#faq3">
                                                            3. Developement aorem apsum dolor sit amet ? </a> </h6>
                                                </div>
                                                <div id="faq3" className="acod-body collapse">
                                                    <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#faq4" className="collapsed" data-parent="#faq4">
                                                            4. True Responsiveness consectetuer adipiscing ? </a> </h6>
                                                </div>
                                                <div id="faq4" className="acod-body collapse">
                                                    <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#faq5" className="collapsed" data-parent="#faq5">
                                                            5. Claritas est etiam processus ?</a> </h6>
                                                </div>
                                                <div id="faq5" className="acod-body collapse">
                                                    <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Faq Info --> */}
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-bar-chart"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-trophy"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Unique design</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20">
                                                <a href="#" className="icon-cell"><i className="flaticon-devices"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">True Responsiveness</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Faq Info END --> */}
                            </div>
                        </div>
                        {/* <!-- Your Faq End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Faqs;