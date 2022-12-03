import { useAppContext } from "../store/Store"
import Row from 'react-bootstrap/Row'
import Layout from "../components/Layout"

const Home = () =>{
    const store = useAppContext()
    return(
        <Layout>
            {store.items.map(item =>(
                <Row>{item.title}</Row>
            ))}
        </Layout>
    )
}
export default Home;