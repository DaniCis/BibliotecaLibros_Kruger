import { useAppContext } from "../store/Store"
import Row from 'react-bootstrap/Row'
import Book from "../components/Book";
import Layout from "../components/Layout"

const Home = () =>{
    const store = useAppContext()
    return(
        <Layout>
            <Row xs={2} sm={3} md={4} lg={6} xl={8} className="g-4">
                {store.items.map((item,index) =>(
                    <Book key={item.id} item={item}/>
                ))}
            </Row>
        </Layout>
    )
}
export default Home;