import Header from '@components/Header'
import SearchBox from '@components/SearchBox';
import Footer from '@components/Footer'
import { Outlet, useLocation } from 'react-router';

function Hero() {
    const location = useLocation()
    const homePage = location.pathname === '/';

    return (
        <>
        <Header/>
        <div className="hero w-[90%] mx-auto flex flex-col items-center">
            <SearchBox/>
            {homePage && (
                <div className="flex flex-col mt-4 w-full h-auto dark:text-white">
                        <h2 className="mb-3 text-4xl font-extrabold leading-normal text-yellow-500 transition-colors duration-300 dark:text-purple-400">Welcome to my dictionary!</h2>
                        <p className="max-w-[90ch] mb-4">Have you ever found yourself searching for the exact meaning of a word in English 🤔 Or needing clear examples to understand its usage? Your search ends here! ✨</p>
                        <p className="max-w-[90ch] mb-5">Welcome <span className="font-semibold text-yellow-600 transition-colors duration-300 dark:text-purple-300">My Dictionary</span>, your reliable companion to explore the fascinating world of English words. We have created this tool with you in mind 💡 offering accurate definitions 🔍, practical examples ✍️ and an intuitive experience that will help you expand your vocabulary and improve your language skills 🌈. </p>
                        <h3 className="mb-2 text-2xl font-bold leading-normal text-yellow-500 transition-colors duration-300 dark:text-purple-400">Why choose us?</h3>
                        <ul className="flex flex-col gap-3 mb-5">
                            <li>🚀 <span className="font-bold text-yellow-600 transition-colors duration-300 dark:text-purple-300">Simple and Fast:</span> Just type the English word and get its definitions and examples in seconds ⏱️.</li>
                            <li>🔒 <span className="font-bold text-yellow-600 transition-colors duration-300 dark:text-purple-300">Reliable:</span> We use the <a href="https://dictionaryapi.dev/" target='_blank' className="font-semibold text-yellow-600 underline transition-colors duration-300 dark:text-purple-300">freeDictionaryAPI</a> , a reliable and up-to-date source to ensure accurate information 🎯.</li>
                            <li>🎁 <span className="font-bold text-yellow-600 transition-colors duration-300 dark:text-purple-300">Totally Free</span> No hidden costs or complications. Everything you need is here, ready to use 💯.
                            </li>
                            <li>💡 <span className="font-bold text-yellow-600 transition-colors duration-300 dark:text-purple-300">Open Source:</span> We believe in transparency 👀. You can check out all the code in our public <a href="https://github.com/JunLovin/dictionary" target="blank" className="font-semibold text-yellow-600 underline dark:text-purple-300">GitHub Repo</a></li>
                        </ul>
                            <h3 className="mb-2 text-2xl font-bold text-yellow-500 transition-colors duration-300 dark:text-purple-400">🌍 More languages coming soon.</h3>
                            <p className="max-w-[90ch] mb-5">Currently, our tool supports only English words 🇺🇸, but we are working hard to add other languages in the near future 🌟 Stay tuned to discover new features! 🔜 </p>
                            <h3 className="mb-2 text-2xl font-bold text-yellow-500 transition-colors duration-300 dark:text-purple-400">💌 Your Opinion Matters  </h3>
                            <p className="max-w-[90ch] leading-normal mb-8">We'd love to know what you think about our tool ❤️. Do you have any suggestions or comments? Feel free to write us at our <a href="mailto:mathiassaid7@gmail.com" target="_blank" className="font-semibold text-yellow-600 underline transition-colors duration-300 dark:text-purple-300">email</a> ✉️. Your feedback helps us improve and give you the best possible experience 🙌. </p>
                            <br/>
                            <br/>
                            <p>👉 Visit my <a href="https://github.com/JunLovin" target="_blank" className="font-semibold text-yellow-600 underline transition-colors duration-300 dark:text-purple-300">GitHub</a> to see how it works behind the scenes and discover more about this project 🛠️. </p>
                            <p className="mt-4 text-right">-<a href="https://said-beta.vercel.app" target="_blank" className="font-semibold text-yellow-600 underline transition-colors duration-300 dark:text-purple-400">JunLovin</a></p>
                    </div>
            )
            }
            <Outlet/>
            <div className="footer h-[120px] w-full">
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Hero;