import Header from './../components/header'
import AboutUs from '@/components/sections/AboutUs'
import Profile from '@/components/sections/Profile'
import Contacts from '@/components/sections/Contacts'
import Information from "@/components/sections/Information";

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="pt-20">
                <AboutUs />
                <Profile />
                <Contacts />
                <Information />
            </div>
        </>
    )
}
