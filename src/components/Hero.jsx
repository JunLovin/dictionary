import Header from '@components/Header'
import SearchBox from '@components/SearchBox';
import Footer from '@components/Footer'
import { Outlet } from 'react-router';

function Hero() {
    return (
        <>
        <Header/>
        <div className="hero w-[90%] mx-auto flex flex-col items-center">
            <SearchBox/>
            <Outlet/>
            <div className="footer h-[120px] w-full">
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Hero;