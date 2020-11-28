import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class Error403 extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr1.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Error 403</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Error 403</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- Error Page --> */}
                    <div className="section-full dz_error-405 content-inner overlay-white-dark op95" style={{ backgroundImage: "url(" + './images/background/bg1.jpg' + ")",  backgroundPosition: "50% 50%" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 align-self-center">
                                    <div className="dz_error">403</div>
                                </div>
                                <div className="col-lg-7 m-b30">
                                    <h2 className="error-head text-primary">Something went wrong !</h2>
                                    <p className="font-16 text-black">We are sorry but it appears that the page you are looking for could not be found. We are working on it and we will get it fixed as soon as possible.</p>
                                    <div className="dlab-divider bg-black op3"></div>
                                    <p className="text-black">You can go back to the Main Page by clicking the button.</p>
									<div className="subscribe-form p-a0 max-w400">
										<form>
											<div className="input-group">
												<input name="text" className="form-control radius-no bg-black" placeholder="Search For Pages" type="text" />
												<span className="input-group-btn">
													<button type="submit" className="site-button radius-no">SEARCH</button>
												</span>
											</div>
										</form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Error Page END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Error403;