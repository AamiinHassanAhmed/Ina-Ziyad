import React from 'react'
import { Button } from '../../../components/ui/button'
import { DownloadIcon } from 'lucide-react'

export const Hero = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-dvh'>
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum itaque delectus modi, omnis animi sit?</p>

<Button className='color-blue-800'>Book a call</Button>
<Button>Download    CV  <DownloadIcon></DownloadIcon></Button>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}
