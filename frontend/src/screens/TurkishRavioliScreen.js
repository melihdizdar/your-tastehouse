import React from 'react'
import "./styles/turkishravioli.css"
import Gallery from 'react-grid-gallery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Row,Col,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TurkishRavioliScreen() {
    const HASLAMA =
[
    {
        src: "https://i.hizliresim.com/3fyplq1.jpg",
        thumbnail: "https://i.hizliresim.com/3fyplq1.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/jgfxd9g.jpg",
        thumbnail: "https://i.hizliresim.com/jgfxd9g.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/g1j3icq.jpg",
        thumbnail: "https://i.hizliresim.com/g1j3icq.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/rbf8r6v.jpg",
        thumbnail: "https://i.hizliresim.com/rbf8r6v.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/36fjgt2.jpg",
        thumbnail: "https://i.hizliresim.com/36fjgt2.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ndlw21i.jpg",
        thumbnail: "https://i.hizliresim.com/ndlw21i.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/frmttke.jpg",
        thumbnail: "https://i.hizliresim.com/frmttke.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
]

    const YAPILIS = 
[
        {
            src: "https://i.hizliresim.com/dxf8y5l.jpg",
            thumbnail: "https://i.hizliresim.com/dxf8y5l.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/5bys35t.jpg",
            thumbnail: "https://i.hizliresim.com/5bys35t.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src:"https://i.hizliresim.com/66n002i.jpg",
            thumbnail: "https://i.hizliresim.com/66n002i.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/r0t47v8.jpg",
            thumbnail: "https://i.hizliresim.com/r0t47v8.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/m6efiv5.jpg",
            thumbnail: "https://i.hizliresim.com/m6efiv5.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/ey0v8ve.jpg",
            thumbnail: "https://i.hizliresim.com/ey0v8ve.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/kkgimu9.jpg",
            thumbnail: "https://i.hizliresim.com/kkgimu9.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/mwliuf8.jpg",
            thumbnail: "https://i.hizliresim.com/mwliuf8.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/c7hll6i.jpg",
            thumbnail: "https://i.hizliresim.com/c7hll6i.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        }
]
        const CITIR = 
[
        {
            src: "https://i.hizliresim.com/jg6r23a.jpg",
            thumbnail: "https://i.hizliresim.com/jg6r23a.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/dnqak4d.jpg",
            thumbnail: "https://i.hizliresim.com/dnqak4d.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/ik5r9jv.jpg",
            thumbnail: "https://i.hizliresim.com/ik5r9jv.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/ea18ybn.jpg",
            thumbnail: "https://i.hizliresim.com/ea18ybn.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://i.hizliresim.com/7sceb5h.jpg",
            thumbnail: "https://i.hizliresim.com/7sceb5h.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        }
]
    return (
        <div className="Turkishravioli">
            <div className="TurkishravioliHeader">Mantı</div>
            <div className="TurkishravioliBar"></div>
            <div style={{ display: 'block', width:'100%', padding: 30,textAlign:'center'}}>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="first">
                                <Tab eventKey="first" title="Haşlama Fotoğraf" tabClassName="TurkishravioliTabs">
                                    <Gallery images={HASLAMA} enableImageSelection={false}/>
                                </Tab>
                                <Tab eventKey="second" title="Haşlama Video" tabClassName="TurkishravioliTabs">
                                    Yakında eklenecek...
                                </Tab>
                                <Tab eventKey="third" title="Çıtır Mantı Fotoğraf" tabClassName="TurkishravioliTabs">
                                    <Gallery images={CITIR} enableImageSelection={false}/>
                                </Tab>
                                <Tab eventKey="fourth" title="Çıtır Mantı Video" tabClassName="TurkishravioliTabs">
                                    Yakında eklenecek...
                                </Tab>
                                <Tab eventKey="fifth" title="Yapılış" tabClassName="TurkishravioliTabs">
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