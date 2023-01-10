import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Book = ({item}) => {
    return(
        <Container>
            <div className='contenedorBook'>
                <h5>{item.title}</h5>
                <Link to ={`/view/${item.id}`}>
                    <img src={item.cover} height="150" width="120" alt={item.title} />
                </Link>
                <Link  to ={`/view/${item.id}`}>
                    <div className='contenedorBtn'>
                        <Button className='btn-more' size='sm' variant="outline-success">View More</Button>
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default Book;