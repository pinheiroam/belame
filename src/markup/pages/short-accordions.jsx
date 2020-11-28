import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShortAccordions extends Component {

    componentDidMount(){
        window.Agency.load();
    }


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Accordions</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Accordions</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full overlay-white-middle content-inner">
                            <div className="sort-title-bx text-left" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30 wow fadeIn" data-wow-delay="0.2s">
                                        <div className="faq-video">
                                            <a className="play-btn popup-youtube" href="https://www.youtube.com/embed/6lt2JfJdGSY">
                                                <i className="flaticon-play-button text-white"></i></a>
                                            <img src="images/about/pic10.jpg" alt="" className="img-cover radius-sm" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortAccordions;