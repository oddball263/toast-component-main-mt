import React from 'react'
import { X } from 'react-feather'
import { ToastContext } from '../ToastProvider'
import VisuallyHidden from '../VisuallyHidden'
import styles from './Toast.module.css'

/* 
    -- not using here
    -- Letting user add the icon
    -- can put constraints on it

    const ICONS_BY_VARIANT = {
        notice: Info,
        warning: AlertTriangle,
        success: CheckCircle,
        error: AlertOctagon,
    }

    const Icon = ICONS_BY_VARIANT[ variant ]

*/

function Toast({ icon, variant, id, children }) {
    const { removeBanner } = React.useContext(ToastContext)

    const clonedIcon = React.cloneElement(icon, {
        size: icon.props?.size > 24 ? 24 : icon.props?.size,
    })

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>{clonedIcon}</div>
            <VisuallyHidden>{`${variant} message`}</VisuallyHidden>

            <p className={styles.content}>{children}</p>

            <button
                className={styles.closeButton}
                aria-label='Dismiss message'
                aria-live='off'
            >
                <VisuallyHidden>{`Dismiss ${variant} message`}</VisuallyHidden>
                <X size={24} onClick={() => removeBanner(id)} />
            </button>
        </div>
    )
}

export default Toast
