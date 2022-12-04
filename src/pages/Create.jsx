import { useState } from "react"
import { useAppContext } from "../store/Store"
import { useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Layout from "../components/Layout"
import '../assets/css/form.css'

const Create = () =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [intro, setIntro] = useState('')
    const [completed, setCompleted] = useState(false)
    const [review, setReview] = useState('')

    const store = useAppContext()
    const navigate = useNavigate()
    
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
        e.preventDefault()
        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            intro,
            cover,
            completed,
            review,
        }
        store.createItem(newBook)
        navigate("/")
    }

    return(
        <Layout>
        <Form onSubmit={handleSubmit}>
        <Row style={{marginRight:0}} >
            <Col xs={0} sm={1} md={2} lg={1} xl={2}></Col>
            <Col xs={12} sm={10} md={8} lg={10} xl={8}>
                <Card className="contenedorForm">
                    <Row>
                        <Col>
                            <h4 className="titleForm">Add a new book</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:1}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" onChange={handleChange} value={title} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" onChange={handleChange} value={author} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="intro" onChange={handleChange} value={intro} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Reading Status</Form.Label>
                                <Form.Check type="checkbox" name="completed" onChange={handleChange} value={completed} 
                                    label={`${completed ? "Completed" : "Not Completed"}`} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Review</Form.Label>
                                <Form.Control type="text" name="review" onChange={handleChange} value={review} />
                            </Form.Group>
                        </Col>
                        <Col xs={{span:10,offset:1}} lg={{span:5,offset:0}}>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cover</Form.Label>
                                    <Form.Control type="file" name="cover" onChange={handleChangeFile} />
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
                            <Button variant="warning" type="submit">Add Now 📖</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </Form>
        </Layout>
    )
}
export default Create;