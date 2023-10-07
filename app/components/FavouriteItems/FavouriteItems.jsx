'use client'

import { useSelector } from 'react-redux'
import Link from 'next/link'

import WatchItem from '../WatchItem/WatchItem'

import styles from '../../favorites/page.module.css'
import mainStyles from '../../main.module.css'

export default function FavouriteItems() {
    const items = useSelector(state => state.favorite.itemsInFavorite)

    return (
        <div className={styles.FavouriteItems}>
            {items.length > 0 ? (
                items.map((watch) => (
                    <WatchItem key={watch.parentId} watch={watch}/>
                ))
            ) : (
                <div className={styles.empty}>
                    <p className={styles.text}>It seems like your favorites are empty</p>
                    <Link href='/catalogue'>
                        <button className={`${mainStyles.btn} ${styles.emptyBtn}`}>Return to catalog</button>
                    </Link>
                </div>
            )}
        </div>
    )
}