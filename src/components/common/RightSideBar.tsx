import  { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TfiMouseAlt } from 'react-icons/tfi'
type Props = {}

const RightSideBar = (props: Props) => {
  return (
        <div className="absolute flex flex-col justify-center gap-24 top-0 right-0 w-28 max-h-[1000px] h-full p-2">
            <div className="flex flex-col items-center gap-3">
                <div className='p-3 rounded-full shadow-md'> <BiLogoFacebook size={25}/>  </div>
                <div className='p-3 rounded-full shadow-md'> <PiInstagramLogoLight size={25}/>  </div>
                <div className='p-3 rounded-full shadow-md'> <AiOutlineTwitter size={25}/>  </div>
                <div className='p-3 rounded-full shadow-md'> <BiLogoLinkedin size={25}/>  </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <TfiMouseAlt size={30}/>
                <div className='text-xs'>SCROLL DOWN</div>
            </div>
        </div> 
     )
}

export default RightSideBar