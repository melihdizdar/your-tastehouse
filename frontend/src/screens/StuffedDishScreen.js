import React from 'react'
import "./styles/stuffeddish.css"
import Gallery from 'react-grid-gallery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Row,Col,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function StuffedDishScreen() {
    const FOTO =
[
    {
        src: "https://i.hizliresim.com/dsze6z5.jpg",
        thumbnail: "https://i.hizliresim.com/npj1z7u.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ggy1bqn.jpg",
        thumbnail: "https://i.hizliresim.com/d5hwz8s.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/g78w2p6.jpg",
        thumbnail: "https://i.hizliresim.com/ism191d.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/5gkinzw.jpg",
        thumbnail: "https://i.hizliresim.com/cz49p7r.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/evd28nh.jpg",
        thumbnail: "https://i.hizliresim.com/pt0qp6o.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
	    {
        src: "https://i.hizliresim.com/dsphws2.jpg",
        thumbnail: "https://i.hizliresim.com/czh4nnh.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/qm2fy6b.jpg",
        thumbnail: "https://i.hizliresim.com/nch9jgz.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/22egrbb.jpg",
        thumbnail: "https://i.hizliresim.com/fwo6txv.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/e70tvuj.jpg",
        thumbnail: "https://i.hizliresim.com/ntcdx4e.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/34ki59p.jpg",
        thumbnail: "https://i.hizliresim.com/8e99wxs.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/t18678h.jpg",
        thumbnail: "https://i.hizliresim.com/j2trdgq.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/fq1de47.jpg",
        thumbnail: "https://i.hizliresim.com/rhys0yl.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/ppzeiwg.jpg",
        thumbnail: "https://i.hizliresim.com/8fqodah.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/7xsdq4n.jpg",
        thumbnail: "https://i.hizliresim.com/kh3f9nb.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/1h97vpu.jpg",
        thumbnail: "https://i.hizliresim.com/q5gk94x.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
	    {
        src: "https://i.hizliresim.com/cr7d6o4.jpg",
        thumbnail: "https://i.hizliresim.com/byairog.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/hzhoazi.jpg",
        thumbnail: "https://i.hizliresim.com/35wrewv.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/o9wrz5n.jpg",
        thumbnail: "https://i.hizliresim.com/eb8jzuo.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "https://i.hizliresim.com/fzhrlfn.jpg",
        thumbnail: "https://i.hizliresim.com/gs9cjo6.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    }
]
    return (
        <div className="Stuffeddish">
            <div className="StuffeddishHeader">Yaprak Sarma</div>
            <div className="StuffeddishBar"></div>
            <div style={{ display: 'block', width:'100%', padding: 30,textAlign:'center'}}>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="first">
                                <Tab eventKey="first" title="Fotoğraf" tabClassName="Stuffeddish">
                                    <Gallery images={FOTO} enableImageSelection={false}/>
                                </Tab>
                                <Tab eventKey="second" title="Video" tabClassName="Stuffeddish">
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
