import { useAppContext } from "../store/Store"
import { useNavigate} from "react-router-dom"
import Layout from "../components/Layout"
import FormBook from "../components/FormBook"

const Edit = () =>{
    const navigate = useNavigate()
    const store = useAppContext()

    const handleSubmit = (book) =>{
        store.updateItem(book)
        navigate(`/view/${book.id}`)
    }

    return(
        <Layout>
            <FormBook titleForm={'Edit Book'} titleBtn={'Update Now 📖'} onAction={handleSubmit}  />
        </Layout>
    )
}
export default Edit