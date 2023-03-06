import React from 'react'
import Button from '../Button'
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css'
import { AlertOctagon, AlertTriangle, CheckCircle, Info } from 'react-feather'
//import ToastProvider, { ToastContext } from '../ToastProvider'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']
const ICONS_BY_VARIANT = {
    notice: <Info />,
    warning: <AlertTriangle />,
    success: <CheckCircle />,
    error: <AlertOctagon />,
}

function ToastPlayground() {
    //const { toastData, setToastData } = React.useContext(ToastContext)

    const [selectedVariant, setSlectedVariant] = React.useState('notice')
    const [message, setMessage] = React.useState('')
    const [toastData, setToastData] = React.useState([])

    const removeBanner = id => {
        console.log({ toastData, id: id })

        const filtredToastData = toastData.filter(d => d.id !== id)
        setToastData(filtredToastData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const uuid = crypto.randomUUID()

        const newToast = {
            id: uuid,
            icon: ICONS_BY_VARIANT[selectedVariant],
            variant: selectedVariant,
            message: message + ' ' + uuid,
        }
        console.log({ toastData, newToast })
        const newToastData = [...toastData, newToast]
        console.log({ newToastData })
        setToastData(newToastData)
        setMessage('')
        setSlectedVariant('notice')
    }

    return (
        <div className={styles.wrapper}>
            {console.log('return toastData: ', toastData)}
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toastData={toastData} handleShowBanner={removeBanner} />

            <div className={styles.controlsWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <label
                            htmlFor='message'
                            className={styles.label}
                            style={{ alignSelf: 'baseline' }}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id='message'
                                className={styles.messageInput}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                            {VARIANT_OPTIONS.map(option => (
                                <label key={option} htmlFor={`variant-${option}`}>
                                    <input
                                        id={`variant-${option}`}
                                        type='radio'
                                        name='variant'
                                        value={option}
                                        checked={option === selectedVariant}
                                        onChange={() => setSlectedVariant(option)} //(e.target.value)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToastPlayground
