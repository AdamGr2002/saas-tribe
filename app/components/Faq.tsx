export default function Faq() {
    return (
        <div className="bg-gray-950 py-16 px-8 font-montserrat">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-16">
                <h4 className="text-sm font-bold text-blue-600 tracking-widest uppercase text-center mb-4">FAQ</h4>
                <h2 className="text-center text-white text-4xl font-bold mb-6">What you should know</h2>
                <p className="text-center text-white text-lg max-w-2xl mx-auto">
                    Check out the key features of our template. They can help you create your first-class project
                </p>
            </div>

            {/* FAQ Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* FAQ Item 1 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Cross Platform</h4>
                        <p className="text-white leading-relaxed">
                            Are you most often visited from mobile devices? No problem, our template is fully responsive.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Customize it</h4>
                        <p className="text-white leading-relaxed">
                            Customize our template for as you wish! Advanced editing features will help you make it unique.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Documentation</h4>
                        <p className="text-white leading-relaxed">
                            We have prepared good documentation for our template! You can find the components you need.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Chat Bots</h4>
                        <p className="text-white leading-relaxed">
                            AI powered chatbots to improve your business and customer satisfaction.
                        </p>
                    </div>
                </div>
                {/* FAQ Item 5 */}
        <div className="flex gap-6">
            <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-4">Knowledge Base</h4>
                <p className="text-white leading-relaxed">
                    Create and publish answers for customers and reduce your customer support volume by at least 20%.
                </p>
            </div>
        </div>

        {/* FAQ Item 6 */}
        <div className="flex gap-6">
            <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-4">24/7 Support</h4>
                <p className="text-white leading-relaxed">
                    We are ready to help in solving your problem during the day and night,just create a ticket.
                </p>
            </div>
        </div>
            </div>
        </div>
    )
}