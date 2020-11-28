import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Belame from './pages/belame';
import Index from './pages/index';
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Index5 from './pages/index-5';
import Index6 from './pages/index-6';
import Index7 from './pages/index-7';
import About1 from './pages/about1';
import About2 from './pages/about2';
import BlogClassicGrid from './pages/blog-classic-grid';
import BlogClassicLeftSidebar from './pages/blog-classic-left-sidebar';
import BlogClassicRightSidebar from './pages/blog-classic-right-sidebar';
import BlogDetails from './pages/blog-details';
import BlogListLeftSidebar from './pages/blog-list-left-sidebar';
import BlogListRightSidebar from './pages/blog-list-right-sidebar';
import BlogStandardLeftSidebar from './pages/blog-standard-left-sidebar';
import BlogStandardRightSidebar from './pages/blog-standard-right-sidebar';
import BlogStandard from './pages/blog-standard';
import ComingSoon2 from './pages/coming-soon-2';
import Contact from './pages/contact';
import Error403 from './pages/error-403';
import Error404 from './pages/error-404';
import Error405 from './pages/error-405';
import Expertise from './pages/expertise';
import Faqs from './pages/faqs';
import Login from './pages/login';
import Register from './pages/register';
import OurProjects from './pages/our-projects';
import ProtfolioFullWidth from './pages/portfolio-full-width';
import PortfolioGrid2 from './pages/portfolio-grid-2';
import PortfolioGrid3 from './pages/portfolio-grid-3';
import PortfolioGrid4 from './pages/portfolio-grid-4';
import ProjectDetails from './pages/project-details';
import ProjectManagement from './pages/project-management';
import Service from './pages/service';
import ServicesDetails from './pages/services-details';
import ShopCart from './pages/shop-cart';
import ShopCheckout from './pages/shop-checkout';
import ShopColumnsSidebar from './pages/shop-columns-sidebar';
import ShopColumns from './pages/shop-columns';
import ShopLogin from './pages/shop-login';
import ShopProductDetails from './pages/shop-product-details';
import ShopRegister from './pages/shop-register';
import ShopWishlist from './pages/shop-wishlist';
import Team from './pages/team';
import UnderMaintenance from './pages/under-maintenance';
import ShortAccordions from './pages/short-accordions';
import ShortCounter from './pages/short-counter';
import ShortForm from './pages/short-form';
import ShortIconBox from './pages/short-icon-box';
import ShortPortfolio from './pages/short-portfolio';
import ShortTabs from './pages/short-tabs';
import ShortTeam from './pages/short-team';
import ShortTestimonial from './pages/short-testimonial';
import ReactRevSlider2 from './element/revslider2';
import Filter from './element/filter';


class Markup extends Component {
    render() {
        return (
            // <BrowserRouter basename={'/demo/agency'}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Belame} />
                    <Route path='/index' exact component={Index} />
                    <Route path='/index-2' exact component={Index2} />
                    <Route path='/index-3' exact component={Index3} />
                    <Route path='/index-4' exact component={Index4} />
                    <Route path='/index-5' exact component={Index5} />
                    <Route path='/index-6' exact component={Index6} />
                    <Route path='/index-7' exact component={Index7} />
                    <Route path='/about-1' component={About1} />
                    <Route path='/about-2' component={About2} />
                    <Route path='/blog-classic-grid' component={BlogClassicGrid} />
                    <Route path='/blog-classic-left-sidebar' component={BlogClassicLeftSidebar} />
                    <Route path='/blog-classic-right-sidebar' component={BlogClassicRightSidebar} />
                    <Route path='/blog-details' component={BlogDetails} />
                    <Route path='/blog-list-left-sidebar' component={BlogListLeftSidebar} />
                    <Route path='/blog-list-right-sidebar' component={BlogListRightSidebar} />
                    <Route path='/blog-standard-left-sidebar' component={BlogStandardLeftSidebar} />
                    <Route path='/blog-standard-right-sidebar' component={BlogStandardRightSidebar} />
                    <Route path='/blog-standard' component={BlogStandard} />
                    <Route path='/coming-soon-2' component={ComingSoon2} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/error-403' component={Error403} />
                    <Route path='/error-404' component={Error404} />
                    <Route path='/error-405' component={Error405} />
                    <Route path='/expertise' component={Expertise} />
                    <Route path='/faqs' component={Faqs} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/our-projects' component={OurProjects} />
                    <Route path='/portfolio-full-width' component={ProtfolioFullWidth} />
                    <Route path='/portfolio-grid-2' component={PortfolioGrid2} />
                    <Route path='/portfolio-grid-3' component={PortfolioGrid3} />
                    <Route path='/portfolio-grid-4' component={PortfolioGrid4} />
                    <Route path='/project-details' component={ProjectDetails} />
                    <Route path='/project-management' component={ProjectManagement} />
                    <Route path='/service' component={Service} />
                    <Route path='/services-details' component={ServicesDetails} />
                    <Route path='/shop-cart' component={ShopCart} />
                    <Route path='/shop-checkout' component={ShopCheckout} />
                    <Route path='/shop-columns-sidebar' component={ShopColumnsSidebar} />
                    <Route path='/shop-columns' component={ShopColumns} />
                    <Route path='/shop-login' component={ShopLogin} />
                    <Route path='/shop-product-details' component={ShopProductDetails} />
                    <Route path='/shop-register' component={ShopRegister} />
                    <Route path='/shop-wishlist' component={ShopWishlist} />
                    <Route path='/team' component={Team} />
                    <Route path='/under-maintenance' component={UnderMaintenance} />
                    <Route path='/short-accordions' component={ShortAccordions} />
                    <Route path='/short-counter' component={ShortCounter} />
                    <Route path='/short-form' component={ShortForm} />
                    <Route path='/short-icon-box' component={ShortIconBox} />
                    <Route path='/short-portfolio' component={ShortPortfolio} />
                    <Route path='/short-tabs' component={ShortTabs} />
                    <Route path='/short-team' component={ShortTeam} />
                    <Route path='/short-testimonial' component={ShortTestimonial} />
                    <Route path='/rev' component={ReactRevSlider2} />
                    <Route path='/filter' component={Filter} />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Markup;