import './App.css'
import Navbar from './component/navbar'
import { Routes, Route } from 'react-router-dom'
import Four04 from './page/404'
import Home from './page/Home'
import About from './page/About'
import Project from './page/Project'
import Contact from './page/Contact'
import Connects from './component/connects'
import Login from './page/Login/signIn'
import Signup from './page/Login/signUp'
import Profile from './page/profile'
import ProfileInfo from './component/profile_info'
import Collab from './page/collab'
import book from './svg/book.svg?url'
import Chats from './component/chat'
import { Accordion, IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { AiOutlineNotification } from 'react-icons/ai'
import Notifications from './component/notifications'
import { useMediaQuery } from 'react-responsive'
import MobileFabric from './component/fabric/mobile'
import Friends from './component/connects/friend'

function App() {
  return (
    <section className="App bg-white text-dark h-screen overflow-y-auto">
      <Routes>
        <Route path='/*' element={
          <Index />
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/login/signup' element={<Signup />} />
      </Routes>
    </section>
  )
}

export default App

function Index() {
  const isMobile = useMediaQuery({ maxWidth: 720 })
  return (
    <section className='grid grid-rows-[repeat(12, minmax(0, 1fr))]'>
      <Navbar className='flex flex-row py-3 px-5 shadow-md row-span-1' />
      <section className='grid grid-cols-12 mt-4 row-span-[span 11 / span 11] overflow-auto'>
        <aside className='hidden md:block col-span-3 p-2 sticky top-0 '>
          <Routes>
            <Route path="/profile/:id" element={<ProfileInfo />} />
            <Route exact path="/*" element={<Connects />} />
          </Routes>
        </aside>
        <section className='col-span-12 md:col-span-6 p-2 overflow-y-auto '>
          <Routes>
            {/* <Route path="/fabric" element={<Fabric />} /> */}
            <Route path="/collab" element={<Collab />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/friends" element={<Friends />} />
            {/* mobile routes only  */}
            {isMobile && <>
              <Route path="/fabric" element={<MobileFabric />} />
              <Route path="/messages" element={<Chats />} />
            </>}

            <Route exact path="/" element={<Home />} />
            <Route path='*' element={<Four04 />} />

          </Routes>
        </section>
        <aside className='hidden md:block col-span-3 p-2 relative'>
          <Routes>
            <Route path="/profile/:id" element={<Connects />} />
            <Route path="/" element={<SwitchMessage_Notification />} />
            {/* <Route exact path="/*" element={<Connects />} /> */}
          </Routes>
        </aside>
      </section>
    </section>
  )
}


function SwitchMessage_Notification() {
  return <Tabs value='messages'>
    <TabsHeader>
      <Tab value='messages'>
        <IconButton>
          <img src={book} />
        </IconButton>
      </Tab>
      <Tab value='notificatio'>
        <IconButton>
          <AiOutlineNotification />
        </IconButton>
      </Tab>
    </TabsHeader>
    <TabsBody >
      <TabPanel value='messages'>
        <Chats />
      </TabPanel>
      <TabPanel value='notification'>
        <Notifications />
      </TabPanel>
    </TabsBody>
  </Tabs>

}
