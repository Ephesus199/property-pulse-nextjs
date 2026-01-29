import Image from "next/image"

function PropertyHeaderImage({image}) {
  const imageUrl = image.includes('http') ? image : `/images/properties/${image}`;
    
    return (
        <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={imageUrl}
            alt=""
            className="object-cover h-100 w-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
    )
}

export default PropertyHeaderImage
