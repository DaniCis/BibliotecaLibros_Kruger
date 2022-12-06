import { useAppContext } from "../store/Store"
import { useNavigate} from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Book from "../components/Book"
import Container from 'react-bootstrap/Container'
import Layout from "../components/Layout"
import Button from "react-bootstrap/Button"

const Home = () =>{
    const store = useAppContext()
    const navigate = useNavigate()

    return(
        <Layout>
            <Container className="contenedorMain">
                <Row>
                    <Col>
                        <h4 className="mainTitle">Books Collection</h4>
                    </Col>
                </Row>
                {store.items.length !== 0
                    ? (
                            <>
                            <Row>
                                <Col className="countNumber">
                                    <p>Total Books: 
                                        <span> {store.items.length}</span>
                                    </p>
                                </Col>
                            </Row>
                            <Row style={{marginRight:0}} xs={2} sm={3} md={4} xl={6} >
                            {store.items.map(item =>(
                                <Book key={item.id} item={item}/>
                            ))}
                            </Row>
                        </>
                    ) 
                    : (
                        <Row style={{marginRight:0}}>
                            <Col className="contenedorSin">
                                <p>Your collection is empty!</p>
                                <p>Start adding books right now 🪄</p>
                                <Button variant="warning" onClick={() => { navigate('/create') }}>Add One</Button>
                            </Col>
                        </Row>
                    ) 
                }
            </Container>
        </Layout>
    )
}
export default Home;