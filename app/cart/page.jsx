import CartItems from '../components/CartItems/CartItems'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Your Cart',
    description: 'Cart page',
}

export default function Cart() {
    return(
        <section className={styles.cartPage}>
            <div className={mainStyles.container}>
                <div className={styles.cartInner}>
                    <h3 className={mainStyles.title}>Cart</h3>
                    <CartItems/>
                </div>
            </div>
        </section>
    )
}
