import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
    const [toastData, setToastData] = React.useState([])

    const removeBanner = React.useCallback(
        id => {
            const filtredToastData = toastData.filter(d => d.id !== id)
            setToastData(filtredToastData)
        },
        [toastData]
    )

    const value = React.useMemo(() => {
        return { toastData, setToastData, removeBanner }
    }, [toastData, removeBanner])

    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
