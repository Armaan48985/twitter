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


const page = () => {

  const [UserData, setUserData] = useState([])

  return (
      <main className='flex'>
        <section className='main-section'>
          <div>
            <Tabs defaultValue="account" className="">
              <TabsList className="grid w-full grid-cols-2 border-b-2 border-slate-900 sticky top-0">
                <TabsTrigger value="account" className="text-md" >For You</TabsTrigger>
                <TabsTrigger value="password" className="text-md">Following</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                asdf
              </TabsContent>
              <TabsContent value="password">
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