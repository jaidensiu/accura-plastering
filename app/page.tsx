import React from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import mainStyles from './main.module.css';
import Carousel from './components/carousel';

interface Metadata {
    title: string;
    description: string;
}

export const metadata: Metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Home'
};

const AccuraHome: React.FC = () => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <section className={styles.top}>
                <div 
                    className={`${mainStyles.container} ${styles.topContainer}`}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img 
                        src="./accura-website/home-images/accura_plastering_ltd.png"
                        alt="Accura Plastering Logo"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
                    />
                </div>
            </section>

            <section id="about" className={styles.padding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        About
                    </h1>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        Located in Surrey, BC, our plasterers have well over 100 years of EIFS and hard coat stucco combined experience. We have written safety certifications, and suppliers certifications to install their systems to promptly get the warranty certificates submitted without any problems. With expertise in exterior cornice mouldings, we pride ourselves in the quality of our work and look forward to every new project we start.
                    </p>
                </div>
                <div className={`${mainStyles.container} ${styles.topPadding25}`}>
                    <h3 className={`${styles.verticalPadding25}`}>
                        Outsulation® System Benefits
                    </h3>
                    <p className={`${mainStyles.text}`}>
                        • Superior insulation and moisture protection
                    </p>
                    <p className={`${mainStyles.text}`}>
                        • Prevents air infiltration and keeps the weather out
                    </p>
                    <p className={`${mainStyles.text}`}>
                        • Amazing variety of finishes and colours
                    </p>
                    <p className={`${mainStyles.text}`}>
                        • Can be adapted to many architectural styles
                    </p>
                </div>
            </section>

            <section id="projects" className={styles.padding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        Projects
                    </h1>
                    <div className={styles.padding50}>
                        <Carousel
                            images={[
                                "./accura-website/project-images/melanie_lyne.jpg",
                                "./accura-website/project-images/building_side.jpg",
                                "./accura-website/project-images/novo_textiles.jpg",
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.padding50}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutLeft}>
                        <h1 className={mainStyles.title}>
                            Contact
                        </h1>
                        <div className={styles.aboutText}>
                            <p className={mainStyles.text}>
                                John deMaere
                            </p>
                            <p className={mainStyles.text}>
                                Cell: (604) 818-0012
                            </p>
                            <p className={mainStyles.text}>
                                Office/Recordings: (604) 583-1409
                            </p>
                            <p className={mainStyles.text}>
                                Email: john.demaere@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <footer className={styles.footer}>
                    <a href='https://jaidensiu.vercel.app' className={`${styles.footer__link}`}>
                        © Developed by Jaiden Siu 2024
                    </a>
                </footer>
            </section>
        </>
    );
};

export default AccuraHome;
