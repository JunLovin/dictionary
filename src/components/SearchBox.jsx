import { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchBox() {
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter' && text.length > 0) {
            navigate(`/word/${text}`)
        } else if (e.key === 'Enter' && text.length === 0) {
            navigate('/')
            return
        }
    }

    console.log(text)

    return (
        <>
        <div className="search w-full bg-neutral-200 h-[60px] relative rounded-[10px]">
            <input type="text" value={text} onChange={handleText} onKeyDown={handleEnter} placeholder="Search..." className="w-full text-xl h-full pr-18 outline-none px-4 relative"/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="absolute text-neutral-500 right-6 top-[1.1rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </div>
        </>
    )
}

export default SearchBox