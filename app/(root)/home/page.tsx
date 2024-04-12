'use client'
import React, { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { FaXTwitter } from 'react-icons/fa6'
import RightSidebar from '@/components/RightSidebar'
import { IoLocationOutline, IoSettingsOutline } from 'react-icons/io5'
import Postmaker from '@/components/Postmaker'
import { RiEarthFill, RiGalleryLine } from 'react-icons/ri'
import PostButton from '@/components/buttons/PostButton'
import { MdOutlineGifBox } from 'react-icons/md'
import { TfiList } from 'react-icons/tfi'
import { PiSmileyLight } from 'react-icons/pi'
import { LuCalendarClock } from 'react-icons/lu'


const page = () => {

  const [UserData, setUserData] = useState([])

  return (
      <main className='flex'>
        <section className='main-section'>
          <div>
            <Tabs defaultValue="account" className="w-auto h-[1000px] relative">
              <TabsList className="grid w-full grid-cols-2 border-b-2 border-slate-900 luffy pt-0 pb-16">
                <TabsTrigger value="account" className="text-md py-5 hover:bg-[#191919] rounded-none mr-10" >For You</TabsTrigger>
                <TabsTrigger value="password" className="text-md mr-16` py-5 hover:bg-[#191919] rounded-none">Following</TabsTrigger>
                <span className='absolute right-5 text-xl hover:bg-gray-900 p-2 rounded-full'><IoSettingsOutline /></span>
              </TabsList>

              <TabsContent value="account">
                <div className='w-full h-auto border-b-[1px] border-[#3A4249] p-4 flex'>
                  <div className='w-[50px] h-full'>
                    <span className='bg-gray-700 text-[10px] p-3 rounded-full'>img</span>
                  </div>
                  <div className='flex items-start flex-col gap-2'>
                      <Input placeholder='What is happening?!' className='bg-transparent border-none text-gray-400 text-lg'/>
                      <span className='text-[#1D9BF0] flex items-center gap-2 py-2'> <RiEarthFill />Everyone can reply</span>

                      <span className='block w-[450px] h-[1px] bg-[#32393e]'></span>

                      <div className='w-full flex-between'>                   
                              <ul className='flex gap-3 text-xl text-primary-blue'>
                                <li className='cursor-pointer'><RiGalleryLine /></li>
                                <li className='cursor-pointer'><MdOutlineGifBox /></li>
                                <li className='cursor-pointer'><TfiList /></li>
                                <li className='cursor-pointer'><PiSmileyLight /></li>
                                <li className='cursor-pointer'><LuCalendarClock /></li>
                                <li className='cursor-pointer'><IoLocationOutline /></li>
                              </ul>                

                          <PostButton name="Post"/>
                      </div>
                  </div> 
                </div>
                asdf

              </TabsContent>
              <TabsContent value="password">
                <div className='w-full h-20 border-b-[1px] border-[#3A4249]'>
                  <div>
                    <span>img</span>
                    <Input placeholder='What is happening?!' value='text' className='bg-transparent'/>
                  </div>
                </div>
                hfgd  
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <RightSidebar options={UserData}/>
      </main>
  )
}

export default page