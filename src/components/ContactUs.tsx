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
    <div ref={ref} id='contact-us' className='h-[100vh]'>ContactUs</div>
  )
}

export default ContactUs