import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {

  const [ producto, setProducto] = useState([])
  const { categoria } = useParams()

console.log(categoria)
  
  const productos = [
    {id:1 , nombre: "Campera", descripcion:"excelente estado. Ningun detalle, es rompeviento", talle:"M", categoria:"hombre", precio: 12000},
    {id:2 , nombre: "Conjunto", descripcion:"en buen estado, solo desgaste de color, lo demas impecable" , talle:"L", categoria:"mujer",  precio: 15000},
    {id:3 , nombre: "Remera", descripcion:"usado , con algunas manchitas minimas" , talle:"M",  categoria:"mujer", precio: 24000},
    {id:4 , nombre: "Campera", descripcion:"con detalles, solo hay que arreglar el cierre" , talle:"S" , categoria:"hombre", precio: 45000},
    {id:5 , nombre: "Visera", descripcion:"nuevo. Visera polo ralph " , talle:"regulable" , categoria:"accesorios", precio: 3000}
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
  const filterCategoria = productos.filter((producto) => producto.categoria == categoria)
  

  return (

    <div>
    { categoria ? <ItemList producto={filterCategoria} /> : <ItemList productos={productos} />}  
    </div>

  )

}

export default ItemListContainer