/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import slider from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import icli_kofte from "../assets/icli.jpg";
import manti from "../assets/manti.jpg";
import borek from "../assets/borek.jpg";
import sarma from "../assets/sarma.jpg";
import muhammara from "../assets/muhammara.jpg";
import cocuk_menusu from "../assets/cocuk_menusu.jpg";
import biberiye from "../assets/biberiye.jpg";
import karabiber from "../assets/karabiber.jpg";
import kekik from "../assets/kekik.jpg";
import kimyon from "../assets/kimyon.jpg";
import nane from "../assets/nane.jpg";
import pulbiber from "../assets/pulbiber.jpg";
import zerdecal from "../assets/zerdecal.jpg";
import kori from "../assets/kori.jpg";

export default function HomeScreen() {
    return (
        <>
            <section data-uk-slideshow="animation: fade">
                <div className="uk-position-relative uk-visible-toggle" tabIndex="-1">
                    <ul className="uk-slideshow-items" data-uk-height-viewport="offset-top: true;">
                        <li>
                            <img src={slider} alt="slider1" data-uk-cover data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                            <div className="uk-position-center-left uk-position-small uk-text-center slider-text-align uk-light">
                                <h3 className="uk-margin-remove header">Buğdaydan gelen lezzetler</h3>
                            </div>
                        </li>
                        <li>
                            <img src={slider2} alt="slider2" data-uk-cover data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                            <div className="uk-position-center-left uk-position-small uk-text-center slider-text-align uk-light">
                                <h3 className="uk-margin-remove header">El yapımı ürünler</h3>
                            </div>
                        </li>
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
                </div>
                <ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-center uk-margin"></ul>
            </section>
            <section className="uk-section">
                <div className="uk-container">
                    <div className="uk-margin-auto uk-flex-center uk-text-center uk-text-emphasis uk-grid-small" data-uk-grid>
                        <div className="uk-padding-remove">
                            <h2 className="uk-width-1-1 text-decoration header">
                                LEZZET EVİNİZ
                            </h2>
                        </div>
                        <p className="uk-padding-remove">
                            Yemek yapmak bir aşktır.Birbirinden lezzetli sofralar kurmak için en önem verdiğimiz şey tabi ki sevgimiz.'Lezzet Eviniz' olarak tamamen doğal ürünlerden oluşan ürünlerimizle eşsiz tatları mutfaklarınıza taşıyoruz.Ürünlerimizin malzemeleri Anadolu'da yaşayan emekçi kadınlar tarafından üretilip mutfağımızda buluşuyor.Ve bu ürünler sayesinde yöresel lezzetlerin en güzel ve en özel tariflerini sizlere sunarak,görkemli bir ziyafet deneyimi yaşamanızı garanti ediyoruz.
                        </p>
                    </div>
                </div>
            </section>
            <section className="uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-margin-auto uk-flex-center uk-text-center uk-text-emphasis uk-grid-small" data-uk-grid>
                        <div className="uk-padding-remove">
                            <h2 className="uk-width-1-1 text-decoration header">
                                EL YAPIMI ÜRÜNLER
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-padding-remove-bottom">
                    <div className="uk-container">
                        <div className="uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={icli_kofte} alt="icli_kofte" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">İçli Köfte</h3>
                                        <p>İster 5 çayının, ister akşam yemeğinin en özel vazgeçilmezi...</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={manti} alt="manti" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">Mantı</h3>
                                        <p>Sarımsaklı yoğurt ve tereyağlı sosuyla hayır diyemiyeceğiniz en güzel lezzet...</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={borek} alt="borek" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">Boşnak Böreği</h3>
                                        <p>Kat kat açılıp, çıtır çıtır pişen efsane lezzet...</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={sarma} alt="sarma" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">Zeytinyağlı Sarma</h3>
                                        <p>Ege'nin en güzel zeytinyağlısıyla sofranıza ayrı bir lezzet katın...</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={muhammara} alt="muhammara" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">Muhammara</h3>
                                        <p>En tatlı acılı muhammarayı denemeye hazırmısınız?</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top uk-height-medium">
                                        <img src={cocuk_menusu} alt="cocuk_menusu" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-decoration header">Çocuk Menüsü</h3>
                                        <p>Çocuklara özel acısız içli köfte..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-margin-auto uk-flex-center uk-text-center uk-text-emphasis uk-grid-small" data-uk-grid>
                        <div className="uk-padding-remove">
                            <h2 className="uk-width-1-1 text-decoration header">
                                ORGANİK ÜRÜNLER
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <div data-uk-slider>
                            <div className="uk-position-relative">
                                <div className="uk-slider-container uk-light">
                                    <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-small" data-uk-grid>
                                        <li>
                                            <img src={karabiber} alt="karabiber" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={kimyon} alt="kimyon" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={pulbiber} alt="pulbiber" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={zerdecal} alt="zerdecal" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={nane} alt="nane" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={kori} alt="kori" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={kekik} alt="kekik" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                        <li>
                                            <img src={biberiye} alt="biberiye" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uk-hidden@s uk-light">
                                    <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                    <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                </div>
                                <div className="uk-visible@s">
                                    <a className="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                    <a className="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
