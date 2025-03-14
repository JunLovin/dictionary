import { useContext } from 'react'
import { UseWordContext } from '@context/UseWord'

function Word() {
    const { word } = useContext(UseWordContext)

    if (word !== null) {
        console.log(word)
    }

    return (
        <>
            <div className="flex flex-col gap-4 mt-12 w-full h-auto word dark:text-white">
                <div className="flex justify-between mb-5 word-top">
                    <div className="flex flex-col gap-2 word-top-left">
                        <h2 className="text-6xl font-extrabold">{word.word}</h2>
                        <p className="text-2xl text-purple-400">{word.phonetic}</p>
                    </div>
                    <div className="word-top-right">
                        {word.phonetics && word.phonetics.some(phonetic => phonetic.audio) && (
                            <button
                                className="p-4 bg-purple-100 rounded-full transition-colors cursor-pointer hover:bg-purple-200 dark:bg-purple-900"
                                onClick={() => {
                                    const audio = word.phonetics.find(p => p.audio)?.audio
                                    if (audio) {
                                        new Audio(audio).play()
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 dark:text-purple-300">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-4 word-bottom">
                    <div className="flex flex-col gap-8 mb-10 word-noun-meaning">
                        <h3 className="text-black font-extrabold text-2xl relative before:w-[90%] before:content-[''] before:absolute before:h-1 before:bg-neutral-100 before:top-[50%] before:left-[55%] before:translate-[-50%] dark:text-white dark:before:bg-purple-500/20 before:transition-colors before:duration-300 max-sm:before:w-[78%] max-sm:before:left-[60%]">noun</h3>
                        <h3 className="text-xl text-neutral-400 dark:text-neutral-300">Meaning</h3>
                        <ul className="flex flex-col gap-3 list-disc list-outside px-4 w-[90%] mx-auto text-[1.1rem]">
                            {word.meanings[0] && word.meanings[0].definitions.map((element) => {
                                return (
                                    <>
                                        <li className="pl-4 leading-normal text-black dark:text-white">{element.definition}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8 mb-10 word-verb-meanig">
                        <h3 className="ext-black font-extrabold text-2xl relative before:w-[90%] before:content-[''] before:absolute before:h-1 before:bg-neutral-100 before:top-[50%] before:left-[55%] before:translate-[-50%] dark:text-white dark:before:bg-purple-500/20 before:transition-colors before:duration-300 max-sm:before:w-[78%] max-sm:before:left-[60%]">verb</h3>
                        <h3 className="text-xl text-neutral-400 dark:text-neutral-300">Meaning</h3>
                        <ul className="list-disc flex flex-col gap-3 list-outside px-4 w-[90%] mx-auto text-[1.1rem]">
                            {word.meanings[1] ? word.meanings[1].definitions.map((element) => {
                                return (
                                    <>
                                        <li className="pl-4 leading-normal text-black dark:text-white">{element.definition}</li>
                                        <p className="pl-4 mt-1 text-neutral-400 dark:text-neutral-300">{element.example && `"${element.example}"`}</p>
                                    </>
                                )
                            }) : <p className="pl-4 text-black">Nothing here!</p>}
                        </ul>
                    </div>
                    <hr className="text-neutral-200 dark:text-purple-500/70" />
                    <div className="flex flex-wrap gap-6 word-source max-sm:gap-3">
                        <span className="text-neutral-400 dark:text-neutral-300">Source</span>
                        {word.sourceUrls && word.sourceUrls.length > 0 ? (
                            <a href={word.sourceUrls[0]} className="underline underline-offset-3 dark:text-purple-400" target="_blank" rel="noopener noreferrer">
                                {word.sourceUrls[0]}
                            </a>
                        ) : (
                            <span className="dark:text-neutral-300">No source available</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Word