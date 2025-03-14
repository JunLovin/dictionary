import { useContext } from 'react'
import { UseWordContext } from '@context/UseWord'
import { useNavigate } from 'react-router'

function Card({ id, audio, wordInfo, description }) {
    const navigate = useNavigate()
    const { setWord } = useContext(UseWordContext)

    const handleWord = () => {
        navigate(`/${id}`)
        setWord(wordInfo)
    } 

    return (
        <>
        <div className="card w-full my-2 mt-8 flex flex-col gap-2 p-4 py-6 bg-neutral-100 cursor-pointer rounded-[10px] hover:scale-102 transition-all dark:text-white dark:bg-neutral-900 duration-300" onClick={handleWord}>
            <div className="flex justify-between card-top">
                <div className="card-top-left">
                <h2 className="text-3xl font-extrabold">{id}</h2>
                </div>
                <div className="card-top-right">
                        <button 
                            className="p-4 text-yellow-600 bg-yellow-100 rounded-full transition-colors cursor-pointer dark:text-purple-300 hover:bg-yellow-200 dark:bg-purple-900 dark:hover:text-purple-700"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (audio) {
                                    new Audio(audio).play()
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                        </button>
                    </div>
            </div>
            <div className="card-bottom">
                <p className="w-[90%] dark:text-gray-300">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card