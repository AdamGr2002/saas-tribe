interface featureProps {
  title: string,
  description: string,
  icons: React.ReactNode
}

export default function FeatureTwo({title, description, icons}: featureProps) {
  return (
      <div className="bg-gray-950 py-16 md:py-24 font-montserrat">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              
              <div className="text-right mb-12">
                  <h4 className="text-sm font-bold text-blue-600 tracking-widest uppercase">Features</h4>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 bg-blue-500">{title}</h2>
                  <p className="text-lg text-gray-400 max-w-2xl ml-auto">{description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                  {icons}
              </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
      </div>
  )
}