import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import '../assets/css/form.css'
import '../assets/css/view.css'

const View = () => {
    const [item,setItem] = useState(null)
    const params = useParams()
    const store = useAppContext()

    useEffect( () => {
        const book = store.getItem(params.bookId)
        setItem(book)
    },[])

    if(!item){
        return (
            <Layout>
                <Row>
                    <Col className="div-link">
                        <NavLink className="back-link" to="/">👈 Go back</NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col className="contendorNotFound">
                        <p className="textNotFound">Item Not found</p>
                    </Col>
                </Row>
            </Layout>
        )
    }
    return(
        <Layout>
            <Row style={{marginRight:0}} >
            <Col xs={0} sm={1} md={2} lg={1} xl={2}></Col>
            <Col xs={12} sm={10} md={8} lg={10} xl={8}>
                <Row>
                    <Col className="div-link">
                        <NavLink className="back-link" to="/">👈 Go back</NavLink>
                    </Col>
                </Row>
                <Card className="contenedorForm">
                    <Row>
                        <Col>
                            <h4 className="titleForm">{item?.title}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:0}}>
                            <Row>
                                <div className="contenedorImagen">
                                    { item?.cover 
                                        && <img className="imagenForm" src={item?.cover} alt="preview" />
                                    }
                                </div>
                            </Row>
                        </Col>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:1}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <p>{item?.author}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <p>{item?.intro}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Reading Status</Form.Label>
                                <p>{item?.completed ? "Completed ✅" : "❌ Not Completed"}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Review</Form.Label>
                                <p>{item?.review}</p>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
            </Col>
            </Row>
        </Layout>
    )
}
export default View;