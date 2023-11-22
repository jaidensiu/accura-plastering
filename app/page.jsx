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
                    <img
                        src="./accura-website/home-images/accura_plastering_ltd.png"
                        alt="Accura Plastering Logo"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
            </section>

            <section className={styles.padding50}>
                <div className={mainStyles.container}>
                    <div className={styles.suppliersInner}>
                        <h3 className={mainStyles.title}>
                            About us
                        </h3>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            Our quality workmanship and safety record speak for themselves.
                        </p>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            We know how to plan our work projects properly, how to set them up properly. 
                        </p>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            Performing the work with excellence becomes much easier. Quality and safety are the natural outcomes. We have written safety certifications,  suppliers certifications to install their systems and to promptly get the warranty certificates submitted without any problems . Our plasterers have well over 100 years of EIFS and hard coat stucco combined experience. They pride themselves in the quality of their work and look forward to every new project they start. For the  Accura team, customer satisfaction is a top priority and we go "above and beyond" to earn your respect.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.padding50}>
                <div className={mainStyles.container}>
                    <div className={styles.suppliersInner}>
                        <h3 className={mainStyles.title}>
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
                </div>
            </section>

            <section className={styles.padding50}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
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
                        <div className={styles.padding50}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.592125857392!2d-123.2459938!3d49.2606052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sca!4v1692119753448" 
                                width={500} 
                                height={250} 
                                style={{border: '0'}} 
                                loading={'lazy'}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}