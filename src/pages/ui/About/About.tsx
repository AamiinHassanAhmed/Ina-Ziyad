import { Download, Facebook, Twitter, Github, Dribbble } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const About = () => {
  return (
    <section id="About" className="container mx-auto px-4 py-16 space-y-20  w-[90%]">
      {/* Partners Section */}
      <div className="text-center space-y-10">
        <h3 className="text-lg font-medium">
          PROUD MARKETING <span className="text-blue-500">PARTNERS</span> WITH
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <img key={index}
              src={`/placeholder.svg?height=40&width=120`}
              alt={partner}
              width={120}
              height={40}
              className="opacity-50 hover:opacity-75 transition-opacity"/>
           
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-blue-50 rounded-full w-[500px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <img
            src="/Adobe Express - file.png "
            alt="Profile"
            width={500}
            height={600}
            className="relative z-10"
          />
        </div>

        <div className="space-y-6">
          <span className="text-blue-500 font-medium">ABOUT ME</span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">More Than 5+ Years Programming Experienced</h2>

          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">Michle Jhon Doe</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">example@gmail.com</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Office:</span>
                <span className="font-medium">Kollanpur, Shamoli, Dhaka</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
            <span className="text-gray-400">Follow me</span>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Dribbble className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const partners = ["Google", "Amazon", "Airbnb", "Spotify", "InTrax", "Noxis"]

