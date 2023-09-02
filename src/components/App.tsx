import NavSideBar from '@/components/common/NavSideBar'
import RightSideBar from '@/components/common/RightSideBar'
import { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const App = ({children}: Props) => {
  return (
    <>            
        <NavSideBar/>
        <div className='ml-44 mr-28 px-5 h-[100vh] overflow-y-auto no-scrollbar'>{children}</div>
        <RightSideBar/>
    </>
  )
}

export default App