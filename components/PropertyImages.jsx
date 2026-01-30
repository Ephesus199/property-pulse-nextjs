'use client'
import Image from "next/image";
import { Gallery, Item } from 'react-photoswipe-gallery'

function PropertyImages({ images }) {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <div className="relative h-100 w-100">
              <Item
                original={`${images.include("htpp") ? images[0] : `images/properties/${images[0]}`}`}
                thumbnail={`${images.include("htpp") ? images[0] : `images/properties/${images[0]}`}`}
                width="1000"
                height="600"
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    fill
                    className="object-cover rounded-xl cursor-pointer "
                    src={`${images.include("htpp") ? images[0] : `images/properties/${images[0]}`}`}
                    alt={`Property Image ${index + 1}`}
                  />
                )}
              </Item>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  className={` ${images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"}`}
                  key={index}
                >
                  <Item
                    original={`${image.includes("http") ? image : `/images/properties/${image}`}`}
                    thumbnail={`${image.includes("http") ? image : `/images/properties/${image}`}`}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        priority={true}
                        width={1800}
                        height={400}
                        className="object-cover rounded-xl w-full h-100 cursor-pointer"
                        src={`${image.includes("http") ? image : `/images/properties/${image}`}`}
                        alt={`Property Image ${index + 1}`}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
}

export default PropertyImages;
