import React from 'react'
import blogs from '../componants/blogs'
import Link from 'next/link'

export default function blogPage() {
  return (
    <div>
    <h1 className="font-bold text-[28px] pl-[40px]">This is <span className='text-blue-800'>Blog</span> page</h1>
    <div className='pl-[40px]'>
      {
        blogs.map((blog)=>(
          <Link href={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
          </Link>
        ))
      }
    </div>
    </div>
  )
}
