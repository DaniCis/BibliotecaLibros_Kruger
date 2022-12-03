import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Book = ({item}) =>{
    return(
        <Container>
            <Link to ={`/view/${item.id}`}>
                <Card>
                    <img src={item.cover} height="150" width="120" alt={item.title} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Container>
    )
}

export default Book;