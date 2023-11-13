import { useState } from 'react'
import Link from 'next/link'

import styles from '../Header.module.css'

export default function Navigation() {
    const [openMenu, setOpenMenu] = useState(false)

    const onClickBtn = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <>
            <button onClick={onClickBtn} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={`${styles.menu} ${openMenu ? styles.menuActive : ''}`}>
                <svg 
                    onClick={onClickBtn} 
                    className={styles.menuClose} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="17" 
                    height="17"
                    viewBox="0 0 17 17" 
                    fill="none"
                >
                    <path 
                        d="M1.45093 16L8.80387 8.5L16.1568 16M16.1568 1L8.80247 8.5L1.45093 1"
                        stroke="#F3F3F3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <li className={styles.menuItem}>
                    <Link onClick={onClickBtn} href='/'>
                        Home
                    </Link>
                </li>
            </ul>
        </>
    )
}