import { ShoppingCart, Trash2 } from 'lucide-react'
import React from 'react'
import { Title } from '../ui/title'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { useBasket } from '../../hooks/use-basket'
import styles from "./style.module.css"
import { CartProduct } from '../cart-product'
import { Empty } from '../empty'
import { useOrder } from '../../hooks/use-order'


export const CartCatalog = () => {
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const { totalCount, totalPrice, clearCart, data } = useBasket()
    const { addOrder } = useOrder()

    const clearAllProducts = () => {
        setLoading(false)
        clearCart()
        setLoading(true)
    }

    const orderAllProducts = async () => {
        setLoading(false)
        await addOrder()
        setLoading(true)
    }
    return (
        <div className={styles.catalog}>
            <div className={styles.box}>
                <Title text={<><ShoppingCart />Basket</>} size='l' />
                <button className={styles.clear} onClick={clearAllProducts} disabled={loading} >
                    <Trash2 />
                    Clear Cart
                </button>
            </div>
            {
                data.length === 0 ? <Empty text='Most likely, you have not ordered the product yet. To order the product, go to  the main page.' title='The basket is empty' umgUrl='shopping-cart-colour 1.png' /> :
                    data.map((item) => (

                        <CartProduct {...item} key={item.id} />

                    ))
            }

            <div className={styles.box}>
                <span>Total items:{totalCount}</span>
                <span>Order total:{totalPrice} </span>
            </div>
            <div className={styles.box}>
                <Button className={styles.goback} onClick={() => navigate(-1)} variant='secendory'>
                    Go back
                </Button>
                <Button disabled={loading} onClick={orderAllProducts} className={styles.pay}>
                    Pay now
                </Button>
            </div>
        </div>
    )
}
