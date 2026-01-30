import PropertyCard from "@/components/PropertyCard";
import Property from "@/models/Property"

async function page({searchParams}) {
    const {location, propertyType} = await searchParams;
    const properties = await Property.find({"location.city":location, type:propertyType}).lean(); 
    console.log(properties);  
    return (
        <div>
            {
                properties.length===0?(
                    <h1 className="text-center text-2xl font-bold mt-10 ">
                      No Properties Found
                    </h1>
                ):(
                    <section className='px-4 py-6'>
                        <div className="container lg:container m-auto px-4 py-6">
                            <h1 className="text-2xl mb-4">Search Results</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {properties.map((property)=>(
                                    <PropertyCard key={property._id} property={property} />
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default page
