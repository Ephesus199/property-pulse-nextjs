import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import BookmarkButton from "@/components/BookmarkButton";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "./loading";
import { convertToSerializableObjects } from "@/utils/convertToObjects";
import PropertyContactForm from "@/components/PropertyContactForm";
async function page({ params }) {
  await connectDB();
  const id = await params.id;
  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializableObjects(propertyDoc);
  

  console.log(property);

  if(!property){
    return <h1 className="text-center text-2xl font-bold mt-10 ">
      Property Not Found
    </h1>
  }
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            {/* <i className="fas fa-arrow-left mr-2"></i> Back to Properties */}
            <p className="flex gap-2 items-center">
              {" "}
              <FaArrowLeft /> <span>Back to Properties</span>
            </p>
          </Link>
        </div>
      </section>
      <section className="bg-blue-50 ">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
          {/* Property Info */}
          <PropertyDetails property={property} />
          <aside className="spay-y-4 text-black">
            <BookmarkButton property={property} />
            <ShareButton property={property} />
            <PropertyContactForm property={property} />
          </aside>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
      <PropertyImages images={property.images} />
      </Suspense>
    </>
  );
}

export default page;
