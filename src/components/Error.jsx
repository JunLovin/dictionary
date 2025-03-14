import Raccooon from '@public/raccoon.gif'

function Error() {
    return (
        <>
        <div className="flex flex-col gap-10 items-center mt-12 w-full error-message">
            <div className="error-top">
                <img src={Raccooon} alt="The best gif" className="rounded-full size-80"/>
            </div>
            <div className="flex flex-col gap-4 items-center error-bottom">
                <h2 className="text-5xl font-extrabold text-center text-black dark:text-purple-500 max-sm:text-4xl">Oops..This word has escaped!</h2>
                <p className="text-2xl font-bold text-center text-neutral-400 dark:text-neutral-600">But here's the best gif ever!</p>
            </div>
        </div>
        </>
    )
}

export default Error