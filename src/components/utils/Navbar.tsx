import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <div className='mt-10'>
            <div className='flex  justify-around'>
                <div>LOGO</div>
                <div>
                    <ul className='flex gap-7  font-bold text-gray-700 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Blog</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
