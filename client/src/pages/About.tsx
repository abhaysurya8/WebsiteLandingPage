const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile Image - TO CHANGE YOUR PICTURE: Replace the src URL below with your image */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Ar. Shivangi Shivakumar"
              className="w-80 h-80 rounded-full object-cover shadow-lg hover-scale"
            />
            {/* TO CHANGE YOUR PICTURE: 
                1. Upload your image to a hosting service (like Imgur, Cloudinary, or use the assets folder)
                2. Replace the src URL above with your image URL
                3. Make sure the image is square (400x400px) for best results
            */}
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal">
              Crafting<br />
              Inspired<br />
              Spaces
            </h1>
            <div className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal space-y-4">
              <p>
                Since its inception in 2020, Aakaara Architecture has established itself as a distinguished name in architecture, 
                interior design, and landscape design. Rooted in creativity and precision, the firm aspires to leave its mark across 
                diverse cities and environments. Over the years, Aakaara has remained steadfast in its commitment to innovation, 
                craftsmanship, and client trust — with a singular vision: to design spaces that inspire, endure, and elevate everyday living.
              </p>
            </div>
            <div className="pt-6 border-t border-aakaara-brown/20">
              <h3 className="text-aakaara-text font-playfair text-[24px] font-medium mb-2">
                Ar. Shivangi Shivakumar
              </h3>
              <p className="text-aakaara-text/80 text-[16px] font-normal">Founder & Principal Architect</p>
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in animation-delay-400">
          <h2 className="text-aakaara-text font-playfair text-[28px] md:text-[32px] font-normal mb-6">
            Our Philosophy
          </h2>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal">
            We believe that great design transcends mere aesthetics. It's about creating spaces that resonate with the human spirit, 
            spaces that tell stories, and spaces that stand the test of time. Our approach combines traditional wisdom with contemporary 
            innovation, ensuring that every project we undertake becomes a testament to thoughtful design and meticulous craftsmanship.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-[38px] font-normal border-b border-aakaara-light-brown/30 pb-4 mb-6">
            Ar. Shivangi Shivakumar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
            <div>+91 99726 81819</div>
            <div>contact@aakaarastudio.in</div>
            <div>
              Nagasandra,<br />
              Bangalore- 560073.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;