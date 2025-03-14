import { useContext } from 'react'
import Card from '@components/Card'
import { UseWordContext } from '@context/UseWord'

function SearchedWord(){
    const { data } = useContext(UseWordContext)

    if (data === null) {
        return <div className="py-8 text-center text-neutral-500 dark:text-neutral-300">Loading...</div>
    }

    return (
        <>
        {data &&   
            <div className="w-full searched-words">
                {data.map((item, index) => {
                    return (
                        <Card wordInfo={item} description={item.meanings.map((el) => {
                            return el.definitions.map((el) => {
                                return el.definition
                            })
                        })} id={item.word} audio={item.phonetics[0] && item.phonetics[0].audio ? item.phonetics[0].audio : item.phonetics[1].audio ? item.phonetics[1].audio : item.phonetics[2].audio ? item.phonetics[2].audio : ""} key={index}/>
                    )
                })}
            </div>
        }
        </>
    )
}

export default SearchedWord