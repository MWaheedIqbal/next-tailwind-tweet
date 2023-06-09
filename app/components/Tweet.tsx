import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {GoKebabHorizontal} from "react-icons/go"
import {FaRegComment} from "react-icons/fa"
import {FaRetweet} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {BsUpload} from "react-icons/bs"
import {FiBarChart2} from "react-icons/fi"

const Tweet = () => {
  return (
    // This is the main container you can see with the border
    // It contains 2 child elements, the profile image abd another div that will contain everything else
    // This is a flexbox so the image and content are kept inline 
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex ">
      {/* This is the profile image */}
      <img className="h-12 w-12 rounded-full mr-3"
      src="/images/Picture-Waheed.jpg" alt="Waheed-Profile" />
      {/* This is the div that will contain all the remaining content
        1. 1 flexbox that will contain the first line of the tweet that shows the Name, handle, date and options menu
        2. 1 div that contains the tweet text
        3. 1 flexbox that contains all the action buttons
      */}
    
    <div className="w-full">
      {/* This is the flexbox with the name, handle, date and kebab menu*/}
      <div className="flex" >
      {/* This is the flexbox with the name, handle and date */}
      <div className="flex">
        <div>
      <Link href={"https://twitter.com/WaheedConnects"}>
      <strong className="text-gray-800 mr-1">M. Waheed Iqbal</strong>
      <span className="text-gray-500 mr-1">@WaheedConnects</span>
      </Link>
      <span className="text-gray-500 mr-1">&middot;</span>
      <span className="text-gray-500 mr-1">Mar 18</span>
        </div>
      </div>
      {/* This is the kebab menu */}
      <div  className="ml-auto">
        <GoKebabHorizontal />
        </div>
      </div>
      {/* This is the tweet that contains the tweet text */}
      <div>
        You are amazing if you take time to comment on a tweet or YouTube video or a blogpost that has helped you! 
      </div>

      {/* This is the flexbox that contains all the action buttons it will contain: 
        1. div forreplies
        2. div for retweets
        3. div for likes
        4. div for share
        5. div for stats
      */}
      <div className="mt-2 flex justify-between"> 
        <div className="flex items-center">
          <FaRegComment className="mr-2 text-gray-600"/>
          <span className="text-gray-600">20</span>
        </div>
        <div className="flex items-center">
          <FaRetweet className="mr-2 text-gray-600"/>
          <span className="text-gray-600">17</span>
        </div>
        <div className="flex items-center">
          <AiOutlineHeart className="mr-2 text-gray-600"/>
          <span className="text-gray-600">215</span>
        </div>
        <div className="flex items-center">
          <BsUpload className="mr-2 text-gray-600"/>
        </div>
        <div className="flex items-center">
          <FiBarChart2 className="mr-2 text-gray-600"/>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Tweet
