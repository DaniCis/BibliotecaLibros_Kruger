import { useParams, NavLink } from "react-router-dom"
import { useAppContext } from "../store/Store"
import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../assets/css/form.css'

const FormBook = ({titleForm, titleBtn, onAction}) =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [intro, setIntro] = useState('')
    const [completed, setCompleted] = useState(false)
    const [validated, setValidated] = useState(false)
    const [review, setReview] = useState('')

    const store = useAppContext()
    const params = useParams()

    useEffect( () => {
        const book = store.getItem(params.bookId)
        if(book){
            setTitle(book.title)
            setAuthor(book.author)
            setCover(book.cover)
            setIntro(book.intro)
            setCompleted(book.completed)
            setReview(book.review)
        }
    },[store,params])


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        switch(name){
            case 'title':
                setTitle(value)
                break
            case 'author':
                setAuthor(value)
                break
            case 'intro':
                setIntro(value)
                    break
            case 'completed':
                setCompleted(e.target.checked)
                break
            case 'review':
                setReview(value)
                break 
            default:
        }
    }

    const handleChangeFile = (e) =>{
        const element = e.target
        const file = element.files[0]
        const reader = new FileReader()     
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setCover(reader.result.toString())
        }
    }

    const handleSubmit = (e) =>{
        const form = e.currentTarget
        e.preventDefault()
        if (form.checkValidity() === false){
            e.stopPropagation()
        }
        else{
            setValidated(true)
            let id=''
            if(params.bookId)
                id = params.bookId
            else
                id = crypto.randomUUID()
            const newBook = {
                id,
                title,
                author,
                intro,
                cover,
                completed,
                review,
            }
            onAction(newBook)
        }
    }

    return(
        <Form validated={validated} onSubmit={handleSubmit}>
        <Row style={{marginRight:0}} >
            <Col xs={0} sm={1} md={2} lg={1} xl={2}></Col>
            <Col xs={12} sm={10} md={8} lg={10} xl={8}>
                <Card className="contenedorForm">
                    <Row>
                        <Col>
                            <h4 className="titleForm">{titleForm}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:1}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" onChange={handleChange} value={title} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" onChange={handleChange} value={author} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="intro" onChange={handleChange} value={intro} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Reading Status</Form.Label>
                                <Form.Check type="checkbox" name="completed" onChange={handleChange} value={completed} 
                                    label={`${completed ? "Completed" : "Not Completed"}`} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Review</Form.Label>
                                <Form.Control type="text" name="review" onChange={handleChange} value={review} required />
                            </Form.Group>
                        </Col>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:0}}>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cover</Form.Label>
                                    <Form.Control type="file" name="cover" onChange={handleChangeFile} required={!cover} />
                                </Form.Group>
                                <div className="contenedorImagen">
                                    { !!cover 
                                        ? <img className="imagenForm" src={cover} alt="preview" />
                                        : (
                                            <div className="contenedorNoImagen">
                                                <div className="subContenedorNoImagen">
                                                    <p>Cover File</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="btn-add">
                            {titleForm === 'Edit Book' &&
                                <NavLink className="back-link" to={`/view/${params.bookId}`}>
                                    <Button variant="danger">Cancel</Button>
                                </NavLink>
                            }
                            <Button variant="warning" type="submit">{titleBtn}</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </Form> 
    )
}

export default FormBook;