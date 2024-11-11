import { ReactNode } from "react";
interface featureProps{
    title: string,
    description:string,
    averageRating:string,
    support:string,
    clients:string,
    image:ReactNode
}
export default function FeatureOne({title,description,averageRating,support,clients,image}:featureProps) {
    return (
        <div className="bg-gray-950 text-white py-10 px-6 md:px-12 flex flex-col md:flex-col items-center justify-between font-montserrat">
        <div className="w-full md:w-2/3">
        <h4 className="text-xl font-bold text-blue-600 tracking-widest uppercase text-left">Features</h4>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-sm mb-4">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">{averageRating}</h3>
              <p className="text-white">Average Rating</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">{support}</h3>
              <p className="text-white">Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">{clients}</h3>
              <p className="text-white">Clients</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">{image}</div>
      </div>
    )
}