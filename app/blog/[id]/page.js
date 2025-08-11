"use client"
import blogs from '@/app/componants/blogs';
import { useParams } from 'next/navigation'
import React from 'react'

export default function SingleBlog(){
    const {id}= useParams()
    console.log(id);
    const singleBlog =blogs.find((blog)=> blog.id == id)
  return (
    <div className='pl-[40px]'>
        <h1 className='font-medium text-[25px] text-black/60'>This is Single Blog Details</h1>
        <div>
            <p className='text-base text-black/40'>{singleBlog.id}</p>
            <p className='text-base text-black/40'>{singleBlog.title}</p>
            <p className='text-base text-black/40'>{singleBlog.description}</p>
        </div>
    </div>
  )
}
