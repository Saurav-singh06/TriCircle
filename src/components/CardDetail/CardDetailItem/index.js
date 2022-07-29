import React from 'react'
import { Button } from '@mui/material'

export default function Index({Heading,detail,imgUrl}) {
  return (
    <>
    <div className='stroke-temp bg-temp2 rounded-lg mx-4 my-7 w-3/5 '>
        <div>
            <img src={imgUrl} alt="image" />
        </div>
        <div className='font-light text-xs px-2'>Complex geometric shapes</div>
        <div className='font-semibold text-base p-3'>{Heading}</div>
        <div className='  px-3 py-1'>{detail}</div>
        <div className='pt-6 mx-3 flex justify-between items-center'> 
        <Button className='!bg-black  !text-base  !text-white !px-6  !py-2 ' variant="outlined"  >Submit</Button>
        <a className='!text-base font-semibold px-4 py-4' href="/">Link</a>
        </div>
    </div>
    </>
  )
}




