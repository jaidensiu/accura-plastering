'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './navigation/navigation';
import styles from './header.module.css';
import mainStyles from '../main.module.css';

export default function Header(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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

    return (
        <header className={styles.header} style={{ backgroundColor: scrolled || pathname !== '/' ? '#0B0B0B' : 'transparent' }}>
            <div className={mainStyles.container}>
                <nav className={styles.nav}>
                    <span className={styles.left}>
                        <Navigation />
                    </span>
                    <span className={`${styles.logo} ${scrolled || pathname !== '/' ? styles.logoScrolled : ''}`}>
                        <Link href='/' className={`${styles.header__link}`}>
                            Accura Plastering Ltd.
                        </Link>
                    </span>
                </nav>
            </div>
        </header>
    );
}
