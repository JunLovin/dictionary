import { useContext } from 'react'
import Card from '@components/Card'
import { UseWordContext } from '@context/UseWord'
import { motion } from 'framer-motion'

function SearchedWord() {
    const { data } = useContext(UseWordContext)

    if (data === null) {
        return <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-8 w-full"
    >
        <div className="grid grid-cols-1 gap-4 w-full">
            {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg transition-all duration-200 animate-pulse bg-neutral-200 dark:bg-neutral-800">
                    <div className="p-4">
                        <div className="mb-4 w-1/3 h-8 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
                        <div className="mb-2 w-full h-4 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
                        <div className="mb-2 w-5/6 h-4 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
                        <div className="w-4/6 h-4 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
                    </div>
                    <div className="px-4 py-3 border-t border-neutral-300 dark:border-neutral-700">
                        <div className="w-1/4 h-6 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
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
                            })} id={item.word} audio={item.phonetics[0] && item.phonetics[0].audio ? item.phonetics[0].audio : item.phonetics[1].audio ? item.phonetics[1].audio : item.phonetics[2].audio ? item.phonetics[2].audio : ""} key={index} />
                        )
                    })}
                </div>}
        </>
    )
}

export default SearchedWord