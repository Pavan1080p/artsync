import React from 'react';

export default function AboutPage() {
 return (
   <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white">
     {/* Hero Section */}
     <section className="pt-32 pb-20 px-4 text-center relative">
       <div className="max-w-4xl mx-auto relative z-10">
         <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#e879f9] bg-clip-text text-transparent">
           About Artsync
         </h1>
         <p className="text-xl text-gray-300 mb-8">
           Empowering the next generation of digital artists through innovative collaboration, 
           cutting-edge tools, and a thriving global community.
         </p>
       </div>
     </section>

     {/* Hero Image Section */}
     <section className="py-16 px-4">
       <div className="max-w-4xl mx-auto">
         <img 
           src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop&crop=center" 
           alt="Digital artists collaborating on creative projects"
           className="w-full h-96 object-cover rounded-3xl border border-white/10 shadow-2xl"
         />
       </div>
     </section>

     {/* Our Mission Section */}
     <section className="py-16 px-4">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#3b82f6] bg-clip-text text-transparent">
           Our Mission
         </h2>
         
         <div className="text-center max-w-4xl mx-auto mb-12">
           <p className="text-xl text-white leading-relaxed">
             We believe that the future of art lies in collaboration. Artsync exists to break down 
             geographical barriers, connect creative minds, and provide the tools necessary for artists 
             to push the boundaries of what's possible in digital creativity.
           </p>
         </div>

         {/* Mission Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
             <div className="w-16 h-16 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center text-2xl mb-6">
               🎯
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Vision</h3>
             <p className="text-gray-300 leading-relaxed">
               To create a world where artistic collaboration knows no boundaries, enabling creators 
               from every corner of the globe to work together seamlessly and bring extraordinary 
               projects to life.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
             <div className="w-16 h-16 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center text-2xl mb-6">
               🚀
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Purpose</h3>
             <p className="text-gray-300 leading-relaxed">
               Democratizing creative collaboration by providing intuitive tools, fostering meaningful 
               connections, and supporting artists in their journey from concept to completion.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
             <div className="w-16 h-16 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center text-2xl mb-6">
               💡
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Innovation</h3>
             <p className="text-gray-300 leading-relaxed">
               Continuously pushing the boundaries of what's possible in digital creativity through 
               cutting-edge technology, AI-powered tools, and innovative collaboration features.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
             <div className="w-16 h-16 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center text-2xl mb-6">
               🌟
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Impact</h3>
             <p className="text-gray-300 leading-relaxed">
               Empowering artists to create work that would be impossible alone, fostering a new era 
               of collaborative art that inspires and transforms communities worldwide.
             </p>
           </div>
         </div>

         {/* Stats Section */}
         <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
               <h4 className="text-4xl font-bold text-[#e879f9] mb-2">50K+</h4>
               <p className="text-gray-300">Active Artists</p>
             </div>
             <div>
               <h4 className="text-4xl font-bold text-[#e879f9] mb-2">15K+</h4>
               <p className="text-gray-300">Projects Completed</p>
             </div>
             <div>
               <h4 className="text-4xl font-bold text-[#e879f9] mb-2">120+</h4>
               <p className="text-gray-300">Countries</p>
             </div>
             <div>
               <h4 className="text-4xl font-bold text-[#e879f9] mb-2">98%</h4>
               <p className="text-gray-300">User Satisfaction</p>
             </div>
           </div>
         </div>
       </div>
     </section>

     {/* What We Do Section */}
     <section className="py-8 px-4">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#3b82f6] bg-clip-text text-transparent">
           What We Do
         </h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e879f9] to-[#3b82f6]"></div>
             <div className="w-14 h-14 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-xl flex items-center justify-center text-xl mb-6">
               🎨
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Creative Collaboration</h3>
             <p className="text-gray-300 leading-relaxed">
               Connect artists worldwide through real-time collaboration tools that make distance irrelevant. 
               Work together seamlessly on projects ranging from concept art to full productions.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e879f9] to-[#3b82f6]"></div>
             <div className="w-14 h-14 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-xl flex items-center justify-center text-xl mb-6">
               🚀
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Project Incubation</h3>
             <p className="text-gray-300 leading-relaxed">
               Turn creative ideas into reality with our project management system. Find collaborators, 
               manage workflows, and bring ambitious creative visions to life.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e879f9] to-[#3b82f6]"></div>
             <div className="w-14 h-14 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-xl flex items-center justify-center text-xl mb-6">
               💼
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Portfolio Showcase</h3>
             <p className="text-gray-300 leading-relaxed">
               Present your work with stunning, professional portfolio layouts designed specifically 
               for creative professionals across all disciplines.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e879f9] to-[#3b82f6]"></div>
             <div className="w-14 h-14 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-xl flex items-center justify-center text-xl mb-6">
               🌟
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Community Building</h3>
             <p className="text-gray-300 leading-relaxed">
               Join a supportive community of creators who share knowledge, provide feedback, and 
               inspire each other to reach new creative heights.
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* Our Values Section */}
     <section className="py-16 px-4">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#3b82f6] bg-clip-text text-transparent">
           Our Values
         </h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="text-center p-8">
             <div className="w-20 h-20 bg-[#e879f9]/10 border-2 border-[#e879f9] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
               🤝
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Collaboration First</h3>
             <p className="text-gray-300 leading-relaxed">
               We believe the best art comes from working together, sharing ideas, and building upon each other's creativity.
             </p>
           </div>

           <div className="text-center p-8">
             <div className="w-20 h-20 bg-[#e879f9]/10 border-2 border-[#e879f9] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
               🌍
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Global Accessibility</h3>
             <p className="text-gray-300 leading-relaxed">
               Art has no borders. We're committed to making creative collaboration accessible to artists everywhere.
             </p>
           </div>

           <div className="text-center p-8">
             <div className="w-20 h-20 bg-[#e879f9]/10 border-2 border-[#e879f9] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
               ⚡
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Innovation</h3>
             <p className="text-gray-300 leading-relaxed">
               We constantly push the boundaries of what's possible in digital collaboration and creative tools.
             </p>
           </div>

           <div className="text-center p-8">
             <div className="w-20 h-20 bg-[#e879f9]/10 border-2 border-[#e879f9] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
               🎯
             </div>
             <h3 className="text-2xl font-bold text-[#e879f9] mb-4">Quality Focus</h3>
             <p className="text-gray-300 leading-relaxed">
               Every feature we build is designed with the highest standards of quality and user experience in mind.
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* Team Section */}
     <section className="py-16 px-4">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#3b82f6] bg-clip-text text-transparent">
           Meet Our Team
         </h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="w-20 h-20 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
               AS
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Alex Sterling</h3>
             <p className="text-[#e879f9] mb-4">CEO & Co-founder</p>
             <p className="text-gray-300 leading-relaxed">
               Former digital artist turned entrepreneur, passionate about democratizing creative collaboration worldwide.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="w-20 h-20 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
               MK
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Maya Kim</h3>
             <p className="text-[#e879f9] mb-4">CTO & Co-founder</p>
             <p className="text-gray-300 leading-relaxed">
               Tech visionary with 10+ years in building scalable platforms for creative industries.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="w-20 h-20 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
               JR
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Jordan Rivers</h3>
             <p className="text-[#e879f9] mb-4">Head of Design</p>
             <p className="text-gray-300 leading-relaxed">
               Award-winning UX designer dedicated to creating intuitive experiences for creative professionals.
             </p>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-[#e879f9]/30">
             <div className="w-20 h-20 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
               SC
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Sam Chen</h3>
             <p className="text-[#e879f9] mb-4">Head of Community</p>
             <p className="text-gray-300 leading-relaxed">
               Community builder who ensures every artist feels welcomed and supported in their creative journey.
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* CTA Section */}
     <section className="py-20 px-4 relative">
       <div className="absolute inset-0 bg-gradient-radial from-[#e879f9]/10 via-transparent to-transparent"></div>
       <div className="max-w-4xl mx-auto text-center relative z-10">
         <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#3b82f6] bg-clip-text text-transparent">
           Ready to Join Our Community?
         </h2>
         <p className="text-xl text-gray-300 mb-8">
           Connect with thousands of talented artists and start creating amazing collaborative projects today.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a 
             href="#" 
             className="px-8 py-4 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] text-white font-semibold rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-[#e879f9]/25"
           >
             Get Started Free →
           </a>
           <a 
             href="#" 
             className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-[#e879f9]/50 transition-all duration-300"
           >
             Explore Projects →
           </a>
         </div>
       </div>
     </section>
   </div>
 );
}