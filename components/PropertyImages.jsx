import Image from "next/image"

function PropertyImages({ images }) {
    return (
        <section className="bg-blue-50 p-4">
            <div className="container mx-auto">
                {
                    images.length===1?(
                        <div className="relative h-100 w-100">
                            <Image fill className="object-cover  rounded-xl" src={`${images.include("htpp")?images[0]:`images/properties/${images[0]}`}`} alt={`Property Image ${index + 1}`}/>
                        </div>
                    ):(
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                        images.map((image,index)=>(
                            <div className={` ${images.length===3&&index===2?"col-span-2":"col-span-1"}`} key={index}>
                                <Image priority={true} width={1800} height={400}  className="object-cover rounded-xl w-full h-100"  src={`${image.includes("http")?image:`/images/properties/${image}`}`} alt={`Property Image ${index + 1}`} />
                            </div>
                        ))}
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default PropertyImages
