"use client"
import  { AiFillCheckCircle, AiOutlineTwitter } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import  { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { setCurrentSection } from '@/store/navigation'
import { useAppDispatch } from '@/store/hooks'
import Link from 'next/link'
import { BsYoutube } from 'react-icons/bs'
import { SiHouzz } from 'react-icons/si'

type Props = {}

const AboutSection = (props: Props) => {
    const { ref, inView } = useInView({ threshold:0.5})
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(inView){
            dispatch(setCurrentSection('#about-us'))
        }
    }, [inView])
  return (
    <div ref={ref} id='about-us' className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16">
        <div className='flex flex-col gap-10'>
            <div className="flex flex-col gap-10 capitalize border rounded-md shadow-md p-10">
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xs text-[#707070]">CONSTRUCTION</div>
                    <div className="font-bold text-4xl">JJP CONSTRUCTION</div>
                    <div className="text-xs text-[#262020]">200+ clients</div>
                </div>
                <div>Exemplifying excellence, JJP Construction crafts visionary spaces. From new builds to remodels, our team ensures precision and quality, building environments that inspire.</div>
                <div className="flex flex-col gap-5 pb-5 border-b">
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Amazing Service</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Timely Delivery</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Experienced members</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Beautify result</div>
                    </div>
                </div>
                <button className="flex items-center gap-3 px-5 py-2 text-white bg-[#416FF4] rounded-md self-start"
                onClick={() => {
                    window.open("https://jjp-beta.vercel.app/", "_blank");
                  }}
                >
                    <div>Visit Website</div>
                    <FiArrowRight size={25}/>
                </button>
            </div>
            <div className="flex items-center gap-3">
                <Link target='_blanck' href="https://www.facebook.com/Jjpconstruction/" className='p-3 rounded-full bg-black'> <BiLogoFacebook className='text-white' size={25}/>  </Link>
                <Link target='_blanck' href="https://www.instagram.com/jjpconstruction/" className='p-3 rounded-full bg-black'> <PiInstagramLogoLight className='text-white' size={25}/>  </Link>
                <Link target='_blanck' href="https://www.youtube.com/@JasonPie/videos" className='p-3 rounded-full bg-black'> <BsYoutube className='text-white' size={25}/>  </Link>
                <Link target='_blanck' href="https://www.houzz.com/professionals/home-builders/jjp-construction-pfvwus-pf~724293494?" className='p-3 rounded-full bg-black'> <SiHouzz className='text-white' size={25}/>  </Link>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className="flex flex-col gap-10 capitalize rounded-md border shadow-md p-10">
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xs text-[#707070]">DESIGN</div>
                    <div className="font-bold text-4xl">Shelter Design</div>
                    <div className="text-xs text-[#707070]">130+ clients</div>
                </div>
                <div>Architectural Design Shelter focuses on purposeful designs that elevate living. Led by visionary architects, our creations blend aesthetics and function, enriching lives and communities</div>
                <div className="flex flex-col gap-5 pb-5 border-b">
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Modern Design</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Interior Design</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>Top Architects</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AiFillCheckCircle size={20} className='bg-white text-green-500'/>
                        <div>100+ proof of work</div>
                    </div>
                </div>
                <button className="flex items-center gap-3 px-5 py-2 text-white bg-[#416FF4] rounded-md self-start"
                onClick={() => {
                    window.open("https://shelter-nine.vercel.app/", "_blank");
                  }}
                  >
                    <div>Visit Website</div>
                    <FiArrowRight size={25}/>
                </button>
            </div>
            <div className="flex items-center gap-3">
                <Link target='_blanck' href="https://www.facebook.com/Jjpconstruction/" className='p-3 rounded-full shadow-md'> <BiLogoFacebook size={25}/>  </Link>
                <Link target='_blanck' href="https://www.instagram.com/jjpconstruction/" className='p-3 rounded-full shadow-md'> <PiInstagramLogoLight size={25}/>  </Link>
                <Link target='_blanck' href="https://www.youtube.com/@JasonPie/videos" className='p-3 rounded-full shadow-md'> <BsYoutube size={25}/>  </Link>
                <Link target='_blanck' href="https://www.houzz.com/professionals/home-builders/jjp-construction-pfvwus-pf~724293494?" className='p-3 rounded-full shadow-md'> <SiHouzz size={25}/>  </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutSection