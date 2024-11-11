

import { LucideIcon } from "lucide-react";

interface featureProps{
    title:string,
    description:string,
    iconOne:LucideIcon,
    questionOne:string,
    iconTwo:LucideIcon,
    questionTwo:string,
}
export default function FeatureThree({title,description,iconOne:IconOne,iconTwo:IconTwo,questionOne,questionTwo}:featureProps) {
    return (
        <div className="bg-gray-950 text-white py-10 px-6 md:px-12 flex flex-col md:flex-col items-center justify-between font-montserrat">
        <div className="w-full md:w-2/3">
        <h4 className="text-xl font-bold text-blue-600 tracking-widest uppercase text-left">Features</h4>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <h3 className="text-2xl mb-2">{description}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <IconOne size={64} className="text-blue-600"/>
              <h3 className="text-2xl font-bold text-white">{questionOne}</h3>
              <p className="text-white">Your knowledge base software has an auto-generated sitemap and configurable SEO options for each article.</p>
            </div>
            <div>
              <IconTwo size={64} className="text-blue-600"/>
              <h3 className="text-2xl font-bold text-white">{questionTwo}</h3>
              <p className="text-white">Customers won&apos;t even have to leave your website to find the right answer and keep moving forward</p>
            </div>
          </div>
        </div>
      </div>
    )
}