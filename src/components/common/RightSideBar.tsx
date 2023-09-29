import  { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { BsYoutube } from 'react-icons/bs'
import { TfiMouseAlt } from 'react-icons/tfi'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setScrollToBottom, setScrollToTop } from '@/store/scrollable'
import { SiHouzz } from 'react-icons/si'
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
        <div className="absolute hidden lg:flex flex-col justify-center gap-24 top-0 right-0 w-28 max-h-[1000px] h-full p-2">
            <div className="flex flex-col items-center gap-3">
                <Link target='_blanck' href="https://www.facebook.com/Jjpconstruction/" className='p-3 rounded-full shadow-md'> <BiLogoFacebook size={25}/>  </Link>
                <Link target='_blanck' href="https://www.instagram.com/jjpconstruction/" className='p-3 rounded-full shadow-md'> <PiInstagramLogoLight size={25}/>  </Link>
                <Link target='_blanck' href="https://www.youtube.com/@JasonPie/videos" className='p-3 rounded-full shadow-md'> <BsYoutube size={25}/>  </Link>
                <Link target='_blanck' href="https://www.houzz.com/professionals/home-builders/jjp-construction-pfvwus-pf~724293494?" className='p-3 rounded-full shadow-md'> <SiHouzz size={25}/>  </Link>
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