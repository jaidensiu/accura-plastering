'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cart/reducer'
import Link from 'next/link'

import CartItem from './CartItem/CartItem'

import styles from '../../cart/page.module.css'
import mainStyles from '../../main.module.css'

export default function CartItems() {
    const [totalSum, setTotalSum] = useState(0);
    const [nameInput, setNameInput] = useState('')
    const [numberInput, setNumberInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [modalOpened, setModalOpened] = useState(false)
    
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)

    const updateTotalSum = (price) => {
        setTotalSum(price)
    }

    const handleName = (event) => {
        const value = event.target.value.replace(/[^A-Za-zА-Яа-я\s]/g, '');
        setNameInput(value)
    }

    const handleNumber = (event) => {
        setNumberInput(event.target.value)
    }

    const handleAddress = (event) => {
        setAddressInput(event.target.value)
    }

    const closeModal = () => {
        setModalOpened(false)
        setNameInput('')
        setNumberInput('')
        setAddressInput('')
        dispatch(clearCart())
    }

    const onClickBtn = () => {
        if (numberInput === '' || addressInput === '' || nameInput === '') {
            alert('Please enter data')
        } else {
            setModalOpened(true)
        }
    }

    return (
        <div>
            
            <div className={`${styles.modal} ${modalOpened ? styles.modalOpened : ''}`}>
                <div className={styles.modalDialog}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalInner}>
                            <h1 className={`${mainStyles.title} ${styles.modalText}`}>RICH TALES Watch Store</h1>
                            <h3 className={`${mainStyles.text} ${styles.modalText}`}>Order Approved</h3>
                            <button onClick={closeModal} className={mainStyles.btn}>Back</button>
                        </div>
                    </div>
                </div>
            </div>

            {items.length >= 1 ? (
                <>
                <div className={styles.cartItems}>
                    {items.map((cart) =>
                        <CartItem key={cart.parentId} cart={cart} updateTotalSum={updateTotalSum}/>
                    )}
                </div>
                <form className={styles.form}>
                    <h3 className={`${mainStyles.title} ${styles.formTitle}`}>Contact Information</h3>
                    <div className={styles.contacts}>
                        <input type="text" className={styles.input} placeholder='Name' value={nameInput} onChange={handleName}/>
                        <input type="text" className={styles.input} placeholder='Phone or Email' value={numberInput} onChange={handleNumber}/>
                    </div>

                    <div className={styles.address}>
                        <h3 className={`${mainStyles.title} ${styles.formTitle}`}>Delivery</h3>
                        <input type="text" className={styles.input} placeholder='Delivery Address' value={addressInput} onChange={handleAddress}/>
                        <textarea className={styles.textarea} placeholder='Comment (optional)'></textarea>
                    </div>

                    <h3 className={`${mainStyles.title} ${styles.formTitle}`}>Payment</h3>
                    <div className={styles.pay}>
                        <label className={styles.label}>
                            <input name='pay' type="radio" className={styles.inputRadio}/>
                            <span className={styles.fakeRadio}></span>
                            <p className={`${mainStyles.text} ${styles.labelText}`}>Cash</p>
                        </label>
                        <label className={styles.label}>
                            <input name='pay' type="radio" className={styles.inputRadio} />
                            <span className={styles.fakeRadio}></span>
                            <p className={`${mainStyles.text} ${styles.labelText}`}>Card on the Website</p>
                        </label>
                        <label className={styles.label}>
                            <input name='pay' type="radio" className={styles.inputRadio} />
                            <span className={styles.fakeRadio}></span>
                            <p className={`${mainStyles.text} ${styles.labelText}`}>Card on Delivery</p>
                        </label>
                    </div>
                    <button onClick={onClickBtn} className={`${mainStyles.btn} ${styles.formBtn}`} type='button'>Place an Order</button>
                </form>
                </>
            ) : (
                <div className={styles.empty}>
                    <p className={mainStyles.text}>Your cart is empty</p>
                    <Link href='/catalogue'>
                        <button className={`${mainStyles.btn} ${styles.emptyBtn}`}>Return to Catalog</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
