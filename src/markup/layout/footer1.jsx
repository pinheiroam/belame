import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container wow fadeIn" data-wow-delay="0.5s">
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Company</h5>
                                        <ul>
											<li><a href="javascript:void(0);">About Us </a></li>
                                            <li><a href="javascript:void(0);">Home </a></li>
                                            <li><a href="javascript:void(0);">Contact Us</a></li>
                                            <li><a href="javascript:void(0);">About Us</a></li>
                                            <li><a href="javascript:void(0);">Our Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Useful Link</h5>
                                        <ul>
                                            <li><a href="javascript:void(0);">Create Account</a></li>
                                            <li><a href="javascript:void(0);">Company Philosophy </a></li>
                                            <li><a href="javascript:void(0);">Corporate Culture</a></li>
                                            <li><a href="javascript:void(0);">Portfolio</a></li>
                                            <li><a href="javascript:void(0);">Project Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact us</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><a href="javascript:void(0);" className="site-button facebook circle "><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="javascript:void(0);" className="site-button google-plus circle "><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="javascript:void(0);" className="site-button linkedin circle "><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="javascript:void(0);" className="site-button instagram circle "><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="javascript:void(0);" className="site-button twitter circle "><i className="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2020 DexignZone</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><a href="javascript:void(0);"> Help Desk</a></li>
                                            <li><a href="javascript:void(0);"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;