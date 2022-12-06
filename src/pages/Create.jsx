import { useAppContext } from "../store/Store"
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import FormBook from "../components/FormBook"

const Create = () =>{
    const store = useAppContext()
    const navigate = useNavigate()
    
    const handleSubmit = (book) =>{
        store.createItem(book)
        navigate("/")
    }

    return(
        <Layout>
            <FormBook titleForm={'Add a new Book'} titleBtn={'Add Now 📖'} onAction={handleSubmit} />
        </Layout>
    )
}
export default Create;