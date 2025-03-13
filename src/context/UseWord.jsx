import { createContext, useState, useEffect } from 'react'

export const UseWordContext = createContext()

function UseWord({ children }) {
    const [word, setWord] = useState('')
    const [data, setData] = useState(null)

    const handleApi = word => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        handleApi(word)
    })

    return (
        <>
        <UseWordContext.Provider value={{ word, setWord, data }}>
            {children}
        </UseWordContext.Provider>
        </>
    )
}

export default UseWord