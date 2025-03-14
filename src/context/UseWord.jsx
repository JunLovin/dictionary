import { createContext, useState } from 'react'

export const UseWordContext = createContext()

function UseWord({ children }) {
    const [word, setWord] = useState(null)
    const [data, setData] = useState(null)

    const handleApi = word => {
        setData(null)
        return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => {
            if (!res.ok) {
                return { error: true }
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            return data
        })
        .catch(err => {
            console.error('Error fetching word:', err)
            setData({ error: true })
            return { error: true }
        })
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