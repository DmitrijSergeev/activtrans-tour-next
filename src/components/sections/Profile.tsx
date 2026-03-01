'use client'
import Image from "next/image";
import truck from './../../../public/img/truck.jpg'
const Profile = () => {
    return (
        <section
            id="profile"
            className="min-h-screen flex items-center justify-center bg-green-800"
        >
            <h2 className="text-3xl font-semibold">
                <Image alt={'photo'} src={truck}/>
            </h2>
        </section>
    )
}

export default Profile
