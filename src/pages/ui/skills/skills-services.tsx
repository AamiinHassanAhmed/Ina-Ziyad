
import { Layout, Code, Layers } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"

export const SkillsAndServices = () => {
  return (
    <section id="servicee" className="container mx-auto px-4 py-16 space-y-32 w-[90%] ">
      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="text-blue-500 font-medium">SKILLSET</span>
          <h2 className="text-3xl font-bold leading-tight">Creative and Professional Skills Experience on Few Area</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat fringilla lorem sed bibendum.
            Pellentesque venenatis, ipsum eget ullamcorper gravida in mattis ipsum ligula et tellus.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600">Get Any Project →</Button>
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-500">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-blue-500 font-medium">MY EXPERTISE</span>
          <h2 className="text-3xl font-bold">Awesome Services For You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dumy text of the printing and type setting industry.
                </p>
                <a href="#" className="inline-block text-gray-900 hover:text-blue-500 font-medium">
                  Explore Service
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const skills = [
  { name: "Product Design & Development", percentage: 67 },
  { name: "Web Development", percentage: 89 },
  { name: "Front-End Development", percentage: 55 },
  { name: "UI Design & UX Development", percentage: 67 },
]

const services = [
  {
    title: "Web Design",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Web Development",
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    icon: <Layers className="w-6 h-6 text-blue-500" />,
  },
]

const stats = [
  { value: "68", label: "Happy Clients" },
  { value: "07", label: "Years Experience" },
  { value: "25k+", label: "Hours Worked" },
  { value: "8", label: "Awards Won" },
]

