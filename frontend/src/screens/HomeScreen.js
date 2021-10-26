import React from 'react';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { Carousel } from 'react-responsive-carousel';
import {Carousel,CardGroup} from "react-bootstrap";
import Slide from 'react-reveal/Slide'
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import fistik_ezmesi from "../images/fistik_ezmesi.png";
import zeytinyagi from "../images/zeytinyagi.png";
import biber_salcasi from "../images/biber_salcasi.png";
import domates_salcasi from "../images/domates_salcasi.png";
import kirmizi_toz_biber from "../images/kirmizi_toz_biber.png";
import karabiber from "../images/karabiber.png";
import kimyon from "../images/kimyon.png";
import tarcin from "../images/tarcin.png";
import kuru_nane from "../images/kuru_nane.png";
import kuru_dolma from "../images/kuru_dolma.png";
import nar_eksisi from "../images/nar_eksisi.png";
import uzum_pekmezi from "../images/uzum_pekmezi.png";
import './styles/home.css'

export default function HomeScreen() {
    return (
        <div className="home">
            <div className="slider">
                <Carousel touch={true} interval={4000} indicators={false}>
                    <Carousel.Item>
                        <img className="slideritem" src={slider1} alt="First slide" />
                        <Carousel.Caption>
                            <Slide bottom cascade>
                                <div className="slideritemtextposition">
                                    <p className="slideritemtext">
                                        Buğdaydan gelen lezzetler
                                    </p>
                                </div>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slideritem" src={slider2} alt="Second slide" />
                        <Carousel.Caption>
                            <Slide bottom cascade>
                                <div className="slideritemtextposition2">
                                    <p className="slideritemtext2">
                                        El yapımı ürünler
                                    </p>
                                </div>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slideritem" src={slider3} alt="Third slide" />
                        <Carousel.Caption>
                            <Slide bottom cascade>
                                <div className="slideritemtextposition3">
                                    <p className="slideritemtext3">
                                        Organik lezzetler
                                    </p>
                                </div>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="textStage">
                <div className="textHeader">LEZZET EVİNİZ</div>
                <div className="lebar"></div>
                <div className="textContent">
                    <div className="textContentP">
                        <p>Yemek yapmak bir aşktır.
    Birbirinden lezzetli sofralar kurmak için en önem verdiğimiz şey tabi ki sevgimiz.
    'Lezzet Eviniz' olarak tamamen doğal ürünlerden oluşan ürünlerimizle eşsiz tatları mutfaklarınıza taşıyoruz.
    Ürünlerimizin malzemeleri Anadolu'da yaşayan emekçi kadınlar tarafından üretilip mutfağımızda buluşuyor.
    Ve bu ürünler sayesinde yöresel lezzetlerin en güzel ve en özel tariflerini sizlere sunarak,
    görkemli bir ziyafet deneyimi yaşamanızı garanti ediyoruz.</p>
                    </div>
                </div>
            </div>
            <div className="textStage">
                <div className="textHeader">EL YAPIMI ÜRÜNLER</div>
                <div className="hproductheaderbar"></div>
            </div>
            <div className="textStage">
                <div className="textHeader">ORGANİK ÜRÜNLER</div>
                <div className="hproductheaderbar"></div>
            </div>
            <div className="CardCarousel">
                <div className="CardCarouselContent">
                    <Slide left>
                        <Carousel touch={true} interval={100000} indicators={false} fade>
                            <Carousel.Item>
                                <CardGroup className="CardGroup">
                                    <img className="CardCarouselItem" src={fistik_ezmesi} alt="empty"/>
                                    <img className="CardCarouselItem" src={zeytinyagi} alt="empty"/>
                                    <img className="CardCarouselItem" src={biber_salcasi} alt="empty"/>
                                    <img className="CardCarouselItem" src={domates_salcasi} alt="empty"/>
                                </CardGroup>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CardGroup className="CardGroup">
                                    <img className="CardCarouselItem" src={kirmizi_toz_biber} alt="empty"/>
                                    <img className="CardCarouselItem" src={karabiber} alt="empty"/>
                                    <img className="CardCarouselItem" src={kimyon} alt="empty"/>
                                    <img className="CardCarouselItem" src={tarcin} alt="empty"/>
                                </CardGroup>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CardGroup className="CardGroup">
                                    <img className="CardCarouselItem" src={kuru_nane} alt="empty"/>
                                    <img className="CardCarouselItem" src={kuru_dolma} alt="empty"/>
                                    <img className="CardCarouselItem" src={nar_eksisi} alt="empty"/>
                                    <img className="CardCarouselItem" src={uzum_pekmezi} alt="empty"/>
                                </CardGroup>
                            </Carousel.Item>
                        </Carousel>
                    </Slide>
                </div>
            </div>
            {/*
            <div>
                <Carousel showArrows autoPlay showThumbs={false}>
                    <div>
                        <Link to="/">
                            <img src={slider1} alt={slider1} />
                            <p className="legend">Buğdaydan gelen lezzetler</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <img src={slider2} alt={slider2} />
                            <p className="legend">El yapımı ürünler</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <img src={slider3} alt={slider3} />
                            <p className="legend">Organik lezzetler</p>
                        </Link>
                    </div>
                </Carousel>
            </div>
            */}
        </div>
    )
}
