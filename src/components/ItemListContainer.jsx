import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore' 

const ItemListContainer = () => {

  const [ productos, setProductos] = useState([])
  const { categoria } = useParams()


  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db,"productos")
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((p)=>({id: p.id, ...p.data()}));
      setProductos(docs)
    })
  }, [])

  const filterCategoria = productos.filter((productos) => productos.categoria == categoria)
  

  return (

    <div> 
      {categoria ? <ItemList productos={filterCategoria}/> : <ItemList productos={productos}/>} 

    </div>

  )

}

export default ItemListContainer