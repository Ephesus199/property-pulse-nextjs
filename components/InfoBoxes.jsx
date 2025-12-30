import Link from "next/link";
import InfoBox from "./InfoBox";

function InfoBoxes() {
    const Data = [
        {
            title : 'For Renters',
            content:"Find your dream rental property. Bookmark properties and contact owners.",
            bgColor:"bg-gray-100",
            btnContent:"Browse Properties",
            href:'/properties'
        },
        {
            title : 'For Property Owners',
            content:"List your properties and reach potential tenants. Rent as an airbnb or long term.",
            bgColor:"bg-blue-100",
            btnContent:"Add Property",
            href:'/properties/add'
        }
    ]
  return (
    <section>
      <div className="container-xl lg:container m-auto text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Renters</h2>
            <p className="mt-2 mb-4">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <Link
              href="/properties.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Properties
            </Link>
          </div> */}
          {/* <InfoBox title={'For Renters'} content={'Find your dream rental property. Bookmark properties and contact owners.'} buttonTitle={'Browse Properties'} bgColor={'bg-gray-100'}/> */}

          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Property Owners</h2>
            <p className="mt-2 mb-4">
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <Link
              href="/add-property.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Add Property
            </Link>
          </div> */}
          {
            Data.map((data, i)=><InfoBox key={i} title={data.title} href={data.href} content={data.content} btnContent={data.btnContent} bgColor={data.bgColor}/>)
          }
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
