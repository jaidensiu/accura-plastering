'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Navigation from './navigation/navigation'
import styles from './Header.module.css'
import mainStyles from '../main.module.css'

export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (!scrolled) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (!scrolled) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return(
        <header className={styles.header} style={{ backgroundColor: scrolled || pathname != '/' ? '#0B0B0B' : 'transparent' }}>
            <div className={mainStyles.container}>
                <nav className={styles.nav}>
                    <span className={styles.left}>
                        <Navigation/>
                    </span>
                    <span className={`${styles.logo} ${scrolled || pathname != '/' ? styles.logoScrolled : ''}`}>
                        Accura Plastering Ltd.
                    </span>
                </nav>
            </div>
        </header>
    )
}