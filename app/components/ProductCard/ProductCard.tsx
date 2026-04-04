import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const Productcard = () => {
    return (
        <div className={styles['card-container']}>
            <AddToCart buttonClassName={styles.button}/>
            
        </div>

    )
            
}

export default Productcard