import { useState } from 'react'
import zoomin from '/public/icons/zoomin.png'
import zoomout from '/public/icons/zoomout.png'

const OpenFullSize = ({ isOpen, setIsOpen }) => {

  const icon = isOpen ? zoomout : zoomin;

  return (
    <div className='absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
      <img src={icon} className='w-6' />
    </div>
  )
}
export default OpenFullSize