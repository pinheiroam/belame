import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShopCart extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr3.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Cart</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Shop Cart</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table check-tbl">
                                            <thead className="text-left">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Product name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Close</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item6.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical2" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item1.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical3" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item2.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical4" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item3.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical5" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item4.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical6" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-item-img"><img src="images/product/thumb/item5.jpg" alt="" /></td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical7" type="text" value="1" name="demo_vertical2" />
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">$28.00</td>
                                                    <td className="product-item-close"><a href="" className="ti-close"></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <form className="shop-form">
                                        <h5>Calculate Shipping</h5>
                                        <div className="form-group">
                                            <select>
                                                <option value="">Credit Card Type</option>
                                                <option value="">Another option</option>
                                                <option value="">A option</option>
                                                <option value="">Potato</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Credit Card Number" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Card Verification Number" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Coupon Code" />
                                        </div>
                                        <div className="form-group">
                                            <button className="site-button" type="button">Apply Coupon</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <h5>Cart Subtotal</h5>
                                    <table className="table-bordered check-tbl">
                                        <tbody>
                                            <tr>
                                                <td>Order Subtotal</td>
                                                <td>$125.96</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td>Coupon</td>
                                                <td>$28.00</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>$506.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-group">
                                        <button className="site-button" type="button">Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    <div className="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-gift"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-plane"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-history"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">60 days money back guranty!</h5>
                                            <p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShopCart;