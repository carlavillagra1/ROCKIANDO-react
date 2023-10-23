import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'


const ItemListContainer = () => {

  const [product, setProduct] = useState( productos = [
    { id: 1, nombre: "Campera ", descripcion: "excelente estado. Ningun detalle, es rompeviento", talle: "M", categoria: "Hombre", precio: 12000 },
    { id: 2, nombre: "Conjunto", descripcion: "en buen estado, solo desgaste de color, lo demas impecable", talle: "L", categoria: "Mujer", precio: 15000 },
    { id: 3, nombre: "Remera", descripcion: "usado , con algunas manchitas minimas", talle: "M", categoria: "Mujer", precio: 24000 },
    { id: 4, nombre: "Campera", descripcion: "con detalles, solo hay que arreglar el cierre", talle: "S", categoria: "Hombre", precio: 45000 },
    { id: 5, nombre: "Visera", descripcion: "nuevo. Visera polo ralph ", talle: "regulable", categoria: "Accesorios", precio: 3000 },
  ])

  const { categoria } = useParams()


  useEffect(() => {
    const asynFunc = categoria ? filterCategoria : mostrarProductos;

    asynFunc(categoria)
    .then(response =>{
      setProduct(response)
    })
    .catch(error =>{
      console.error(error)
    })
  }, [categoria])

  

  const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)

    } else {
      reject("No se encontraron productos")
    }
  })
  
  const filterCategoria = productos.filter((product) => product.categoria === categoria)

  return (
    <div>

      <ItemList product={product} />

    </div>
  )
} 

export default ItemListContainer