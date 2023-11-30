import React from 'react';

import { Button, Image } from '@nextui-org/react';

import Link from 'next/link';


export const Navigation = ({userIsLoggedIn}) => {

  if (!userIsLoggedIn) {

    return (
        <nav className='border border-b border-black'>
            <div className='flex justify-between items-center py-4'>
            <div className='ml-10'>
                <p>Codeclan Project</p>
            </div>
            <div className='mr-5 space-x-5'>
                <Button color="primary" size="sm"><Link href="/login">Login</Link></Button>
                <Button color="primary" size="sm"><Link href="/register">Register</Link></Button>
            </div>
            </div>
            </nav>
    )
    
  }

  return (
    <nav className='border border-b border-black'>
        <div className='flex justify-between items-center py-4'>
        <div className='ml-10'>
            <p>Codeclan Project</p>
        </div>


        <div className='grid grid-cols-3 mr-5 space-x-5 text-white'>
          <div className='bg-blue-500 rounded-lg flex col-span-2 justify-center items-center space-x-5'>
            <p>Nama</p>
            <Image width={40} src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'></Image>
          </div>

          <div>
            <Button href='/' color='primary'>Logout</Button>
          </div>

        </div>
        </div>
        </nav>
)

}
