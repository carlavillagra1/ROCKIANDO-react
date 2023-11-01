import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {

    const {id} = useParams ()
    
    const [cart, setCart] = useState([])
    console.log(cart)

    const agregarAlCarrito = (item, cantidad) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, cantidad }])
            Toastify({
                text: `Agregaste ${contador} productos`,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient( to right, rgb(109, 131, 202), rgb(59, 35, 147), blue)"
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }

        else {
            Swal.fire('El producto ya fue agregado')

        }
    }
    const eliminarItem = (itemId) => {
        const cartUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdated)
    }

    const vaciarCarrito = () => {
        setCart([])
    }
    const isInCart = (itemId) =>{
        return cart.some(producto => producto.id === itemId)
    }

    const [contador, setContador] = useState(1)

    return(
        <CartContext.Provider value={{cart, agregarAlCarrito, vaciarCarrito, eliminarItem, contador, setContador }}>
            { children } 
        </CartContext.Provider>
    )

}

export default CartProvider