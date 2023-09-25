'use client'

import Link from "next/link"
import classNames from "classnames"
import { CiCircleAlert } from "react-icons/ci"
import { BiHelpCircle } from "react-icons/bi"
import { useAppSelector } from "@/store/hooks"
import Image from "next/image"
type Props = {}

const NavSideBar = (props: Props) => {
    const { currentSection } = useAppSelector(state => state.nav)
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
  return (
    <div className="flex flex-col gap-10 absolute top-0 left-0 w-44 h-[100vh]  max-h-[1000px]  p-3">
        <Link href='/' className="fixed md:static top-0 z-30 w-full text-[#0A72AD] text-4xl font-bold bg-white">
            <Image src='/logo.svg'width={300} height={300}  alt="home builder la logo"/>    
        </Link>
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

export default NavSideBar