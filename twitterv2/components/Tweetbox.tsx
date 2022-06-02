import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React, {useState}from 'react'

const Tweetbox = () => {

    const [input, setInput] = useState<string>('')



    return (
        <div className='flex space-x-2 p-5'>
            <img className='h-14 w-14 rounded-full object-cover mt-4' src='https://lh3.googleusercontent.com/ogw/ADea4I4vZROQQuUrnn5dxuezQLvxSL5ICurK981llfzMsg=s64-c-mo' />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input onChange={(e) => setInput(e.target.value)} value={input} className='h-24 w-full outline-none text-xl ' placeholder="What's happening?"/>
                <div className='flex items-center '>
                    <div className='flex space-x-2 text-twitter flex-1 '>
                        {/* ICONS */}
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <CalendarIcon  className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <LocationMarkerIcon  className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>

                    </div>
                    <button disabled={!input} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                </div>
            </form>
        </div>
        
        </div>
    )
}

export default Tweetbox