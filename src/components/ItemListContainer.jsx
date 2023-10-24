import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {

  const [ producto, setProducto] = useState([])
  const { categoria } = useParams()

  
  const productos = [
    {id:1 , nombre: "Campera boca", descripcion:"excelente estado. Ningun detalle, es rompeviento", talle:"M", categoria:"hombre", precio: 12000},
    {id:2 , nombre: "Conjunto argentina", descripcion:"en buen estado, solo desgaste de color, lo demas impecable" , talle:"L", categoria:"mujer",  precio: 15000},
    {id:3 , nombre: "Remera nike", descripcion:"usado , con algunas manchitas minimas" , talle:"M",  categoria:"mujer", precio: 24000},
    {id:4 , nombre: "Campera river", descripcion:"con detalles, solo hay que arreglar el cierre" , talle:"S" , categoria:"hombre", precio: 45000},
    {id:5 , nombre: "Visera polo", descripcion:"nuevo. Visera polo ralph " , talle:"regulable" , categoria:"accesorios", precio: 3000}
]


  const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)

    } else {
      reject("No se encontraron productos")
    }

  })
  mostrarProductos
        .then((resultado) => {
            
        })
        .catch((error) => {
           
        })
  
  const filterCategoria = productos.filter((productos) => productos.categoria == categoria)
  

  return (

    <div> 
      {categoria ? <ItemList productos={filterCategoria}/> : <ItemList productos={productos}/>} 

    </div>

  )

}

export default ItemListContainer