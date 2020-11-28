import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class Error405 extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr6.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Error 405</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Error 405</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- Error Page --> */}
                    <div className="section-full dz_error-405 content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 align-self-center">
                                    <div className="dz_error">405</div>
                                </div>
                                <div className="col-lg-7 m-b30">
                                    <h2 className="error-head">Server Error!</h2>
                                    <div className="dlab-divider bg-gray-dark"></div>
                                    <p className="font-16 error-content">You can go back to the Main Page by clicking the button.</p>
                                    <a href="index.html" className="site-button">Go To Home</a>
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
export default Error405;