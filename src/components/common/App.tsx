"use client"
import NavSideBar from '@/components/common/NavSideBar'
import RightSideBar from '@/components/common/RightSideBar'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setScrollHeight, setScrollToBottom, setScrollToTop, setScrollTop } from '@/store/scrollable'
import { ReactNode, useEffect, useRef } from 'react'

type Props = {
    children:ReactNode
}

const App = ({children}: Props) => {
  const dispatch = useAppDispatch()
  const { scrollToTop, scrollToBottom } = useAppSelector(state => state.scroll)
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(container.current){
      if(scrollToTop){
        container.current.scrollTop = 0
        dispatch(setScrollToTop(false))
      }else if(scrollToBottom){
        container.current.scrollTop = container.current.scrollHeight - container.current.clientHeight
        dispatch(setScrollToBottom(false))
      }
    }
  }, [scrollToTop, scrollToBottom])
  useEffect(() => {
   const handleScroll = () => {
    if (container.current){
      dispatch(setScrollTop(container.current.scrollTop))
    }
   } 
   container.current?.addEventListener('scroll', handleScroll)

   return () =>{
     container.current?.removeEventListener('scroll', handleScroll)
   }
  })
  useEffect(()=>{
    if(container.current){
      dispatch(setScrollHeight(container.current.scrollHeight))
    }
  },[])
  return (
    <>            
        <NavSideBar/>
        <div ref={container} className='md:ml-44 md:mr-28 pt-12 lg:px-5 h-[100vh] overflow-y-auto scroll-smooth no-scrollbar'>{children}</div>
        <RightSideBar/>
    </>
  )
}

export default App