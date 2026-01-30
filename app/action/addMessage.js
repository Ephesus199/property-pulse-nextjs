'use server';
import connectDB from "@/config/database";

import { getSessionUser } from "@/utils/getSessionUser";

import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";
import Message from "@/models/Message";
export async function addMessage(previousState,formData) {
    console.log( "formdata"+ formData);
    

    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser||!sessionUser.userId  ) {
        throw new Error("Unauthorized");
    }
    const {userId}=sessionUser;
    const recipient = formData.get("recipient"); 
    console.log("Recipient ID:", recipient);
   if (userId === recipient) {
     return { error: "You cannot send message to yourself" };
   }

   const newMessage = new Message({
     sender: userId,
     recipient: recipient,
     property: formData.get("property"),
     name: formData.get("name"),
     email: formData.get("email"),
     phone: formData.get("phone"),
     body: formData.get("body"),
   });

   await newMessage.save();
   return ({submitted:true});
        
    
}