import { ReactNode } from "react";
interface featureProps{
    title: string,
    description:string,
    averageRating:string,
    support:string,
    clients:string,
    image:ReactNode
}
export default function FeatureOne({title, description, averageRating, support, clients, image}: featureProps) {
  return (
      <div className="bg-gray-950 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 font-montserrat">
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-4">
                      <h4 className="text-sm font-bold text-blue-600 tracking-widest uppercase">Features</h4>
                      <h2 className="text-4xl font-bold text-white leading-tight">{title}</h2>
                      <p className="text-gray-400 text-lg">{description}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8">
                      <div>
                          <h3 className="text-3xl font-bold text-blue-600 mb-1">{averageRating}</h3>
                          <p className="text-gray-400 text-sm">Average Rating</p>
                      </div>
                      <div>
                          <h3 className="text-3xl font-bold text-blue-600 mb-1">{support}</h3>
                          <p className="text-gray-400 text-sm">Support</p>
                      </div>
                      <div>
                          <h3 className="text-3xl font-bold text-blue-600 mb-1">{clients}</h3>
                          <p className="text-gray-400 text-sm">Clients</p>
                      </div>
                  </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                  {image}
              </div>
          </div>
      </div>
  )
}