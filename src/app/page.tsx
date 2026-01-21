import Header from './../components/header'
import Hero from '@/components/sections/Hero'
import Profile from '@/components/sections/Profile'
import Contacts from '@/components/sections/Contacts'

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero />
                <Profile />
                <Contacts />
            </main>
        </>
    )
}
