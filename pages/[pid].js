import Head from 'next/head'
import Embudo from '../src/components/embudo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Script from 'next/script'

const ContactBar = ({ photo, fullname, whatsapp, facebook, instagram }) => {
    return (
        <div className='fixed bottom-0 h-24 w-full bg-gradient-to-b from-black to-gray-800 z-10 flex items-center'>
            <div className='w-9/12 mx-auto flex items-center gap-20 text-gray-50'>
                <Image className='rounded-full' src={photo} height="80" width="80" alt="Foto" />
                <span className='text-xl w-6/12'>Hola soy {fullname} estoy para ayudarte</span>
                <div className='flex gap-5'>
                    {whatsapp &&
                        <a className='text-3xl btn-whatsapp py-2 px-3 rounded-md' href={whatsapp} target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    }
                    {facebook &&
                        <a className='text-3xl btn-facebook py-2 px-3 rounded-md' href={facebook} target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    }
                    {instagram &&
                        <a className='text-3xl btn-instagram py-2 px-3 rounded-md' href={instagram} target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    const router = useRouter()
    const { pid } = router.query

    const [user, setUser] = useState({ photo: '/assets/photos/oscar-gastelum.jpg', })

    const load = async () => {
        const res = await axios.post(`/api/user`, { pid })
        setUser(res.data)
    }

    useEffect(() => {
        if (pid) load()
    }, [pid])

    return (
        <div className='relative'>
            <Head>
                <title>Prime Capital</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <Script src="https://kit.fontawesome.com/e2c8f51d15.js" crossOrigin="anonymous"></Script>

            <Embudo />
            <ContactBar {...user} />
        </div >
    )
}