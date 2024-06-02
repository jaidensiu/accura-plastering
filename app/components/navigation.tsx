import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

export default function Navigation(): JSX.Element {
    const [openMenu, setOpenMenu] = useState(false);
    const navRef = useRef(null);

    const onClickBtn = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (sectionId: string) => {
        setOpenMenu(!openMenu);
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button onClick={onClickBtn} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul ref={navRef} className={`${styles.menu} ${openMenu ? styles.menuActive : ''}`}>
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
                    <a onClick={() => scrollToSection('#about')}>
                        About
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a onClick={() => scrollToSection('#projects')}>
                        Projects
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a onClick={() => scrollToSection('#contact')}>
                        Contact
                    </a>
                </li>
            </ul>
        </>
    );
}
