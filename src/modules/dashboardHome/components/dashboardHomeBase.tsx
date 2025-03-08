import Checklist from '@/components/common/checkList'
import HotTRS from '@/components/common/hotTRS'
import WelcomeCard from '@/components/common/welcomeCard'
import React from 'react'

export default function dashboardHomeBase() {
  return (
    <div className="p-0 ">
      <h1 className="text-2xl  mb-6">Task Checklist</h1>
      <Checklist/>

      <WelcomeCard/>

      <HotTRS/>
      
    </div>
    
  )
}
