import React from 'react'
import "./styles/stuffedmeatballs.css"
import Gallery from 'react-grid-gallery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Row,Col,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function StuffedMeatBallsScreen() {
    const KIZARTMAFOTO =
[
    {
        src:"https://i.hizliresim.com/ermm94a.jpg",
        thumbnail: "https://i.hizliresim.com/ermm94a.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/35upbhb.jpg",
        thumbnail: "https://i.hizliresim.com/35upbhb.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/3dzscgj.jpg",
        thumbnail: "https://i.hizliresim.com/3dzscgj.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ijictxm.jpg",
        thumbnail: "https://i.hizliresim.com/ijictxm.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/1vdky4k.jpg",
        thumbnail: "https://i.hizliresim.com/1vdky4k.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/4pxgj51.jpg",
        thumbnail: "https://i.hizliresim.com/4pxgj51.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/id4vpwj.jpg",
        thumbnail: "https://i.hizliresim.com/id4vpwj.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/nbnorfp.jpg",
        thumbnail: "https://i.hizliresim.com/nbnorfp.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ht5kquc.jpg",
        thumbnail: "https://i.hizliresim.com/ht5kquc.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/homaxi6.jpg",
        thumbnail: "https://i.hizliresim.com/homaxi6.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/q9dp5oi.jpg",
        thumbnail: "https://i.hizliresim.com/q9dp5oi.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/spjqne4.jpg",
        thumbnail: "https://i.hizliresim.com/spjqne4.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/hued757.jpg",
        thumbnail: "https://i.hizliresim.com/hued757.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/9aocuj8.jpg",
        thumbnail: "https://i.hizliresim.com/9aocuj8.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/1k6awth.jpg",
        thumbnail: "https://i.hizliresim.com/1k6awth.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ewseomo.jpg",
        thumbnail: "https://i.hizliresim.com/ewseomo.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/h4gbud1.jpg",
        thumbnail: "https://i.hizliresim.com/h4gbud1.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/2yi0fa6.jpg",
        thumbnail: "https://i.hizliresim.com/2yi0fa6.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/3c6r0oc.jpg",
        thumbnail: "https://i.hizliresim.com/3c6r0oc.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/dh8mxvs.jpg",
        thumbnail: "https://i.hizliresim.com/dh8mxvs.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    const HASLAMAFOTO = 
[
    {
        src: "https://i.hizliresim.com/83fa561.jpg",
        thumbnail: "https://i.hizliresim.com/83fa561.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/n1oiz7q.jpg",
        thumbnail: "https://i.hizliresim.com/n1oiz7q.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ru6ah76.jpg",
        thumbnail: "https://i.hizliresim.com/ru6ah76.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/32n0t17.jpg",
        thumbnail: "https://i.hizliresim.com/32n0t17.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/hf54lvl.jpg",
        thumbnail: "https://i.hizliresim.com/hf54lvl.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
	    {
        src: "https://i.hizliresim.com/6rq0n5o.jpg",
        thumbnail: "https://i.hizliresim.com/6rq0n5o.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/9lugrs1.jpg",
        thumbnail: "https://i.hizliresim.com/9lugrs1.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    return (
        <div className="StuffedMeatBalls">
            <div className="StuffedMeatBallsHeader">İçli Köfte</div>
            <div className="StuffedMeatBallsBar"></div>
            <div style={{ display: 'block', width:'100%', padding: 30,textAlign:'center'}}>
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="first">
                            <Tab eventKey="first" title="Kızartma Fotoğraf" tabClassName="StuffedMeatBallsTabs">
                                <Gallery images={KIZARTMAFOTO} enableImageSelection={false}/>
                            </Tab>
                            <Tab eventKey="second" title="Kızartma Video" tabClassName="StuffedMeatBallsTabs">
                                Yakında eklenecek...
                            </Tab>
                            <Tab eventKey="third" title="Haşlama Fotoğraf" tabClassName="StuffedMeatBallsTabs">
                                <Gallery images={HASLAMAFOTO} enableImageSelection={false}/>
                            </Tab>
                            <Tab eventKey="fourth" title="Haşlama Video" tabClassName="StuffedMeatBallsTabs">
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
