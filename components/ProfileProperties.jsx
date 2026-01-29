'use client'
import { deleteProperty } from "@/app/action/deleteProperty";
import Image from "next/image"
import Link from "next/link"
import {toast} from 'react-toastify'
import { useState } from "react"

function ProfileProperties({propertiesOwnedbyUser}) {
  const [properties, setProperties] = useState(propertiesOwnedbyUser);
  async function handleDeleteProperty(propertyId){
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if(!confirmDelete) return;
    await deleteProperty(propertyId)

    const updatedProperties = properties.filter((property)=>property._id!==propertyId);
    setProperties(updatedProperties);

    toast.success('Property Deleted Successfuly');


  }
    return (
        <div>
            {
                properties?.map((property)=>(
                  <div className="mb-10" key={property._id}>
                <Link href={`/properties/${property._id}`}>
                  <Image 
                  width={1000}
                  height={200}
                    className="h-32 w-full rounded-md object-cover"
                    src={property.images[0].includes('http') ? property.images[0] : `/images/properties/${property.images[0]}`  }
                    alt="Property 2"
                  />
                </Link>
                <div className="mt-2">
                  <p className="text-lg font-semibold text-black">{property.name}</p>
                  <p className="text-black">Address: {property.location.street} {property.location.city} {property.location.state} {property.location.zipcode?property.location.zipcode:"0000"}</p>
                </div>
                <div className="mt-2">
                  <Link
                    href={`/properties/${property._id}/edit`}
                    className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                    type="button"
                    onClick={()=>handleDeleteProperty(property._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
                ))
              }
        </div>
    )
}

export default ProfileProperties
