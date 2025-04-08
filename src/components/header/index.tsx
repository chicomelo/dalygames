import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../../public/logo.svg'
import { LiaGamepadSolid } from 'react-icons/lia'

export function Header(){
    return(
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-6xl mx-auto flex justify-center sm:justify-between items-center h-28">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href="/">
                        <Image
                            src={logoImg}
                            alt="Logo do dailygamese"
                            quality={100}
                            priority={true}
                            className='w-full'
                        ></Image>
                    </Link>

                    <Link href="/">Games</Link>
                    <Link href='/perfil'>Perfil</Link>
                </nav>
                <div className='hidden sm:flex justify-center items-center'>
                    <Link href='/perfil'>
                        <LiaGamepadSolid size={34} color='#475569'></LiaGamepadSolid>
                    </Link>
                </div>
            </div>
        </header>
    )
}