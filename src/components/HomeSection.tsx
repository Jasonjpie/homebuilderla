'use client'
import  { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import  { BsArrowUpRight } from 'react-icons/bs'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { setCurrentSection } from '@/store/navigation'
import { useAppDispatch } from '@/store/hooks'

type Props = {}

const HomeSection = (props: Props) => {
    const { ref, inView } = useInView({ threshold:0.5})
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(inView){
            dispatch(setCurrentSection('#home'))
        }
    }, [inView])

  return (
    <div ref={ref} id='home' className="flex flex-col text-center items-center gap-10 pt-16">
        <div className="font-medium text-5xl max-w-lg">Our Wide Range of Professional Service</div>
        <div>Dedicated to Transforming Your Unique Visions into Remarkable Realities with Expertise and Passion</div>
        <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 md:col-span-6 lg:col-span-4 p-10 flex flex-col gap-5 bg-black text-white text-left'>
                <div className='flex justify-between'>
                    <div className='font-bold text-3xl'>01</div>
                    <BsArrowUpRight size={30} className='text-white'/>
                </div>
                <div className='font-semibold text-2xl max-w-xs'>Interior Design</div>
                <div>Interior design plays a significant role in the look, feel, and functionality of a space, and can greatly impact our daily lives.</div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-4 p-10 flex flex-col gap-5 bg-black text-white text-left'>
                <div className='flex justify-between'>
                    <div className='font-bold text-3xl'>02</div>
                    <BsArrowUpRight size={30} className='text-white'/>
                </div>
                <div className='font-semibold text-2xl max-w-xs'>Construction Management</div>
                <div>Expert construction management ensuring seamless project execution, on-time delivery, and budget adherence for your dream projects.</div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-4 p-10 flex flex-col gap-5 bg-[#FFD400] text-black text-left'>
                <div className='flex justify-between'>
                    <div className='font-bold text-3xl'>03</div>
                    <BsArrowUpRight size={30} className='text-black'/>
                </div>
                <div className='font-semibold text-2xl max-w-xs'>Architectural Design</div>
                <div>Transform your living space with a home redesign that adds style, functionality, and a fresh perspective to your environment.</div>
            </div>
        </div>
        <div className="flex justify-center gap-3 pb-5">
                <div className='p-3 rounded-full bg-black'> <BiLogoFacebook className='text-white' size={25}/>  </div>
                <div className='p-3 rounded-full bg-black'> <PiInstagramLogoLight className='text-white' size={25}/>  </div>
                <div className='p-3 rounded-full bg-black'> <AiOutlineTwitter className='text-white' size={25}/>  </div>
                <div className='p-3 rounded-full bg-black'> <BiLogoLinkedin className='text-white' size={25}/>  </div>
            </div>
    </div>
  )
}

export default HomeSection