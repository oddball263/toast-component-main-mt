import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
    const [toastData, setToastData] = React.useState([])

    const value = React.useMemo(() => {
        return { toastData, setToastData }
    }, [toastData])

    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
