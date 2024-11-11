interface featureProps{
    title:string,
    description:string,
    icons:React.ReactNode
}
export default function FeatureTwo({title,description,icons}:featureProps) {
    return (
        <div className="bg-gray-950 text-white py-10 px-6 md:px-12 flex flex-col md:flex-col items-center text-right justify-between font-montserrat">
        <div className="w-full md:w-2/3">
        <h4 className="text-xl font-bold text-blue-600 tracking-widest uppercase text-right">Features</h4>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <h3 className="text-2xl mb-2">{description}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {icons}
          </div>
        </div>
      </div>
    )
}