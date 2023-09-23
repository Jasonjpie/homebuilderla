"use client"
import { useAppDispatch } from '@/store/hooks'
import { setCurrentSection } from '@/store/navigation'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {}

const ContactUs = (props: Props) => {
    const { ref, inView } = useInView({ threshold:0.5})
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(inView){
            dispatch(setCurrentSection('#contact-us'))
        }
    }, [inView])
  return (
    <div ref={ref} id='contact-us' className="w-full bg-[#0A72AD] bg-opacity-10 mb-24">
        <div className="flex flex-col items-center gap-10 py-44">
            <div className="text-center text-4xl font-semibold max-w-md">Want your dream house? Contact Us</div>
            <div className="flex gap-3 max-w-[50%] w-full">
                <input className='px-5 py-2 rounded-md w-full' type="text" placeholder="Enter Your Email" />
                <button className="text-white bg-black px-5 py-3 rounded-lg">Subscribe</button>
            </div>
        </div>     
    </div>
  )
}

export default ContactUs