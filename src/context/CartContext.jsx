import { createContext, useState, useEffect } from "react";


export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Intenta obtener el carrito del localStorage al iniciar
        const localStorageCart = window.localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    });

    // Guarda el carrito en localStorage cada vez que cambia
    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = (item, cantidad) => {
        const existCart = cart.filter((producto) => producto.id == item.id)
        if (existCart.length > 0) {
            Swal.fire('El producto ya fue agregado, cantidad actualizada'), existCart[0]
            //si producto existe en el carrito lo agrego con la nueva cantidad
            cart.map((producto) => {
                if (producto.id == existCart[0].id) {
                    producto.cantidad = producto.cantidad + cantidad
                }
            })
            setCart(cart)

        }
        else {
            setCart(prev => [...prev, { ...item, cantidad }])
            Toastify({
                text: `Agregaste ${cantidad} unidades de ${item.nombre} `,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient( to right, rgb(109, 131, 202), rgb(59, 35, 147), blue)"
                },
                onClick: function () { } 
            }).showToast();



        }
    }
    const eliminarItem = (itemId) => {
        const cartUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdated)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, vaciarCarrito, eliminarItem, cantidad, setCantidad, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider