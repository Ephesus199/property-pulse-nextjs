'use client';
import bookmarkProperty from "@/app/action/bookmarkProperty";
import checkBookmarkStatus from "@/app/action/checkBookmarkStaus";
import {toast} from "react-toastify";  
import { FaBookmark } from "react-icons/fa"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function BookmarkButton({property}) {
    const {data:session} = useSession();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [loading, setLoading] = useState(true);
    const userId = session?.user?.id;

    async function handleClick(){
        if(!userId){
            toast.error("Please login to bookmark properties");
            return;
        }
        bookmarkProperty(property._id).then((res)=>{
            if(res.error) return toast.error(res.error);
            setIsBookmarked(res.isBookmarked);
            toast.success(res.message);
        })
    }

    useEffect(()=>{
        if(!userId) {
            setLoading(false);
            return;
        }

        checkBookmarkStatus(property._id).then((res)=>{
            if(res.error) toast.error(res.error);
            if(res.isBookmarked) setIsBookmarked(res.isBookmarked);
            setLoading(false);
        });

    },[property._id,userId, checkBookmarkStatus]);

    if(loading){
        return <p>Loading...</p>
    }
    return isBookmarked? (
        
          <button
          onClick={handleClick}
              className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <FaBookmark className="mr-2" /> Remove Bookmark
            </button> 
        
    ):(
        <button
          onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <FaBookmark className="mr-2" /> Bookmark Property
            </button>
    )
}

export default BookmarkButton
