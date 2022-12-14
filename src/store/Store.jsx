import { useContext, createContext, useState, useEffect } from "react"

const AppContext = createContext({
    items:[],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {},
})

const Store = ({children}) =>{
    const [items,setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])
    
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const createItem = (item) => {
        const temp = [...items]
        temp.unshift(item)
        setItems(temp)
    }
    const getItem = (id) => {
        const item = items.find(item=> item.id === id)
        return item
    }
    const updateItem = (item) => {
        const index = items.findIndex(i => i.id === item.id)
        const temp = [...items]
        temp[index] = {...item}
        setItems(temp)
    }
    return(
        <AppContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem,
        }} >
            {children}
        </AppContext.Provider>
    )
}
export default Store;

export function useAppContext(){
    return useContext(AppContext)
}