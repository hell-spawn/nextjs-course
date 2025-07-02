"use client"
import { useState } from 'react'

interface Props {
  value?: number;
}


export const CartCounter = ({ value = 0 }: Props) => {

  const [counter, setCounter] = useState(value)

  return (
    <>
      <span>Producto en el carrito</span>
      <span className='text-9xl'>{counter}</span>
      <div className='flex'>
        <button className='flex items-center justify-center p-2 rounded-xl text-white bg-gray-900 hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => (setCounter(counter + 1))}
        >
          +1
        </button>
        <button className='flex items-center justify-center p-2 rounded-xl text-white bg-gray-900 hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => (setCounter(counter - 1))}
        >
          -1
        </button>
      </div>
    </>
  )
}

