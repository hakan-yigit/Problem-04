import Image from 'next/image'
import { useState } from 'react'


// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser,setIsAuthUSer] = useState(false);

  const handleLogin = () => {
    setIsAuthUSer((pre)=> !pre);
  }

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar flex flex-col items-center justify-center'>
        <Logo />
        <h1 className='text-center font-bold text-[35px]' >Hesabiniza Giriş Yapın</h1>
        <div></div>
        <div className='navbar-links flex flex-col text-center justify-center items-center gap-2'
        >{isAuthUser ? (
          <>
          <Button buttonText={"Dasboard"} value={"#"} />
          <Button buttonText={"Sign Out"} value={"#"}/>
          </>
        ) : (
          <Button buttonText={"Login"} value={"#"} onClick={handleLogin} />

        )}</div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <Image
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}

const Button = ({buttonText,link,onClick}) => {
return(
  <a 
  href={link}
  onClick={onClick}
  className='"w-[250px] bg-[#000C66] p-2 rounded-md text-white cursor-pointer'
  >{buttonText} </a>
)
}
