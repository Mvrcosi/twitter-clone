import { RefreshIcon } from '@heroicons/react/solid'
import React from 'react'
import Tweetbox from './Tweetbox'

const Feed = () => {
    return (
        <div className='col-span-7 border-x lg:col-span-5'>
            <div className='flex items-center justify-between'>
                <h1 className='p5 pb-0 text-xl font-bold'>Home</h1>
                <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter mr-5 mt-6 transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>
            <div>
                <Tweetbox />
            </div>
        </div>
    )
}

export default Feed