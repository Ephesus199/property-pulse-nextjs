'use server';
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import cloudinary from "@/config/cloudinary";
import { redirect } from "next/navigation";
export default async function updateProperty(propertyId, formData) {
 await connectDB();
 const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
        throw new Error("Unauthorized");
    }
    const { userId } = sessionUser;

    const existingProperty = await Property.findById(propertyId);

    if (!existingProperty) {
        throw new Error("Property not found");
    }

    // verify ownership
    if (existingProperty.owner.toString() !== userId) {
        throw new Error("You are not authorized to update this property");
    }

    const amenities = formData.getAll('amenities');
 
    const propertyData = {
        owner: userId,
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        location:{
            street:formData.get("location.street"),
            city:formData.get("location.city"),
            state:formData.get("location.state"),
            zipCode:formData.get("location.zipcode"),
        },
        beds:formData.get('beds'),
        baths:formData.get('baths'),
        square_feet:formData.get('square_feet'),
        amenities,
        rates:{
            nightly:formData.get('rates.nightly'),
            weekly:formData.get('rates.weekly'),
            monthly:formData.get('rates.monthly'),
        },
       seller_info:{
        name:formData.get('seller_info.name'),
        email:formData.get('seller_info.email'),
        phone:formData.get('seller_info.phone'),
       },
      
    };

    const updateProperty = await Property.findByIdAndUpdate(propertyId, propertyData, { new: true });

    revalidatePath('/profile', '/', 'layout');
    redirect(`/properties/${updateProperty._id}`);
}