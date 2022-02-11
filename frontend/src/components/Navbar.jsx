/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navbar() {
    return (
        <header data-uk-sticky>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item">
                        Logo
                    </div>
                </div>
                <div className="uk-navbar-right uk-hidden@m">
                    <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#" data-uk-toggle="target: #offcanvas-nav; flip: true;"></a>
                </div>
                <div className="uk-navbar-right uk-visible@m">
                    <ul className="uk-navbar-nav">
                        <li className="uk-navbar-item">
                            <a href="#">ANASAYFA</a>
                        </li>
                        <li className="uk-navbar-item">
                            <a href="#">ÜRÜNLER</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="#">EL YAPIMI</a></li>
                                    <li><a href="#">ORGANİK</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="uk-navbar-item">
                            <a href="#">İLETİŞİM</a>
                        </li>
                    </ul>
                </div>
                <div id="offcanvas-nav" data-uk-offcanvas="overlay: true; flip:true; esc-close:false;">
                    <button className="uk-offcanvas-close uk-text-large" type="button" data-uk-close></button>
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                        <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical uk-text-large">
                            <li><a href="#">ANASAYFA</a></li>
                            <li><a href="#">ÜRÜNLER</a></li>
                            <li><a href="#">İLETİŞİM</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
