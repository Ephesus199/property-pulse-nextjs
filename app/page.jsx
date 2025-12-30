import Hero from "@/components/Hero"
import HomeProperties from "@/components/HomeProperties"
import InfoBoxes from "@/components/InfoBoxes"
//import connectDB from "@/config/database"

  async function page() {
   

  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  )
}

export default page
