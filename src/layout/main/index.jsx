import  {  useState } from 'react'
import {  Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Header from './header'

const MainLayout = () => {
  const [isSidebar, setIsSidebar] = useState(false)
  
  return (
    <section className='flex bg-primary'>
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar}/>
      <div className='w-full h-dvh flex flex-col overflow-hidden'>
        <Header setIsSidebar={setIsSidebar}/>
        <Outlet />
      </div>
    </section>
  )
}

export default MainLayout
