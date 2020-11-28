import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



class UnderMaintenance extends Component {


    render() {
        return (
            <>
                <div class="bg-white">
                    {/* <!-- inner page banner --> */}
                    <div class="under-construction" style={{"backgroundImage":"url(images/under-construction.jpg)","backgroundRepeat":"no-repeat","backgroundSize":"100%","backgroundPosition":"bottom"}}>
                        <div class="container">
                            <div class="row full-height">
                                <div class="col-md-12 col-lg-12 text-center header-ind">
                                    <div class="">
                                        <div class="logo-header">
                                            <img src="images/logo-black.png" alt="" />
                                        </div>
                                    </div>
                                    <h2>
                                        <span>Site Under</span> <br /> Maintenance
						            </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>
            </>
        )
    }
}
export default UnderMaintenance;