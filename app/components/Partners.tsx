import Image from 'next/image';

    
export default function Partners() {
    const partners = [
        {
            name: 'Slack',
            logo: '/logos/slack-logo.svg',
        },
        {
            name: 'Sass',
            logo: '/logos/sass-logo.svg',
        },
        {
            name: 'Netflix',
            logo: '/logos/netflix-logo.svg',
        },
        {
            name: 'Spotify',
            logo: '/logos/spotify-logo.svg',
        },
        {
            name: 'Buzzfeed',
            logo: '/logos/buzzfeed-logo.svg',
        },
        {
            name: 'Target',
            logo: '/logos/target-logo.svg',
        },
    ];
    return (
        <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-4 ">
            <h4 className="text-xl font-bold text-blue-600 tracking-widest uppercase text-center">Partners</h4>
                <h2 className="text-center text-3xl font-semibold text-white mb-12 font-montserrat">
                    Trusted by more than 5,000 business in 122 countries
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center border border-black shadow-xl">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="transition-opacity opacity-75 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

