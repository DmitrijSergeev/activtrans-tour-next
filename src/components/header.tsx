'use client'
import Image from 'next/image'
import logo from './../../public/img/logo-trans.png'

const Header = () => {

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-gray-800 text-white z-50">
            <nav className="max-w-6xl mx-auto h-full flex justify-between items-center px-4">

                <Image src={logo} alt="logo"
                       className={'h-full w-auto object-contain rounded-2xl'}
                />
                <h1 className="text-3xl font-bold">OOO "АктивТрансТур"</h1>
                <ul className="flex gap-6 items-center">
                    <li>
                        <button onClick={() => scrollTo('main')} className="text-green-500">
                            Main
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('profile')} className="text-green-500">
                            Profile
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('contacts')} className="text-green-500">
                            Contacts
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
