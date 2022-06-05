import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
import { StarIcon, HomeIcon, HashtagIcon, BellIcon, MailIcon, CollectionIcon, BookmarkAltIcon, DotsCircleHorizontalIcon, UserIcon } from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'




const Sidebar = () => {
    const { data:session} = useSession()


    return (
        <div className='flex flex-col col-span-2 items-center md:items-start'>
            <div className='relative h-10 w-10 flex-shrink-0 cursor-pointer'>
                <Image objectFit='contain' layout='fill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" />
            </div>
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkAltIcon} title="Bookmarks" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />

            <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session? "Sign Out" : "Sign In"}/>
            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div >
    )
}

export default Sidebar