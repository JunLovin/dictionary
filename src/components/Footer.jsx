function Footer() {
    return (
        <>
        <footer className="w-[90%] h-[70px] absolute bottom-0 flex justify-between max-sm:hidden items-center">
            <div className="footer-left"><a className="text-xl font-bold underline text-neutral-200 underline-offset-2 dark:text-neutral-800 dark:hover:text-purple-300/20" href="https://github.com/JunLovin" target="_blank">GitHub</a></div>
            <div className="footer-right"><a className="text-xl font-bold underline text-neutral-200 underline-offset-2 dark:text-neutral-800 dark:hover:text-purple-300/20" href="#">Terms and conditions</a></div>
        </footer>
        </>
    )
}

export default Footer