import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toastData }) {
    /*
        <Toast
            id=''
            icon={ICONS_BY_VARIANT[selectedVariant]} //{<Info />}
            variant={selectedVariant}
        >
            {message}
        </Toast>

        <li className={styles.toastWrapper}>
                <Toast variant='notice'>Example notice toast</Toast>
            </li>
   */
    return (
        <ol
            className={styles.wrapper}
            role='region'
            aria-live='assertive'
            aria-label='Notification'
        >
            {toastData.map(({ id, icon, variant, message }) => (
                <li key={id} className={styles.toastWrapper}>
                    <Toast icon={icon} variant={variant} id={id}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    )
}

export default React.memo(ToastShelf)
