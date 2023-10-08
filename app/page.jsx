import Link from 'next/link'
import HomeSlider from './components/HomeSlider/HomeSlider'
import RunningStroke from './components/RunningStroke/RunningStroke'
import HomeCollection from './components/HomeCollection/HomeCollection'
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
                <div className={`${mainStyles.container} ${styles.topContainer}`}>
                    <div className={styles.topInner}>
                        <div className={styles.topLeft}>
                            <h2 className={styles.topTitle}>
                                Title
                            </h2>
                            <p className={mainStyles.text}>
                                Text
                            </p>
                            <Link href='/catalogue'>
                                <button className={mainStyles.btn}>
                                    Catalogue
                                </button>
                            </Link>
                        </div>
                        <div className={styles.topRight}>
                            <img src="./rich-tales/home-images/top-image.png" alt="" className={styles.topImg} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.arrivals}>
                <div className={mainStyles.container}>
                    <div className={styles.arrivalsInner}>
                        <h3 className={mainStyles.title}>
                            Title
                        </h3>
                        <p className={`${mainStyles.text} ${styles.arrivalsText}`}>
                            Text
                        </p>
                        <HomeSlider/>
                    </div>
                </div>
            </section>

            <section className={styles.suppliers}>
                <div className={mainStyles.container}>
                    <div className={styles.suppliersInner}>
                        <h3 className={mainStyles.title}>
                            Title
                        </h3>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            Text
                        </p>
                        <RunningStroke/>
                        <p className={`${mainStyles.text} ${styles.suppliersBottomText}`}>
                            Text
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.collections}>
                <div className={mainStyles.container}>
                    <div className={styles.collectionsInner}>
                        <h3 className={mainStyles.title}>
                            Title
                        </h3>
                        <p className={`${mainStyles.text} ${styles.collectionsText}`}>
                            Text
                        </p>
                        <div className={styles.collectionsContent}>
                            <HomeCollection img='./rich-tales/collections-images/collection-image1.jpg' title="Gentleman's Reserve"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image2.jpg' title="Timeless Classics"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image3.jpg' title="Heritage Collection"/>
                        </div>
                        <div className={styles.collectionsDown}>
                            <Link href='/catalogue'>
                                <button className={`${mainStyles.btn} ${styles.collectionsBtn}`}>
                                    Button
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutLeft}>
                            <h3 className={mainStyles.title}>
                                Title
                            </h3>
                            <div className={styles.aboutText}>
                                <p className={mainStyles.text}>
                                    Text
                                </p>
                                <p className={mainStyles.text}>
                                    Text
                                </p>
                            </div>
                            <Link href='/about'>
                                <button className={`${mainStyles.btn} ${styles.aboutBtn}`}>
                                    Button
                                </button>
                            </Link>
                        </div>
                        <div className={styles.aboutRight}>
                            <h2 className={styles.aboutTitle}>
                                Accura Plastering Ltd.
                            </h2>       
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}