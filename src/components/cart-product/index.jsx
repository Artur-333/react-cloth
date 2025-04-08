import React from 'react'
import styles from "./style.module.css"
import { Minus, Plus, X } from 'lucide-react'
import { useBasket } from '../../hooks/use-basket';

export const CartProduct = (props) => {
  const [isRemoveLoading, setIsRemoveLoading] = React.useState(false)

  const { removeProduct, isSomeProduct, uptadeProduct } = useBasket();

  const isRemoveProduct = async () => {
    setIsRemoveLoading(true)
    await removeProduct(props.id)
    setIsRemoveLoading(false)
  }

  const decrementCount = async () => {
    if (props.count === 1) {
      await isRemoveProduct()
      return
    }
    setIsRemoveLoading(true)
    await uptadeProduct({
      ...props,
      count: props.count - 1
    })
    setIsRemoveLoading(false)
  }

  const incrementCount = async () => {
    setIsRemoveLoading(true)
    await uptadeProduct({
      ...props,
      count: props.count + 1
    })
    setIsRemoveLoading(false)
  }
  return (<>
    
        <article className={styles.product}>
          <div className={styles.imageBox}>
            <img src={props.imgUrl} alt="" width={80} height={80} />
            <h3 className={styles.title}> {props.title} </h3>
          </div>
          <div className={styles.countBox}>
            <button onClick={decrementCount} disabled={isRemoveLoading} className={styles.countButton}><Minus size={18} /></button>
            <span className={styles.count}>{props.count}</span>
            <button onClick={incrementCount} disabled={isRemoveLoading} className={styles.countButton}><Plus size={18} /></button>
          </div>
          <span className={styles.price}>{props.price * props.count} $</span>
          <button disabled={isRemoveLoading} onClick={isRemoveProduct} className={styles.remove}><X size={18} /> </button>
        </article>
      
  </>
  )
}