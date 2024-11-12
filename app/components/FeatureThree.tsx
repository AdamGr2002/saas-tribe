type featureProps = {
  title: string;
  description: string;
  iconOne: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconTwo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  questionOne: string;
  questionTwo: string;
};

export default function FeatureThree({
  title,
  description,
  iconOne: IconOne,
  iconTwo: IconTwo,
  questionOne,
  questionTwo
}: featureProps) {
  return (
      <div className="bg-gray-950 py-24">
          <div className="max-w-7xl mx-auto px-8">
              {/* Header Section */}
              <div className="max-w-3xl mb-16">
                  <h4 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Features</h4>
                  <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-row-1 md:grid-row-2 gap-12 mx-auto">
                  {/* Feature 1 */}
                  <div className="group hover:bg-gray-900/50 p-8 rounded-lg transition-all duration-300">
                      <div className="mb-6">
                          <IconOne className="w-12 h-12 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{questionOne}</h3>
                      <p className="text-gray-400 leading-relaxed">
                          Your knowledge base software has an auto-generated sitemap and configurable SEO options for each article.
                      </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="group hover:bg-gray-900/50 p-8 rounded-lg transition-all duration-300">
                      <div className="mb-6">
                          <IconTwo className="w-12 h-12 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{questionTwo}</h3>
                      <p className="text-gray-400 leading-relaxed">
                          Customers won&apos;t even have to leave your website to find the right answer and keep moving forward
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}