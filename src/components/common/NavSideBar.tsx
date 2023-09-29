'use client'

import Link from "next/link"
import classNames from "classnames"
import { CiCircleAlert } from "react-icons/ci"
import { BiHelpCircle, BiMenu } from "react-icons/bi"
import { useAppSelector } from "@/store/hooks"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { usePathname } from "next/navigation"

type Props = {}
const Routes = [
    {
        name:'Home',
        route:'#home'
    },
    {
        name:'About Us',
        route:'#about-us'
    },
    {
        name:'Contact Us',
        route:'#contact-us'
    },
]
const NavSideBar = (props: Props) => {
    const { currentSection } = useAppSelector(state => state.nav)
    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="lg:flex lg:flex-col absolute top-0 left-0 w-full lg:w-44 lg:h-[100vh]  max-h-[1000px]  lg:p-3">
        <div className="flex justify-between w-full z-30 bg-white">
            <Link href='/' className=" w-fit text-[#0A72AD] text-4xl font-bold ">
                <Image src='/logo.svg'width={300} height={300}  alt="home builder la logo"/>    
            </Link>
            {showMenu &&
            <div className="p-1">
                <AiOutlineClose size={35} className={`ml-auto p-1`} onClick={() => setShowMenu(false)}/>
            </div>}
            {!showMenu && <BiMenu onClick={() => setShowMenu(true)} className={`lg:hidden cursor-pointer`} size={40} />}
        </div>
        {showMenu && <MobileBar close={() => setShowMenu(false)}/>}

        <div className="hidden md:block">
            <div className="mb-8">Main</div>
            <div className="flex flex-col font-bold">
                {
                    Routes.map((route, index) => 
                        <Link 
                        key={index}
                        href={route.route} 
                        className={classNames("w-full py-3 border-r-8 text-center",
                        {
                            "border-r-[#4E52AE]":currentSection === route.route,
                            "border-r-white":currentSection !== route.route
                        })} >
                            {route.name}
                        </Link>
                    )
                }
            </div>
        </div>
        <div className="mt-auto hidden md:block">
            <div className="mb-8">OTHERS</div>
            <div className="flex flex-col font-bold">
                <Link target="_blank" href='https://shelter-nine.vercel.app/about-us/#faq' className="flex gap-3 items-center w-full py-3" >
                    <CiCircleAlert size={25}/>
                    <div>FAQ</div>
                </Link>
            </div>
        </div>
    </div>
  )
}


type MobileBarProps = {
    close: () => void
}

const MobileBar = ({close}: MobileBarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const path = usePathname()
    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                close()
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })
  return (
    <div ref={ref} className="w-full border pb-10 h-fit bg-white z-50">

        <div>
            {
        Routes.map((bar, index) => (
            <Link key={index} href={bar.route} onClick={close} className={`flex justify-center gap-3 py-2 rounded-md  ${path === bar.route && 'bg-primary bg-opacity-10 text-primary'}`}>
                <div>{bar.name}</div> 
            </Link>
                ))
            }
        </div>
    </div>
  )
}

export default NavSideBar