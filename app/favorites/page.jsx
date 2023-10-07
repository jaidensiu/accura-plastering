import FavouriteItems from '../components/FavouriteItems/FavouriteItems'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Favourites page',
}

export default function Favorites() {

    return(
        <section className={styles.favoritesPage}>
            <div className={mainStyles.container}>
                <div className={styles.favoritesInner}>
                    <h3 className={mainStyles.title}>Favourites</h3>
                    <FavouriteItems/>
                </div>
            </div>
        </section>
    )
}