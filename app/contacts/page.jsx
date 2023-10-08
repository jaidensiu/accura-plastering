import Link from 'next/link'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Contact us page',
}

export default function Contacts() {
    return (
        <>
            <section className={styles.contactsPage}>
                <div className={mainStyles.container}>
                    <div className={styles.contactsInner}>
                        <h3 className={`${mainStyles.title} ${styles.title}`}>
                            We are always ready to answer your questions and provide you with reliable service.
                        </h3>
                        <ul className={styles.contacts}>
                            <li className={styles.contact}>
                                <p className={styles.text}>
                                    You can contact us in any convenient way:
                                </p>
                            </li>
                            <li className={styles.contact}>
                                <Link href='tel:78885553535'>
                                    Phone: +7 888 555 35 35
                                </Link>
                            </li>
                            <li className={styles.contact}>
                                <Link href='mailto:emaildoesntexist@gmail.com'>
                                    E-Mail: emaildoesntexist@gmail.com
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.address}>
                            <div className={styles.addressLeft}>
                                <p className={`${mainStyles.text} ${styles.addressText}`}>
                                    We also invite you to visit our store, where you can see the watches in person and get advice from our experts.
                                </p>
                                <Link target='a_blank' href='https://www.google.com/maps/place/The+University+of+British+Columbia/@49.2606087,-123.2485741,17z/data=!3m1!4b1!4m6!3m5!1s0x548672cc2fd41e03:0xc79dd4e7732aa2f3!8m2!3d49.2606052!4d-123.2459938!16zL20vMDE3Y3k5?entry=ttu'>
                                    Office Address: streetName, city
                                </Link>
                            </div>
                            <div className={styles.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.592125857392!2d-123.2459938!3d49.2606052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sca!4v1692119753448" width={542} height={257} style={{border: '0'}} loading={'lazy'}>
                                </iframe>
                            </div>
                        </div>
                        <p className={mainStyles.text}>
                            Our team is always ready to help you choose the perfect watch, provide additional product information, or assist with making a purchase. Feel free to contact us; we are ready to help you make the right choice and provide you with an unforgettable luxury watch buying experience. We value each of our customers and strive to provide a high level of service.
                        </p>
                        <div className={styles.buttons}>
                            <Link href='/'>
                                <button className={mainStyles.btn}>
                                    Home
                                </button>
                            </Link>
                            <Link href='/catalogue'>
                                <button className={mainStyles.btn}>
                                    Catalog
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
