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
            <section id="landing">
                <div className={styles.top}>
                    <div className={styles.videoBackground}>
                        <video autoPlay loop muted playsInline className={styles.videoFit}>
                            <source
                                src="./accura-website/project-images/video_background.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className={styles.videoOverlay}></div>
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
                    </div>
                </div>
            </section>

            <section id="about" className={styles.sideTopPadding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        About
                    </h1>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        Located in Surrey, BC, our plasterers have well over 100 years of EIFS and hard coat stucco combined experience. We have written safety certifications, and suppliers certifications to install their systems to promptly get the warranty certificates submitted without any problems. With expertise in exterior cornice mouldings, we pride ourselves in the quality of our work and look forward to every new project we start.
                    </p>
                </div>
                <div className={`${mainStyles.container} ${styles.topPadding25}`}>
                    <h3>
                        Outsulation® System Benefits
                    </h3>
                    <p className={`${mainStyles.text} ${styles.topPadding10}`}>
                        • Superior insulation and moisture protection
                    </p>
                    <p className={`${mainStyles.text} ${styles.topPadding10}`}>
                        • Prevents air infiltration and keeps the weather out
                    </p>
                    <p className={`${mainStyles.text} ${styles.topPadding10}`}>
                        • Amazing variety of finishes and colours
                    </p>
                    <p className={`${mainStyles.text} ${styles.topPadding10}`}>
                        • Can be adapted to many architectural styles
                    </p>
                </div>
            </section>

            <section id="projects" className={styles.sideTopPadding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        Projects
                    </h1>
                    <div className={styles.sideTopPadding50}>
                        <Carousel
                            images={[
                                "./accura-website/project-images/petro_canada.jpg",
                                "./accura-website/project-images/td_bank.jpg",
                                "./accura-website/project-images/novo_textiles.jpg",
                                "./accura-website/project-images/melanie_lyne.jpg",
                                "./accura-website/project-images/house_balcony.jpg",
                                // "./accura-website/project-images/starbucks.jpg",
                                // "./accura-website/project-images/honda.jpg",
                                // "./accura-website/project-images/highrise.jpg",
                                // "./accura-website/project-images/building_side.jpg"
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.sideTopPadding50}>
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
                                Cell: <a href="tel:+16048180012">(604) 818-0012</a>
                            </p>
                            <p className={mainStyles.text}>
                                Office/Recordings: <a href="tel:+16045831409">(604) 583-1409</a>
                            </p>
                            <p className={mainStyles.text}>
                                Email: <a href="mailto:john.demaere@gmail.com">john.demaere@gmail.com</a>
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
