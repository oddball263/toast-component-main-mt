import React from 'react'

// generic key listener w callback.
const useEscapeKey = (key, e, callback) => {
    React.useEffect(() => {
        function checkKey(e) {
            if (e.key === key) {
                callback([])
            }
        }

        window.addEventListener(e, checkKey)

        return () => {
            window.removeEventListener(e, checkKey)
        }
    }, [key, e, callback])
}

export default useEscapeKey
