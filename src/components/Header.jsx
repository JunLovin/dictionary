import { useContext, useState, useEffect, useRef } from 'react'
import { UseFontContext } from '@context/UseFont'
import { useNavigate } from 'react-router'

function Header() {
    const [selectedFont, setSelectedFont] = useState('serif')
    const [darkMode, setDarkMode] = useState(false)
    const { font, setFont } = useContext(UseFontContext)
    const rootRef = useRef(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const newFont = e.target.value
        setSelectedFont(newFont)
        setFont(newFont)
    }

    useEffect(() => {
        if (!rootRef.current) {
            rootRef.current = document.getElementById('root')
        }
        if (rootRef.current) {
            let fontFamily;
            switch (font) {
                case 'serif':
                    fontFamily = 'serif'
                    break;
                case 'poppins':
                    fontFamily = 'Poppins'
                    break;
                case 'inter':
                    fontFamily = 'Inter'
                    break;
                default:
                    fontFamily = 'serif'
            }
            rootRef.current.style.fontFamily = fontFamily
        }
    }, [font])

    const toggleTheme = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const handleNavigate = (url) => {
        navigate(url)
    }

    return (
        <>
            <header className="w-full flex justify-between h-[80px] items-center mb-4 px-4 max-sm:w-full max-sm:px-4">
                <div className="cursor-pointer header-left" onClick={() => handleNavigate('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 dark:text-purple-500/70" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>
                </div>
                <div className="flex gap-12 justify-around items-center h-full header-right max-sm:gap-3">
                    <div className="font-family">
                        <select value={selectedFont} onChange={handleChange} className="px-4 pr-8 leading-tight bg-white border-none transition-colors duration-300 cursor-pointer py-y focus:outline-none dark:bg-neutral-950 dark:text-white">
                            <option value="serif" className="font-serif">Serif</option>
                            <option value="poppins" className="font-poppins">Poppins</option>
                            <option value="inter" className="font-inter">Inter</option>
                        </select>
                    </div>
                    <div className="separator w-[4px] h-[50%] bg-neutral-300 dark:bg-neutral-900 transition-colors duration-300"></div>
                    <div className="flex gap-2 justify-around items-center h-full color-theme">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="26"  height="26" className="text-neutral-400" style={{ color: darkMode ? '#AD46FF' : '#ccc' }}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
                        <div className="relative w-[50px] h-[24px] bg-neutral-300 rounded-full cursor-pointer transition-colors duration-300 ease-in-out" onClick={toggleTheme} style={{ backgroundColor: darkMode ? '#2f334c' : '#87CEEB' }}>
                        {darkMode && (
                                <>
                                    <svg className="absolute top-1 left-2 w-2 h-2 text-yellow-200" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <svg className="absolute top-3 left-5 w-1 h-1 text-yellow-200" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <svg className="absolute top-4 left-3 w-1.5 h-1.5 text-yellow-200" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                </>
                            )}
                            {!darkMode && (
                                <>
                                <svg  xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-1 text-white"  width="12"  height="12"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /></svg>
                                <svg  xmlns="http://www.w3.org/2000/svg" className="absolute top-1 left-3 text-white"  width="14"  height="14"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /></svg>
                                <svg  xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-3 text-white"  width="13"  height="13"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /></svg>
                                </>
                            )

                            }
                            <div className="absolute top-[2px] w-[20px] h-[20px] rounded-full shadow-md transition-transform duration-300 ease-in-out" style={{
                                transform: darkMode ? 'translateX(28px)' : 'translateX(2px)',
                                backgroundColor: darkMode ? '#F6F1D5' : '#ffdd40'
                            }}
                                ></div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-neutral-400" style={{ color: darkMode ? '#AD46FF' : '#ccc' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header