import React from 'react'
import icli_kofte from "../assets/icli.jpg";
import manti from "../assets/manti.jpg";
import borek from "../assets/borek.jpg";
import sarma from "../assets/sarma.jpg";
import muhammara from "../assets/muhammara.jpg";
import { Link } from 'react-router-dom';

export default function HandmadeScreen() {
    return (
        <section className="uk-section">
            <div className="uk-section uk-padding-remove-top uk-container">
                <div className="uk-margin-auto uk-text-center uk-width-1-1 uk-flex-center" data-uk-grid>
                    <h1 className="text-decoration uk-h2 header uk-padding-remove">El Yapımı Ürünler</h1>
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-container">
                    <div className="uk-grid-medium uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top uk-height-medium">
                                    <img src={icli_kofte} alt="icli_kofte" data-uk-img className="uk-width-1-1 uk-height-1-1"/>
                                </div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title text-decoration header">İçli Köfte</h3>
                                    <p>İster 5 çayının, ister akşam yemeğinin en özel vazgeçilmezi...</p>
                                </div>
                                <div className="uk-margin-medium-top">
                                    <div className="uk-container uk-flex uk-flex-center uk-position-bottom">
                                        <Link to=""><button className="uk-button uk-button-default uk-width-1-1">Detaylar için Tıklayınız</button></Link>
                                    </div>
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
                                <div className="uk-margin-medium-top">
                                    <div className="uk-container uk-flex uk-flex-center uk-position-bottom">
                                        <Link to=""><button className="uk-button uk-button-default uk-width-1-1">Detaylar için Tıklayınız</button></Link>
                                    </div>
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
                                <div className="uk-margin-medium-top">
                                    <div className="uk-container uk-flex uk-flex-center uk-position-bottom">
                                        <Link to=""><button className="uk-button uk-button-default uk-width-1-1">Detaylar için Tıklayınız</button></Link>
                                    </div>
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
                                <div className="uk-margin-medium-top">
                                    <div className="uk-container uk-flex uk-flex-center uk-position-bottom">
                                        <Link to=""><button className="uk-button uk-button-default uk-width-1-1">Detaylar için Tıklayınız</button></Link>
                                    </div>
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
                                <div className="uk-margin-medium-top">
                                    <div className="uk-container uk-flex uk-flex-center uk-position-bottom">
                                        <Link to=""><button className="uk-button uk-button-default uk-width-1-1">Detaylar için Tıklayınız</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-flex uk-flex-center">
                <Link to="/products" className="uk-link-reset"><button className="uk-button uk-button-default">Geri Dön</button></Link>
            </div>
        </section>
    )
}
