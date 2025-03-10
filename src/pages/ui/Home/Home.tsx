

import { Download } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const Home = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24  w-[100%] ">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto ml-24 ">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-medium">
            Hello Mate <span className="inline-block animate-wave">👋</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            I'm Mohamed Ziyad
            <p>
  <br />A <span className="text-blue-500">Graphic Designer</span> makes beautiful designs.
</p>

          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Hi, I'm Michle a freelance Graphic designer from San-Francisco. I help brands turn their ideas into high quality
            products.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 h-auto">
              Book a Call <span className="ml-1">→</span>
            </Button>
            <Button variant="outline" className="border-gray-300 px-8 py-6 h-auto">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>


{/* ssssss */}


        <div className="w-full md:w-1/2 relative ">
          <div className="relative z-10 ">

            <img  src="/Adobe Express - file.png  "    alt="Michle Smith"
              width={500}
              height={600}
              className=" " />
           
          </div>

          {/* Floating tech icons */}
          <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-md">
            <div className="w-8 h-8 bg-red-50 flex items-center justify-center rounded-md">
              <span className="text-red-500 text-xl">A</span>
            </div>
          </div>

          <div className="absolute top-1/4 left-0 bg-white p-3 rounded-lg shadow-md">
            <div className="w-8 h-8 bg-orange-50 flex items-center justify-center rounded-md">
              <span className="text-orange-500">🔥</span>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-0 bg-white p-3 rounded-lg shadow-md">
            <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
              <span className="text-blue-500">⚛️</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-md">
            <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                  <path d="M2 20h20" />
                  <path d="M14 12v.01" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// import { Download } from "lucide-react"
// import { Button } from "../../../components/ui/button"

// export const Home = () => {
//   return (
//     <section className="container mx-auto px-4 py-12 md:py-24 w-full">
//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto">
//         <div className="w-full md:w-1/2 space-y-4 md:space-y-6 px-4 md:px-0">
//           <h2 className="text-2xl font-medium">
//             Hello Mate <span className="inline-block animate-wave">👋</span>
//           </h2>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
//             I'm Mohamed Ziyad
//             <p className="mt-2">
//               A <span className="text-blue-500">Graphic Designer</span> makes beautiful designs.
//             </p>
//           </h1>
//           <p className="text-gray-600 text-base md:text-lg max-w-lg">
//             Hi, I'm Michle a freelance Graphic designer from San-Francisco. I help brands turn their ideas into high
//             quality products.
//           </p>
//           <div className="flex flex-wrap gap-4 pt-4">
//             <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-5 sm:py-6 h-auto">
//               Book a Call <span className="ml-1">→</span>
//             </Button>
//             <Button variant="outline" className="border-gray-300 px-6 sm:px-8 py-5 sm:py-6 h-auto">
//               Download CV <Download className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
//           <div className="relative z-10 flex justify-center md:justify-start">
//             <img src="/Adobe Express - file.png" alt="Mohamed Ziyad" className="max-w-full h-auto" />
//           </div>

//           {/* Floating tech icons - responsive positioning */}
//           <div className="absolute top-[5%] right-[5%] sm:top-10 sm:right-10 bg-white p-2 sm:p-3 rounded-lg shadow-md">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-50 flex items-center justify-center rounded-md">
//               <span className="text-red-500 text-base sm:text-xl">A</span>
//             </div>
//           </div>

//           <div className="absolute top-1/4 left-[5%] sm:left-0 bg-white p-2 sm:p-3 rounded-lg shadow-md">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-50 flex items-center justify-center rounded-md">
//               <span className="text-orange-500">🔥</span>
//             </div>
//           </div>

//           <div className="absolute bottom-1/3 right-[5%] sm:right-0 bg-white p-2 sm:p-3 rounded-lg shadow-md">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-50 flex items-center justify-center rounded-md">
//               <span className="text-blue-500">⚛️</span>
//             </div>
//           </div>

//           <div className="absolute bottom-[10%] left-[10%] sm:bottom-10 sm:left-10 bg-white p-2 sm:p-3 rounded-lg shadow-md">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-50 flex items-center justify-center rounded-md">
//               <span className="text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
//                   <path d="M2 20h20" />
//                   <path d="M14 12v.01" />
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

