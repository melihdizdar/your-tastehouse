import { Col, Row,Container,Button} from "react-bootstrap"
import "./styles/products.css"
import { Link } from "react-router-dom";

export default function ProductsScreen() {
    return (
        <div className="products">
            <div className="productsContent">
                <div className="ProductsGroup">
                    <Container style={{textAlign:"center"}}>
                        <Row>
                            <Col md={4} lg={6}><Link to="/handmade"><Button className="productsButtonFirst"/></Link></Col>
                            <Col md={4} lg={6}><Link to="/organic"><Button className="productsButtonSecond"/></Link></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
