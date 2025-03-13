import { useParams } from 'react-router'

function Word() {
    const { word } = useParams()

    return (
        <>
        <div className="word flex flex-col gap-4 w-full h-auto mt-12">
            <div className="word-top flex justify-between mb-5">
                <div className="word-top-left flex flex-col gap-2">
                    <h2 className="text-6xl font-extrabold">{word}</h2>
                    <p className="text-purple-400 text-2xl">pronounce</p>
                </div>
                <div className="word-top-right">
                    <h2>Audio</h2>
                </div>
            </div>
            <div className="word-bottom flex flex-col gap-4">
                <div className="word-noun-meaning flex flex-col gap-4">
                    <h3 className="text-black font-extrabold text-2xl relative before:w-[90%] before:content-[''] before:absolute before:h-1 before:bg-neutral-100 before:top-[50%] before:left-[55%] before:translate-[-50%]">noun</h3>
                        <h3 className="text-neutral-400 text-xl">Meaning</h3>
                    <ul className="flex flex-col gap-2 list-disc list-outside px-4 w-[90%] mx-auto text-[1.1rem]">
                        <li className="text-black leading-normal pl-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde autem, nam aliquid quaerat dolores saepe ullam veritatis fugit laudantium asperiores incidunt recusandae dolore ea aperiam officiis enim mollitia consectetur?</li>
                        <li className="text-black leading-normal pl-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet provident nihil, mollitia ratione possimus, culpa autem quo odio, rerum dolorum corrupti! Dolor soluta aspernatur nesciunt illo beatae inventore placeat voluptatibus.</li>
                        <li className="text-black leading-normal pl-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illo ab fugiat debitis consequatur excepturi, eaque sequi totam, nihil doloremque dolorum obcaecati magni ex inventore dolor dolorem officiis praesentium veritatis.</li>
                    </ul>
                </div>
                <div className="word-verb-meanig flex flex-col gap-4 mb-3">
                    <h3 className="text-black relative font-extrabold text-2xl before:w-[90%] before:content-[''] before:absolute before:h-1 before:bg-neutral-100 before:top-[50%] before:left-[55%] before:translate-[-50%]">verb</h3>
                    <h3 className="text-neutral-400 text-xl">Meaning</h3>
                    <ul className="list-disc list-outside px-4 w-[90%] mx-auto text-[1.1rem]">
                        <li className="text-black pl-4">To type on computer keyboard</li>
                        <p className="text-neutral-400 pl-4 mt-1">"Keyboarding is the part of this job I hate the most."</p>
                    </ul>
                </div>
                <hr className="text-neutral-200"/>
                <div className="word-source flex gap-6">
                    <span className="text-neutral-400">Source</span>
                    <a href="https://github.com/JunLovin" className="underline underline-offset-3" target="_blank">https://github.com/JunLovin</a>
                </div>
            </div>
        </div>        
        </>
    )
}

export default Word