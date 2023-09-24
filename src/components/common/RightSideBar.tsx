import  { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TfiMouseAlt } from 'react-icons/tfi'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setScrollToBottom, setScrollToTop } from '@/store/scrollable'
import Link from 'next/link'
type Props = {}

const RightSideBar = (props: Props) => {
    const dispatch = useAppDispatch()
    const { scrollTop, scrollHeight } = useAppSelector(state => state.scroll)
    const handleClick = () => {
        if(scrollTop <= scrollHeight / 2){
            dispatch(setScrollToBottom(true))
        }else{
            dispatch(setScrollToTop(true))
        }
    }
  return (
        <div className="absolute flex flex-col justify-center gap-24 top-0 right-0 w-28 max-h-[1000px] h-full p-2">
            <div className="flex flex-col items-center gap-3">
                <div className='p-3 rounded-full shadow-md'><Link href='https://www.facebook.com/Jjpconstruction/' target="_blank"><BiLogoFacebook size={25}/></Link></div>
                <div className='p-3 rounded-full shadow-md'><Link href='https://www.facebook.com/Jjpconstruction/' target="_blank"><PiInstagramLogoLight size={25}/></Link></div>
                <div className='p-3 rounded-full shadow-md'><Link href=""><AiOutlineTwitter size={25}/></Link></div>
                <div className='p-3 rounded-full shadow-md'><Link href='https://www.linkedin.com/company/jjp-construction' target="_blank"><BiLogoLinkedin size={25}/></Link></div>
            </div>
            <button onClick={handleClick} className='flex flex-col items-center gap-2'>
                <TfiMouseAlt/>
                <div className='text-xs'>Scroll {scrollTop <= scrollHeight / 2 ? 'Down':'Up'}</div>
                <div className='h-12 border-l-black border-l-2 border-dashed'/>
            </button>
        </div> 
     )
}

export default RightSideBar