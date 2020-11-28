import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ComingSoon2 extends Component {


    render() {
        return (
            <>

                <div className="style-1 sticky-header  ">
                    {/* <!-- Side Nav --> */}
                    <div id="mySidenav1" className="sidenav coming-side-bar content-scroll cs-sidenav"> <a href="javascript:void(0)"
                        className="closebtn bg-primary closebtn">&times;</a>
                        <div className="clearfix"></div>
                        <div className="p-a15 p-t15">
                            <div className="text-center">
                                <h2 className="m-b10">About Us</h2>
                                <p className="m-b5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
							not only five centuries, but also the leap into electronic typesetting.</p>

                            </div>
                            <div className="row m-t50">
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect off-color ">
                                            <img src="images/gallery/pic6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="p-a30 p-t15 text-center">
                                    <h2 className="m-b10">Contact Us</h2>
                                    <p className="max-w500 m-auto m-b0">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
								since.</p>
                                </div>
                                <div className="p-lr15 clearfix p-b30">
                                    <div className="dzFormMsg"></div>
                                    <form method="post" className="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="row clearfix">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" type="text" required className="form-control"
                                                            placeholder="Your Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzEmail" type="email" className="form-control" required
                                                            placeholder="Your Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <textarea name="dzMessage" rows="4" className="form-control" required
                                                            placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha"
                                                            data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                                            data-callback="verifyRecaptchaCallback"
                                                            data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none"
                                                            data-recaptcha="true" required
                                                            data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button name="submit" type="submit" value="Submit" className="site-button ">
                                                    <span>Submit</span> </button>
                                                <button name="Resat" type="reset" value="Reset" className="site-button m-l15">
                                                    <span>Reset</span> </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row p-lr15 clearfix">
                                    <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center col">
                                            <div className="icon-bx-sm bg-primary m-b20"> <a href="#" className="icon-cell"><i
                                                className="ti-mobile"></i></a> </div>
                                            <div className="icon-content">
                                                <h5>Phone</h5>
                                                <p>+91 564 548 4854</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center col">
                                            <div className="icon-bx-sm bg-primary m-b20"> <a href="#" className="icon-cell"><i
                                                className="ti-email"></i></a> </div>
                                            <div className="icon-content">
                                                <h6>Email</h6>
                                                <p>info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center col">
                                            <div className="icon-bx-sm bg-primary m-b20"> <a href="#" className="icon-cell"><i
                                                className="ti-location-pin"></i></a> </div>
                                            <div className="icon-content">
                                                <h5>Address</h5>
                                                <p>252 W 43rd St New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Side Nav End--> */}
                    {/* <!-- Coming Soon --> */}
                    <div className="dlab-coming-soon bg-img-fix dlab-coming-soon-full overlay-black-middle"
                        style={{ backgroundImage: "url(" + './images/background/bg5.jpg' + ")" }}>
                        <div className="container dlab-coming-bx">
                            <div className="top-head text-center logo-header">
                                <a href="index.html">
                                    <img src="images/logo-white.png" alt="" />
                                </a>
                            </div>
                            <div className="coming-soon-content text-center text-white m-b30">
                                <h2>Coming Soon</h2>
                            </div>
                            <div className="countdown text-center">
                                <div className="date"><span className="time days text-primary"></span>
                                    <span>Days</span>
                                </div>
                                <div className="date"><span className="time hours text-primary"></span>
                                    <span>Hours</span>
                                </div>
                                <div className="date"><span className="time mins text-primary"></span>
                                    <span>Minutess</span>
                                </div>
                                <div className="date"><span className="time secs text-primary"></span>
                                    <span>Second</span>
                                </div>
                            </div>
                            <div className="text-center m-t50 info-style-1">
                                <a href="#" className="site-button radius-xl m-lr5 openbtn">Read More</a>
                                <a data-toggle="modal" data-target="#myModal"
                                    className="site-button radius-xl outline white m-lr5">Subscribe</a>
                            </div>
                            <div className="social-icon">
                                <ul className="dlab-social-icon">
                                    <li><a href="#" className="fa fa-facebook"></a></li>
                                    <li><a href="#" className="fa fa-twitter"></a></li>
                                    <li><a href="#" className="fa fa-linkedin"></a></li>
                                    <li><a href="#" className="fa fa-google-plus"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Coming Soon End --> */}
                </div>

                <div className="modal fade contact-form" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form className="p-b20 dzSubscribe" action="script/mailchamp.php" method="post">
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="row">
                                        <button name="Resat" type="reset" value="Reset" data-dismiss="modal"
                                            className="close-btn">&times; </button>
                                        <div className="col-lg-12 text-center text-white">
                                            <h2 className="text-white">Stay Informed</h2>
                                            <p>Lorem ipsum dolor sit amet, repellat quos ipsum corrupti expedita sequi reprehenderit
									pariatur.</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="m-b15">
                                                <input id="contact_name" name="dzEmail" required="required" placeholder="Your Name"
                                                    name="name" type="text" required className="form-control radius-xl" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button name="submit" value="Submit" type="submit"
                                                className="site-button radius-xl outline btn-block">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>

                
            </>
        )
    }
}
export default ComingSoon2;