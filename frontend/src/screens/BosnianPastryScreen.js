import React from 'react'
import "./styles/bosnianpastry.css"
import Gallery from 'react-grid-gallery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Row,Col,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BosnianPastryScreen() {
    const FOTO =
[
    {
        src: "https://i.hizliresim.com/qdvg8n4.jpg",
        thumbnail: "https://i.hizliresim.com/qdvg8n4.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/tihrd04.jpg",
        thumbnail: "https://i.hizliresim.com/tihrd04.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/kssqqc3.jpg",
        thumbnail: "https://i.hizliresim.com/kssqqc3.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/kolk9nz.jpg",
        thumbnail: "https://i.hizliresim.com/kolk9nz.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/hq798af.jpg",
        thumbnail: "https://i.hizliresim.com/hq798af.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/euwidkx.jpg",
        thumbnail: "https://i.hizliresim.com/euwidkx.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/okh6f36.jpg",
        thumbnail: "https://i.hizliresim.com/okh6f36.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/rpz59jm.jpg",
        thumbnail: "https://i.hizliresim.com/rpz59jm.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/3go4bp2.jpg",
        thumbnail: "https://i.hizliresim.com/3go4bp2.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/a7yis90.jpg",
        thumbnail: "https://i.hizliresim.com/a7yis90.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/51xazzc.jpg",
        thumbnail: "https://i.hizliresim.com/51xazzc.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/19co7p7.jpg",
        thumbnail: "https://i.hizliresim.com/19co7p7.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/sqxpbqp.jpg",
        thumbnail: "https://i.hizliresim.com/sqxpbqp.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/f9kp917.jpg",
        thumbnail: "https://i.hizliresim.com/f9kp917.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/hztgc2m.jpg",
        thumbnail: "https://i.hizliresim.com/hztgc2m.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/48gs8ob.jpg",
        thumbnail: "https://i.hizliresim.com/48gs8ob.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/bcudzc0.jpg",
        thumbnail: "https://i.hizliresim.com/bcudzc0.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/2mihqz4.jpg",
        thumbnail: "https://i.hizliresim.com/2mihqz4.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/o96icfi.jpg",
        thumbnail: "https://i.hizliresim.com/o96icfi.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/cvbjqoo.jpg",
        thumbnail: "https://i.hizliresim.com/cvbjqoo.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    const YAPILIS = 
[
    {
        src: "https://i.hizliresim.com/bs11rht.jpg",
        thumbnail: "https://i.hizliresim.com/bs11rht.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/jsaeapg.jpg",
        thumbnail: "https://i.hizliresim.com/jsaeapg.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/emx18cy.jpg",
        thumbnail: "https://i.hizliresim.com/emx18cy.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    return (
        <div className="Bosnianpastry">
            <div className="BosnianpastryHeader">Boşnak Böreği</div>
            <div className="BosnianpastryBar"></div>
            <div style={{ display: 'block', width:'100%', padding: 30,textAlign:'center'}}>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="first">
                                <Tab eventKey="first" title="Fotoğraf" tabClassName="BosnianpastryTabs">
                                    <Gallery images={FOTO} enableImageSelection={false}/>
                                </Tab>
                                <Tab eventKey="second" title="Video" tabClassName="BosnianpastryTabs">
                                    Yakında eklenecek...
                                </Tab>
                                <Tab eventKey="third" title="Yapılış" tabClassName="BosnianpastryTabs">
                                    <Gallery images={YAPILIS} enableImageSelection={false}/>
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
