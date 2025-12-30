import Link from "next/link"

function InfoBox({content, btnContent, href, bgColor, title}) {
    console.log(bgColor)
    return (
         <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">
              {content}
            </p>
            <Link
              href={href}
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              {btnContent} 
            </Link>
          </div>
    )
}

export default InfoBox
