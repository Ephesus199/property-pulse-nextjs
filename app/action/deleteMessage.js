'use server';

import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

export async function deleteMessage(messageId) {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
        throw new Error("Unauthorized");
    }

    const { userId } = sessionUser;
   const message = await Message.findById(messageId);

    if (!message) {
        throw new Error("Message not found");
    }

    // verify ownership
    if (message.recipient.toString() !== userId) {
        throw new Error("You are not authorized to delete this property");
    }

   
    await message.deleteOne();
    revalidatePath('/message', '/', 'layout');
  

}