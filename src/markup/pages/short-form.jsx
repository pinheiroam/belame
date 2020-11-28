import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShortForm extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div class="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div class="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + './images/banner/bnr2.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Form</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Form</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div class="content-block">
                        {/* <!-- Contact Us --> */}
                        <div class="section-full content-inner-2 bg-white contact-form-bx" style={{ backgroundImage: "url(" + './images/background/bg16.jpg' + ")" }}>
                            <div class="sort-title-bx" data-name="Element Style 1">Element Style 1 <i class="fa fa-angle-double-right"></i></div>
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="text-uppercase"><span class="font-weight-300">Contact </span> us</h2>
                                </div>
                                <div class="dezPlaceAni">
                                    <div class="dzFormMsg"></div>
                                    <form method="post" class="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-sm-12">
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <label>Your Name</label>
                                                        <input name="dzName" type="text" required class="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <label>Your Email Address</label>
                                                        <input name="dzEmail" type="email" class="form-control" required placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <label>Phone</label>
                                                        <input name="dzOther[Phone]" type="text" required class="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <label>Your Message...</label>
                                                        <textarea name="dzMessage" rows="4" class="form-control" required placeholder="" ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                                                <button name="submit" type="submit" value="Submit" class="site-button outline outline-2 radius-xl button-md m-t30">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Contact Us End --> */}
                        <div class="section-full content-inner-2 bg-primary bg-img-fix overlay-primary tax-info-chart" style={{ backgroundImage: "url(" + './images/background/bg3.jpg' + ")" }}>
                            <div class="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i class="fa fa-angle-double-right"></i></div>
                            <div class="container">
                                <div class="row dzseth">
                                    <div class="col-lg-6 col-md-12 col-sm-12 d-flex mb-4 mb-md-4 mb-lg-0 wow fadeInLeft" data-wow-delay="0.2s">
                                        <div class="chart-box align-self-stretch d-flex">
                                            <canvas id="canvas" style={{"height":"200px"}} class="align-self-center" height="200px"></canvas>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 dis-tbl d-flex">
                                        <div class="bg-white text-black p-a30 p-t40 form-tax align-self-center wow fadeInRight" data-wow-delay="0.4s">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                                    <div class="form-group">
                                                        <label>choose your business</label>
                                                        <select class="form-control">
                                                            <option>Select Your Business</option>
                                                            <option>Marketing</option>
                                                            <option>IT Industries</option>
                                                            <option>Management Industries</option>
                                                            <option>Property Business</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                                    <div class="form-group">
                                                        <label>Country of residence</label>
                                                        <select class="form-control">
                                                            <option>Australia</option>
                                                            <option>United State</option>
                                                            <option>United Kingdom</option>
                                                            <option>Germany</option>
                                                            <option>Netherland</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-4">
                                                    <div class="form-group">
                                                        <label>employees</label>
                                                        <select class="form-control">
                                                            <option>Select Here</option>
                                                            <option>0-20</option>
                                                            <option>21-50</option>
                                                            <option>51-150</option>
                                                            <option>151-500</option>
                                                            <option>500+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12 mb-4">
                                                    <div class="form-group">
                                                        <label>Tax Year</label>
                                                        <select class="form-control">
                                                            <option>2000-2005</option>
                                                            <option>2006-2010</option>
                                                            <option>2011-2015</option>
                                                            <option>2016-2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-xl-5 col-lg-12 col-md-5 col-sm-12 col-12 mb-4">
                                                    <div class="form-group">
                                                        <label>Yearly total income</label>
                                                        <select class="form-control">
                                                            <option>Select Range</option>
                                                            <option>0 - 1 Million</option>
                                                            <option>1 Million - 3 Million</option>
                                                            <option>3 Million - 10 Million</option>
                                                            <option>10 Million - 20 Million</option>
                                                            <option>20Million+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-5 col-md-3 col-sm-12 col-12 mb-4 d-flex">
                                                    <div class="calculate align-self-end btn-block">
                                                        <button class="site-button btn-block" type="button">Calculate</button>
                                                    </div>
                                                </div>
                                                <div class="col-xl-8 col-lg-7 col-md-9 col-sm-12 col-12 mb-4">
                                                    <div class="calculate">
                                                        <div class="">
                                                            <label>Total Payable Tax</label>
                                                            <input type="text" class="form-control" placeholder="$000.00" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full content-inner-2 shop-account">
                            <div class="sort-title-bx" data-name="Element Style 3">Element Style 3 <i class="fa fa-angle-double-right"></i></div>
                            {/* <!-- Product --> */}
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 m-b30">
                                        <div class="p-a30 border-1  m-auto">
                                            <div class="tab-content">
                                                <form id="login-info" class="tab-pane active">
                                                    <h4 class="font-weight-700">PERSONAL INFORMATION</h4>
                                                    <p class="font-weight-600">If you have an account with us, please log in.</p>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">First Name *</label>
                                                        <input name="dzName" required="" class="form-control" placeholder="First Name" type="text" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">Last Name *</label>
                                                        <input name="dzName" required="" class="form-control" placeholder="Last Name" type="text" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">PASSWORD *</label>
                                                        <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password" />
                                                    </div>
                                                    <div class="text-left">
                                                        <button class="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 m-b30">
                                        <div class="p-a30 border-1 seth">
                                            <div class="tab-content nav">
                                                <form id="login" class="tab-pane active col-12 p-a0 ">
                                                    <h4 class="font-weight-700">LOGIN</h4>
                                                    <p class="font-weight-600">If you have an account with us, please log in.</p>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">PASSWORD *</label>
                                                        <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password" />
                                                    </div>
                                                    <div class="text-left">
                                                        <button class="site-button m-r5 button-lg radius-no">login</button>
                                                        <a data-toggle="tab" href="#forgot-password" class="m-l5"><i class="fa fa-unlock-alt"></i> Forgot Password</a>
                                                    </div>
                                                </form>
                                                <form id="forgot-password" class="tab-pane fade  col-12 p-a0">
                                                    <h4 class="font-weight-700">FORGET PASSWORD ?</h4>
                                                    <p class="font-weight-600">We will send you an email to reset your password. </p>
                                                    <div class="form-group">
                                                        <label class="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div class="text-left">
                                                        <a class="site-button outline gray button-lg radius-no" data-toggle="tab" href="#login">Back</a>
                                                        <button class="site-button pull-right button-lg radius-no">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product END --> */}
                        </div>
                        {/* <!-- Get in touch --> */}
                        <div class="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")" }}>
                            <div class="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i class="fa fa-angle-double-right"></i></div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 content-inner chosesus-content text-white">
                                        <h2 class="box-title m-b15 wow fadeInLeft" data-wow-delay="0.2s">Let's get in touch<span class="bg-primary"></span></h2>
                                        <p class="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                                        <h3 class="font-weight-500 m-b50 op6 wow fadeInLeft" data-wow-delay="0.6s">By 700+ customers for 3200+ Web and Mobile App development projects.</h3>
                                        <h4 class="wow fadeInLeft" data-wow-delay="0.8s">& What you will get:</h4>
                                        <ul class="list-checked primary wow fadeInLeft" data-wow-delay="1s">
                                            <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                            <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                            <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-7 col-md-7 m-b30">
                                        <form class="inquiry-form wow fadeInUp dzForm" data-wow-delay="0.2s" action="script/contact.php">
                                            <div class="dzFormMsg"></div>
                                            <h3 class="box-title m-t0 m-b10">Let's Convert Your Idea into Reality <span class="bg-primary"></span></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required class="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required class="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-email text-primary"></i></span>
                                                            <input name="dzEmail" type="email" class="form-control" required placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required class="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-file text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required class="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="ti-agenda text-primary"></i></span>
                                                            <textarea name="dzMessage" rows="4" class="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" class="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShortForm;