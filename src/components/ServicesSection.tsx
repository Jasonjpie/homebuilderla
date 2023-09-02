'use client'
import { RiBubbleChartFill, RiQuillPenFill, RiToolsFill } from 'react-icons/ri'
import { FaTelegramPlane } from 'react-icons/fa'
import Image from 'next/image'
import expertiseImage from '@/assets/images/expertise.png'
import communicateVisionImage from '@/assets/images/communicate-vision.png'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { setCurrentSection } from '@/store/navigation'
import { useAppDispatch } from '@/store/hooks'

type Props = {}

const ServicesSection = (props: Props) => {  
    const { ref, inView } = useInView({ threshold:0.4})
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(inView){
            dispatch(setCurrentSection('/services'))
        }
    }, [inView])
  return (
    <div ref={ref} className="flex flex-col gap-16">
        <div className="flex flex-col text-center gap-5 items-center">
            <div className="font-bold text-4xl">Our Services</div>
            <div className="text-[#81838C] max-w-md">Dedicated to Transforming Your Unique Visions into Remarkable Realities with Expertise and Passion</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col items-center text-center gap-5 p-3">
                <RiToolsFill className='text-[#416FF4] mb-5' size={30}/>
                <div className='font-bold text-xl'>Designing Houses</div>
                <div className='text-[#81838C] text-base'>Crafting homes that reflect your vision, blending aesthetics and functionality for the perfect living experience.</div>
            </div>
            <div className="flex flex-col items-center text-center gap-5 p-3">
                <FaTelegramPlane className='text-[#2BD67B] mb-5' size={30}/>
                <div className='font-bold text-xl'>Growing Customer base</div>
                <div className='text-[#81838C] text-base'>Expanding horizons, connecting with more clients to create enduring relationships built on trust and excellence.</div>
            </div>
            <div className="flex flex-col items-center text-center gap-5 p-3">
                <RiBubbleChartFill className='text-[#EED22D] mb-5' size={30}/>
                <div className='font-bold text-xl'>Timely delivery</div>
                <div className='text-[#81838C] text-base'>Ensuring punctual project completion, so your dream spaces are ready when you need them.</div>
            </div>
            <div className="flex flex-col items-center text-center gap-5 p-3">
                <RiQuillPenFill className='text-[#9726EC] mb-5' size={30}/>
                <div className='font-bold text-xl'>High Quality</div>
                <div className='text-[#81838C] text-base'>Setting the standard for excellence, with meticulous attention to detail and unwavering commitment to superior quality.</div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='grid grid-cols-12'>
                <div className='relative col-span-12 lg:col-span-6 w-full h-[600px]'>
                    <Image src={expertiseImage} placeholder='blur' fill alt=''/>
                </div>
                <div className='col-span-12 lg:col-span-6 flex flex-col gap-5 p-5 lg:p-10'>
                    <div className='text-[#416FF4] text-xs'> DESIGN</div>
                    <div className='font-bold text-4xl max-w-md leading-relaxed'>Our Building Expertise</div>
                    <div className='text-[#81838C] text-xl leading-relaxed'>Mastering Construction Craftsmanship to Shape Foundations and Elevate Spaces with Unwavering Skill and Dedication</div>
                </div>
            </div>
            <div className='grid grid-cols-12'>
                <div className='order-1 lg:order-2 relative col-span-12 lg:col-span-6 w-full h-[600px]'>
                    <Image src={communicateVisionImage} placeholder='blur' fill alt=''/>
                </div>
                <div className='order-2 lg:order-1 col-span-12 lg:col-span-6 flex flex-col gap-5 p-5 lg:p-10'>
                    <div className='text-[#416FF4] text-xs'> CONSTRUCTION</div>
                    <div className='font-bold text-4xl max-w-md leading-relaxed'>Communicate your vision, share your designs.</div>
                    <div className='text-[#81838C] text-xl leading-relaxed'>Effortlessly convey your aspirations, as we transform your concepts into tangible blueprints. Collaborative design that turns ideas into remarkable living spaces.</div>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default ServicesSection