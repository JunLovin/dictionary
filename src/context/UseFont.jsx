import { createContext, useState } from 'react'

export const UseFontContext = createContext()

function UseFont({ children }) {
    const [font, setFont] = useState('serif')
    return (
        <>
        <UseFontContext.Provider value={{ font, setFont }}>
            {children}
        </UseFontContext.Provider>
        </>
    )
}

export default UseFont;