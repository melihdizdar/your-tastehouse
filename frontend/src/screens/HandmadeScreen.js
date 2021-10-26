import React from 'react'
import "./styles/handmade.css"
import { Col, Row,Container,Card,Button} from "react-bootstrap"
import Borek from "../images/Borek.png"
import Icli_kofte from "../images/Icli_kofte.png";
import Manti from "../images/Manti.png"
import Muhammara from "../images/Muhammara.png"
import Sarma from "../images/Sarma.png"
import { Link } from 'react-router-dom';

export default function HandmadeScreen() {
    return (
        <div className="handmade">
            <div className="handmadeContent">
                <div className="handmadeHeader">EL YAPIMI ÜRÜNLER</div>
                <div className="handmadebar"></div>
                <div className="handmadeGroup">
                    <Container>
                        <Row>
                            <Col md={4} lg={3} className="handmadeItemColumn">
                                <Card className="handmadeCard">
                                    <Card.Img src={Icli_kofte} className="handmadeImage" alt="icli_kofte"/>
                                    <Card.Body>
                                        <Card.Title><h4>İçli Köfte</h4></Card.Title>
                                        <Card.Text>
                                            <p>İster 5 çayının, ister akşam yemeğinin en özel vazgeçilmezi...</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/stuffedmeatballs"><Button className="handmadeButton">Detaylar için tıklayınız</Button></Link>
                                </Card>
                            </Col>
                            <Col md={4} lg={3} className="handmadeItemColumn">
                                <Card className="handmadeCard">
                                    <Card.Img src={Manti} className="handmadeImage" alt="manti"/>
                                    <Card.Body>
                                        <Card.Title><h4>Mantı</h4></Card.Title>
                                        <Card.Text>
                                            <p>Sarımsaklı yoğurt ve tereyağlı sosuyla hayır diyemiyeceğiniz en güzel lezzet...</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/turkishravioli"><Button className="handmadeButton">Detaylar için tıklayınız</Button></Link>
                                </Card>
                            </Col>
                            <Col md={4} lg={3} className="handmadeItemColumn">
                                <Card className="handmadeCard">
                                    <Card.Img src={Borek} className="handmadeImage" alt="bosnak_boregi"/>
                                    <Card.Body>
                                        <Card.Title><h4>Boşnak Böreği</h4></Card.Title>
                                        <Card.Text>
                                            <p>Kat kat açılıp, çıtır çıtır pişen efsane lezzet...</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/bosnianpastry"><Button className="handmadeButton">Detaylar için tıklayınız</Button></Link>
                                </Card>
                            </Col>
                            <Col md={4} lg={3} className="handmadeItemColumn">
                                <Card className="handmadeCard">
                                    <Card.Img src={Sarma} className="handmadeImage" alt="sarma"/>
                                    <Card.Body>
                                        <Card.Title><h4>Sarma</h4></Card.Title>
                                        <Card.Text>
                                            <p>Ege'nin en güzel zeytinyağlısıyla sofranıza ayrı bir lezzet katın...</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/stuffeddish"><Button className="handmadeButton">Detaylar için tıklayınız</Button></Link>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'3%'}}>
                            <Col md={4} lg={3} className="handmadeItemColumn">
                                <Card className="handmadeCard">
                                    <Card.Img src={Muhammara} className="handmadeImage" alt="muhammara"/>
                                    <Card.Body>
                                        <Card.Title><h4>Muhammara</h4></Card.Title>
                                        <Card.Text>
                                            <p>En tatlı acılı muhammarayı denemeye hazırmısınız?</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/muhammara"><Button className="handmadeButton">Detaylar için tıklayınız</Button></Link>
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
