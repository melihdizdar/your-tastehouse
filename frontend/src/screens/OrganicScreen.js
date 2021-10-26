import React from 'react'
import "./styles/organic.css";
import { Link } from 'react-router-dom';
import { Col, Row,Container,Card,Button} from "react-bootstrap"
import  fistik_ezmesi from "../images/fistik_ezmesi.png";
import  zeytinyagi from "../images/zeytinyagi.png";
import  biber_salcasi from "../images/biber_salcasi.png";
import  domates_salcasi from "../images/domates_salcasi.png";
import  kirmizi_toz_biber from "../images/kirmizi_toz_biber.png";
import  karabiber from "../images/karabiber.png";
import  kimyon from "../images/kimyon.png";
import  tarcin from "../images/tarcin.png";
import  kuru_nane from "../images/kuru_nane.png";
import  kuru_dolma from "../images/kuru_dolma.png";
import  nar_eksisi from "../images/nar_eksisi.png";
import  uzum_pekmezi from "../images/uzum_pekmezi.png";

export default function OrganicScreen() {
    return (
        <div className="organic">
            <div className="organicContent">
                <div className="organicHeader">ORGANİK ÜRÜNLER</div>
                <div className="organicbar"></div>
                <div className="handmadeGroup">
                    <Container>
                        <Row>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={fistik_ezmesi} className="organicImage" alt="fistik_ezmesi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Fıstık Ezmesi</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={zeytinyagi} className="organicImage" alt="zeytinyagi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Zeytinyağı</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={biber_salcasi} className="organicImage" alt="biber_salcasi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Biber Salçası</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={domates_salcasi} className="organicImage" alt="domates_salcasi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Domates Salçası</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'3%'}}>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={kirmizi_toz_biber} className="organicImage" alt="kirmizi_toz_biber"/>
                                    <Card.Body>
                                        <Card.Title><h4>Kırmızı Toz Biber</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={karabiber} className="organicImage" alt="karabiber"/>
                                    <Card.Body>
                                        <Card.Title><h4>Karabiber<br/>( Tane veya Toz)</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={kimyon} className="organicImage" alt="kimyon"/>
                                    <Card.Body>
                                        <Card.Title><h4>Kimyon<br/>(Taze Cekilmiş)</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={tarcin} className="organicImage" alt="tarcin"/>
                                    <Card.Body>
                                        <Card.Title><h4>Tarçın<br/>(Çubuk veya Toz)</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'3%'}}>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={kuru_nane} className="organicImage" alt="kuru_nane"/>
                                    <Card.Body>
                                        <Card.Title><h4>Kuru Nane</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={kuru_dolma} className="organicImage" alt="kuru_dolma"/>
                                    <Card.Body>
                                        <Card.Title><h4>Kuru Dolma</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={nar_eksisi} className="organicImage" alt="nar_eksisi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Nar Ekşisi</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} lg={3} className="handmadeItemColumn">
                                <Card className="orgaicProductCard">
                                    <Card.Img src={uzum_pekmezi} className="organicImage" alt="uzum_pekmezi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Üzüm Pekmezi</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'3%',textAlign:'center'}}>
                            <Col className="handmadeItemColumn">
                                <Link to="/products"><Button className="BackButton">Geri Dön</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
