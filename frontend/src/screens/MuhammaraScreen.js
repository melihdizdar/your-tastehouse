import React from 'react'
import "./styles/muhammara.css"
import Gallery from 'react-grid-gallery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Row,Col,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MuhammaraScreen(){
    const FOTO =
[
    {
        src: "https://i.hizliresim.com/lf82oth.jpg",
        thumbnail: "https://i.hizliresim.com/lf82oth.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/1skfk3g.jpg",
        thumbnail: "https://i.hizliresim.com/1skfk3g.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/piqbk8o.jpg",
        thumbnail: "https://i.hizliresim.com/piqbk8o.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/q0t36i9.jpg",
        thumbnail: "https://i.hizliresim.com/q0t36i9.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ogx3k5w.jpg",
        thumbnail: "https://i.hizliresim.com/ogx3k5w.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
	    {
        src: "https://i.hizliresim.com/2crj1s0.jpg",
        thumbnail: "https://i.hizliresim.com/2crj1s0.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/cw35wqa.jpg",
        thumbnail: "https://i.hizliresim.com/cw35wqa.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/6r8tgl1.jpg",
        thumbnail: "https://i.hizliresim.com/6r8tgl1.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/gdjvhuv.jpg",
        thumbnail: "https://i.hizliresim.com/gdjvhuv.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    return (
        <div className="Muhammara">
            <div className="MuhammaraHeader">Muhammara</div>
            <div className="MuhammaraBar"></div>
            <div style={{ display: 'block', width:'100%', padding: 30,textAlign:'center'}}>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="first">
                                <Tab eventKey="first" title="Fotoğraf" tabClassName="MuhammaraTabs">
                                    <Gallery images={FOTO} enableImageSelection={false}/>
                                </Tab>
                                <Tab eventKey="second" title="Video" tabClassName="MuhammaraTabs">
                                    Yakında eklenecek...
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row style={{marginTop:'3%%',marginBottom:'3%',textAlign:'center'}}>
                    <Col className="handmadeItemColumn">
                        <Link to="/handmade"><Button className="BackButton">Geri Dön</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
