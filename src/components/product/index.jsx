import React from 'react'
import { Button } from '../index.js'
import { Plus } from 'lucide-react'
import styles from "./style.module.css"
import { useBasket } from '../../hooks/use-basket.js'
import { Link } from 'react-router'

export const Product = (props) => {
  const { isSomeProduct, addProduct } = useBasket()
  const [isAddLoading, setIsAddLoading] = React.useState(false)

  const isAddedProduct = async () => {
    setIsAddLoading(true)
    await addProduct({
      title: props.title,
      imgUrl: props.imgUrl,
      price: props.price,
      productId: props.id
    })
    setIsAddLoading(false)
  }

  return (
    <article className={styles.product}>
      <Link to={`/product/${props.id}`}>
      <img className={styles.image} src={props.imgUrl} alt="" width={260} height={260} />
      </Link>
      <h3 className={styles.title}>{props.title}Men'S Anime Cartoon Print Hooded Sweatshirt</h3>
      <div className={styles.priceBox}>
        <span> {props.price}
          <span>form</span> {props.price} $
        </span>
        <Button
          onClick={isAddedProduct}
          disabled={isAddLoading}
          className={styles.button}
          variant={isSomeProduct(props.id) ? "default" : "secondary"}
        >
          {isSomeProduct(props.id) ? "incart" : <>< Plus className={styles.plus} /> Add </>}
        </Button>
      </div>
    </article>
  )
}