import Image from 'next/image'
import Link from 'next/link'
import {FaBed, FaBath,FaRulerCombined, FaMoneyBill, FaMapMarker} from 'react-icons/fa'
function PropertyCard({property}) {

  function getRateDisplay(){
    const rates = property?.rates || {};
    if(rates.monthly){
      return `$${Number(rates.monthly).toLocaleString()}/mo`
    }else if(rates.weekly){
      return `$${Number(rates.weekly).toLocaleString()}/wk`
    }else if(rates.nightly){
      return `$${Number(rates.nightly).toLocaleString()}/night`
    }
    return ""

  }
  console.log(property.images[0]);
  const imageURL = property?.images[0].includes('http') ? property.images[0] : '/images/properties/' + property.images[0];
 

  return (
    <div className="rounded-xl shadow-sm shadow-white relative">
      <Link href={`properties/${property._id}`} >
      <Image
        src={imageURL}
        alt={property?.name || 'property image'}
        className="w-full h-auto rounded-t-xl"
        width={400}
        height={250}
        sizes='100vw'
      />
      </Link>
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{property?.type}</div>
                <h3 className="text-xl font-bold">{property?.name}</h3>
              </div>
              <h3
                className="absolute top-2.5 right-2.5 bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
               {getRateDisplay()}
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p className='flex gap-1 items-center'>
                  <FaBed className="md:hidden lg:inline" /> {property?.beds ?? 0} {" "}
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p className='flex gap-1 items-bottom'>
                  <FaBath className="md:hidden lg:inline" /> {property?.baths ?? 0} {" "}
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <FaRulerCombined className="md:hidden lg:inline" />
                  {property?.square_feet ?? 0} <span className=" lg:inline">sqft</span>
                </p>
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><FaMoneyBill className='md:hidden lg:inline' /> Weekly</p>
                <p><FaMoneyBill className='md:hidden lg:inline' /> Monthly</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                 <FaMapMarker className='text-orange-700 mt-1 ' />
                  <span className="text-orange-700"> {property?.location?.city || ''} {property?.location?.street || ''} </span>
                </div>
                <Link
                  href={`/properties/${property?._id?.toString?.() || ''}`}
                  className="h-9 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
    )
}

export default PropertyCard
