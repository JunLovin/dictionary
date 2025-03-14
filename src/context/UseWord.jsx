import { createContext, useState } from 'react'

export const UseWordContext = createContext()

function UseWord({ children }) {
    const [word, setWord] = useState(null)
    const [data, setData] = useState(null)

    const handleApi = word => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    }

    return (
        <>
        <UseWordContext.Provider value={{ word, setWord, data, handleApi }}>
            {children}
        </UseWordContext.Provider>
        </>
    )
}

export default UseWord