import Faq from "./components/Faq";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import { FaUserAlt } from 'react-icons/fa';
import { CircleHelp } from "lucide-react";
import { CircleCheck } from 'lucide-react';
import Partners from "./components/Partners";

export default function Page() {
  return (
    <div>
      <Welcome />
      <FeatureOne
        title="Our people make the difference."
        description="At any time, you can contact our support center for help, because we won over 100 clients"
        averageRating="99%"
        support="24/7"
        clients="5000+"
        image={<FaUserAlt size={64} />}
      />
      <FeatureTwo
    title="Connect the tools you already use"
    description="Our extensive developer tools might also strike your fancy"
    icons={
        <>
            <div className="p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                <FaUserAlt className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Slack</h3>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                <FaUserAlt className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Segment</h3>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                <FaUserAlt className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Salesforce</h3>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                <FaUserAlt className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Jira</h3>
            </div>
        </>
    }
/>
        <FeatureThree
        title="Deliver instant answers with knowledge base"
        description="Create and publish answers for customers and reduce your customer support volume by at least 20%. Happier customers,fewer convesations-everyone wins."
        questionOne="Launch a help center website"
        questionTwo="Deliver instant answers"
        iconOne={CircleHelp}
        iconTwo={CircleCheck}
        />
      <Partners />
      <Faq />
      <Footer />
    </div>
  );
}