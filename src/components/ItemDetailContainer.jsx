import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore' 
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const {id} = useParams()

 const [productos, setProductos] = useState([])

 useEffect(()=>{
    const db = getFirestore()
    const oneItem = doc(db, "productos", `${id}`)
    getDoc(oneItem).then((snapshot)=>{
        if(snapshot.exists()){
            setProductos({ id: snapshot.id, ...snapshot.data() }); 
        }

    })
 }, [])

    return (
        <>
            <ItemDetail productos={productos} />
        </>

    )
}

export default ItemDetailContainer