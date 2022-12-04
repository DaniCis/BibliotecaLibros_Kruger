import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Book = ({item}) => {
    return(
        <Container>
            <div className='contenedorBook'>
                <h5>{item.title}</h5>
                <Link to ={`/view/${item.id}`}>
                    <img src={item.cover} height="150" width="120" alt={item.title} />
                </Link>
            </div>
        </Container>
    )
}

export default Book;