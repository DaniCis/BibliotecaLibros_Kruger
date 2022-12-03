import { useState } from "react"
import { useAppContext } from "../store/Store"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"

const Create = () =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [intro, setIntro] = useState('')
    const [completed, setCompleted] = useState(false)
    const [review, setReview] = useState('')

    const store = useAppContext()
    const navigate = useNavigate
    
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
                <Row>
                    <p>Title</p>
                    <Form.Control type="text" name="title" onChange={handleChange} value={title} />
                </Row>
                <Row>
                    <p>Author</p>
                    <Form.Control type="text" name="author" onChange={handleChange} value={author} />
                </Row>
                <Row>
                    <p>Cover</p>
                    <Form.Control type="file" name="cover" onChange={handleChangeFile} />
                    { !!cover && <Image src={cover} width="200" alt="preview" />}
                </Row>
                <Row>
                    <p>Introduction</p>
                    <Form.Control type="text" name="intro" onChange={handleChange} value={intro} />
                </Row>
                <Row>
                    <p>Status</p>
                    <Form.Check type="checkbox" name="completed" onChange={handleChange} value={completed} 
                        label={`${completed ? "Completed" : "No Completed"}`} />
                </Row>
                <Row>
                    <p>Review</p>
                    <Form.Control type="text" name="review" onChange={handleChange} value={review} />
                </Row>
                <Row>
                    <Button type="submit">Add Book</Button>
                </Row>
            </Form>
        </Layout>
    )
}
export default Create;