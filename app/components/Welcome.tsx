// pages/index.tsx
import {  Users, Lock, Cpu, MessageCircle, Mail, BookOpen } from 'lucide-react';


const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-gray-900 p-6 rounded-lg relative overflow-hidden">
    <div className="absolute w-16 h-16 bg-blue-600/10 rounded-full -right-8 -bottom-8" />
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default function Welcome() {
  const features = [
    {
      icon: Users,
      title: "Accounts",
      description: "Manage an unlimited number of accounts from one place"
    },
    {
      icon: Lock,
      title: "Roles & Permissions",
      description: "Full control with flexible user settings for roles and admin"
    },
    {
      icon: Cpu,
      title: "Integration",
      description: "Connect the tools you already use"
    },
    {
      icon: MessageCircle,
      title: "Chat Bots",
      description: "AI powered chatbots to improve your business and customer satisfaction"
    },
    {
      icon: Mail,
      title: "In-App Messaging",
      description: "Build a better business with proactive messages"
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Create and publish answers for customers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center bg-blue-500 rounded-sm">
              <div className="text-white text-2xl font-bold font-pacifico">SaasTribe</div>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-montserrat">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-montserrat">Company</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-montserrat">Account</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-montserrat">Products</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-montserrat">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-montserrat">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Hero Content */}
          <div className="lg:w-5/12 lg:py-12">
            <div className="lg:sticky lg:top-8">
            <h4 className="text-xl font-bold text-blue-600 tracking-widest uppercase text-left">WELCOME</h4>
              <h1 className="text-4xl font-bold text-white mb-4">
                Ready to help you in <br />your projects!
              </h1>
              <p className="text-gray-400 mb-8 max-w-xl">
                Our sales team will get in touch to better understand your needs, and will help you with the sign-up process
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Start Now
                </button>
                <button className="border border-blue-400 text-white px-6 py-3 rounded-md hover:bg-gray-800">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}