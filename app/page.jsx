import styles from './page.module.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Home page',
}

export default function AccuraHome() {
    return(
        <>
            <section className={styles.top}>
                <div className={`${mainStyles.container} ${styles.topContainer}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="./accura-website/home-images/accura_plastering_ltd.png" alt="Accura Plastering Logo" style={{ width: '100%', height:'auto', objectFit: 'cover' }} />
                </div>
            </section>

            <section id="about" className={styles.padding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        About
                    </h1>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        Our quality workmanship and safety record speak for themselves.
                    </p>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        We know how to plan our work projects properly, how to set them up properly. 
                    </p>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        Performing the work with excellence becomes much easier. Quality and safety are the natural outcomes. We have written safety certifications,  suppliers certifications to install their systems and to promptly get the warranty certificates submitted without any problems . Our plasterers have well over 100 years of EIFS and hard coat stucco combined experience. They pride themselves in the quality of their work and look forward to every new project they start. For the  Accura team, customer satisfaction is a top priority and we go above and beyond to earn your respect.
                    </p>
                </div>
                <div className={`${mainStyles.container} ${styles.topPadding50}`}>
                    <h3>
                        Outsulation® System Benefits
                    </h3>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        ‣ Superior insulation and moisture protection
                    </p>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        ‣ Prevents air infiltration and keeps the weather out
                    </p>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            ‣ Amazing variety of finishes and colours
                    </p>
                    <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                        ‣ Can be adapted to many architectural styles
                    </p>
                </div>
            </section>

            <section id="projects" className={styles.padding50}>
                <div className={mainStyles.container}>
                    <h1 className={mainStyles.title}>
                        Projects
                    </h1>
                    <div className={styles.padding50} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src="./accura-website/project-images/melanie_lyne.jpg" alt="Melanie Lyne" style={{ width: '30%', objectFit: 'cover' }} />
                        <img src="./accura-website/project-images/building_side.jpg" alt="Building side" style={{ width: '30%', objectFit: 'cover' }} />
                        <img src="./accura-website/project-images/novo_textiles.jpg" alt="Novo Textiles" style={{ width: '30%', objectFit: 'cover' }} />
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
                    <a href='https:jaidensiu.github.io/' className={`${styles.link} ${styles.footer__link}`}>
                        © Developed by Jaiden Siu 2023
                    </a>
                </footer>
            </section>
        </>
    )
}