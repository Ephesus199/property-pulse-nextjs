'use server';

import connectDB from "@/config/database";
import Property from "@/models/Property";
import cloudinary from "@/config/cloudinary";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

export async function deleteProperty(propertyId) {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
        throw new Error("Unauthorized");
    }

    const { userId } = sessionUser;
   const property = await Property.findById(propertyId);

    if (!property) {
        throw new Error("Property not found");
    }

    // verify ownership
    if (property.owner.toString() !== userId) {
        throw new Error("You are not authorized to delete this property");
    }

      // Extract public IDs from image URLs
    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        
        return parts.at(-1).split('.')[0]; 
    })

    // Delete images from Cloudinary
    if(publicIds.length>0){
        for(let publicId of publicIds){
            await cloudinary.uploader.destroy(`PropertyPulseImages/${publicId}`);
        }
    }
    await property.deleteOne();
    revalidatePath('/profile', '/', 'layout');
  

}