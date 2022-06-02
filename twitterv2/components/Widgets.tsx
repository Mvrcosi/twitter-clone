import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='px-2 mt-2 col-span-2 hidden lg:inline '>
            <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 '>
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input className='outline-none flex-1 bg-transparent' type='text' placeholder='Search Twitterv2' />
            </div>
            {/* <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 400 }}
            /> */}

        </div>
    )
}
export default Widgets