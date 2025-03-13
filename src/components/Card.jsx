import { useNavigate } from 'react-router'

function Card({ id }) {
    const navigate = useNavigate()

    const handleWord = () => {
        navigate(`/${id}`)
    } 

    return (
        <>
        <div className="card w-full my-2 mt-8 flex flex-col gap-2 p-4 py-6 bg-neutral-100 cursor-pointer rounded-[10px] hover:scale-102 transition-transform" onClick={handleWord}>
            <div className="card-top flex justify-between">
                <div className="card-top-left">
                <h2 className="font-extrabold text-3xl">Word</h2>
                </div>
                <div className="card-top-left">
                    <h2>Audio</h2>
                </div>
            </div>
            <div className="card-bottom">
                <p className="w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero ad minima tenetur nihil fugiat quam dignissimos, possimus magnam quibusdam. Ad nisi quibusdam eaque in beatae exercitationem repellat facilis obcaecati!</p>
            </div>
        </div>
        </>
    )
}

export default Card