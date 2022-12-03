import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";

const View = () => {
    const [item,setItem] = useState(null)
    const params = useParams()
    const store = useAppContext()

    useEffect( () => {
        const book = store.getItem(params.bookId)
        setItem(book)
    },[])

    if(!item){
        return <Layout>Item not found</Layout>
    }
    return(
        <Layout>
            <h2>{item?.title}</h2>
            <div>{item?.cover &&
                <img src={item?.cover} width='200'/>
                }
            </div>
            <p>{item?.author}</p>
            <p>{item?.intro}</p>
            <p>{item?.completed ? 'Leido' : 'Por terminar'}</p>
            <p>{item?.review}</p>
        </Layout>
    )
}
export default View;