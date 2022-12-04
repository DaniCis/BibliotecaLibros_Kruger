import { useAppContext } from "../store/Store"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Book from "../components/Book"
import Container from 'react-bootstrap/Container'
import Layout from "../components/Layout"

const Home = () =>{
    const store = useAppContext()
    return(
        <Layout>
            <Container className="contenedorMain">
                <Row>
                    <Col>
                        <h4 className="mainTitle">Books Collection</h4>
                    </Col>
                </Row>
                <Row style={{marginRight:0}} xs={2} sm={3} md={4} xl={6} >
                    {store.items.map(item =>(
                        <Book key={item.id} item={item}/>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}
export default Home;