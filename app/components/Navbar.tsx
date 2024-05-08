import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import Button from './Button'


const Navbar = () => {
  return (
    <nav className='flexBetween max-container
      padding-container relative z-30 py-5'>
        <Link href='/'>
          <Image src='/hilink-logo.svg' alt='logo' height={29} width={74} />
        </Link>
        <ul className='hidden lg:flex gap-12 h-full'>
         {
          NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key}
            className='regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 
            transition-all hover:font-bold'>
              {link.label}
            </Link>
          
          ))
         }
        </ul>
         <div className='hidden lg:flexCenter '>
            <Button 
           
            type='button' 
            title='Login'
            variant='btn_dark_green'
            icon='/user.svg'
            />
         </div>

         <Image
          src='menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer  lg:hidden'
         />
    </nav>
  )
}

export default Navbar