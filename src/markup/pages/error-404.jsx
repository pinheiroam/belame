import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class Error404 extends Component {


    render() {
        return (
            <>
                <div className="dlab-bnr-inr full-height dz-error-area overlay-black-dark" style={{ backgroundImage: "url(" + './images/banner/bnr1.jpg' + ")" }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry align-m">
                            <div className="row max-w700 dz_error-404 text-white m-auto">
                                <div className="col-lg-4 m-tb30">
                                    <div className="bg-primary dz_error">
                                        404
						</div>
                                </div>
                                <div className="col-lg-8 m-b30">
                                    <h2 className="error-head">Something went wrong !</h2>
                                    <p className="font-16">We are sorry but it appears that the page you are looking for could not be found. We are working on it and we will get it fixed as soon as possible.</p>
                                    <p className="font-16">You can go back to the Main Page by clicking the button.</p>
                                    <a href="index.html" className="site-button">Go To Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Error404;