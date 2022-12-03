import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const Book = ({item}) =>{
    return(
        <Container>
            <Link to ={`/view/${item.id}`}>
                <Image src={item.cover} width='200' alt={item.title}/>
                <p>{item.title}</p>
            </Link>
        </Container>
    )
}

export default Book;