import Link from 'next/link';
import BrandsData from '../database/BrandsData';
import styles from './page.module.css';
import mainStyles from '../main.module.css';

export const metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'About page',
};

export default function About() {
    return (
        <section className={styles.aboutPage}>
            <div className={mainStyles.container}>
                <div className={styles.aboutInner}>
                    <h3 className={mainStyles.title}>Accura Plastering Ltd.</h3>
                    <div className={styles.textContainer}>
                        <p className={mainStyles.text}>
                            Text
                        </p>
                        <p className={mainStyles.text}>
                            Text
                        </p>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.aboutTop}>
                            <div className={styles.aboutLeft}>
                                <p className={mainStyles.text}>
                                    Text
                                </p>
                                <img src="./rich-tales/about-images/about-image1.jpg" alt="" className={styles.aboutLeftImg} />
                            </div>
                            <div className={styles.aboutRight}>
                                <p className={styles.text}>
                                    Text
                                </p>
                                <div className={styles.brands}>
                                    {BrandsData.map((brand, index) => (
                                        <img key={index} src={brand.img} alt="" className={styles.brand} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img src="./rich-tales/about-images/about-image2.jpg" alt="" className={styles.aboutImg} />
                    </div>
                    <div className={styles.aboutDown}>
                        <Link href='/catalogue'>
                            <button className={`${mainStyles.btn} ${styles.aboutBtn}`}>Button</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.contactsInner}>
                    <h3 className={mainStyles.title}>Our Contact</h3>
                    <ul className={styles.contacts}>
                        <li className={styles.contact}>
                            <Link href='tel: 7789008090'>
                                Phone: (###) ###-####
                            </Link>
                        </li>
                        <li className={styles.contact}>
                            <Link href='mailto: email@gmail.com'>
                                E-Mail: email@gmail.com
                            </Link>
                        </li>
                        <li className={styles.contact}>
                            <Link target='_blank' href='https://www.google.com/maps/place/The+University+of+British+Columbia/@49.2606087,-123.2485741,17z/data=!3m1!4b1!4m6!3m5!1s0x548672cc2fd41e03:0xc79dd4e7732aa2f3!8m2!3d49.2606052!4d-123.2459938!16zL20vMDE3Y3k5?entry=ttu'>
                                Office Address: streetName, city
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.592125857392!2d-123.2459938!3d49.2606052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sca!4v1692119753448"
                            width={1140}
                            height={317}
                            style={{ border: '0' }}
                            loading={'lazy'}
                        ></iframe>
                    </div>
                    <div className={styles.contactsDown}>
                        <Link href='/contacts'>
                            <button className={`${mainStyles.btn} ${styles.contactsBtn}`}>Button</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
