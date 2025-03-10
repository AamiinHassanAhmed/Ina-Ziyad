import { Button } from "../../../components/ui/button"


const blogPosts = [
  {
    image: "/placeholder.svg?height=200&width=300",
    date: "08 Feb, 23",
    title: "Determining Marketing Budget Can be Frustrating",
    author: {
      name: "David Miller",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    readTime: "5m",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    date: "08 Feb, 23",
    title: "How to Win The Attention of New Clients: Tips & Tricks",
    author: {
      name: "Sarah Jones",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    readTime: "4m",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    date: "08 Feb, 23",
    title: "Business Agencies vs Advertising Agencies",
    author: {
      name: "Tom Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    readTime: "3m",
  },
]

export const BlogSection = () => {
  return (
    <section id="BlogSection" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-blue-500 font-medium">WHATS NEW</span>
            <h2 className="text-2xl font-bold mt-2">Our Latest Blogs</h2>
          </div>
          <Button variant="outline">View All Blog →</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="font-bold hover:text-blue-500 transition-colors">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

