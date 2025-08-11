import React, { Suspense } from 'react'
import Post from '../../componants/Post'

export default function settingPage() {
  return (
    <div>
      <h1 className="font-bold text-[25px] pl-[30px]">This is <span className='text-blue-500'>Setting</span> page</h1>
        <Suspense fallback={<p className='pl-[30px] text-red-800'>Loading...........!</p>}>
          <div>
          <Post/>
        </div>
        </Suspense>
    </div>
  )
}
