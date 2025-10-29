'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, Heart, Users, Calendar, MapPin, DollarSign, Share2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface ProjectDetailPageProps {
  projectId: string;
}

const projectsData = [
  {
    id: '1',
    title: 'Cyberpunk City Concept',
    artist: 'Maya Chen',
    category: '3D Environment',
    tags: ['3D', 'Concept Art', 'Sci-Fi'],
    views: 1200,
    likes: 234,
    collaborators: 3,
    description: 'A futuristic cyberpunk cityscape featuring neon-lit skyscrapers, flying vehicles, and detailed street-level environments. This project aims to create a fully immersive 3D world inspired by classic cyberpunk aesthetics.',
    requirements: [
      '3D modeling skills (Blender/Maya)',
      'Texturing and lighting experience',
      'Understanding of cyberpunk aesthetics',
      'Ability to work with real-time engines (Unity/Unreal)'
    ],
    timeline: '3 months',
    location: 'Remote',
    budget: 'Collaborative project',
    status: 'Open for collaborators',
    contactEmail: 'maya.chen@artsync.com',
    image: null
  },
  {
    id: '2',
    title: 'Brand Identity System',
    artist: 'Sam Taylor',
    category: 'Design',
    tags: ['Branding', 'Logo', 'Identity'],
    views: 856,
    likes: 189,
    collaborators: 2,
    description: 'Developing a comprehensive brand identity system for a modern tech startup. Includes logo design, color palette, typography, and brand guidelines.',
    requirements: [
      'Graphic design expertise',
      'Brand strategy knowledge',
      'Adobe Creative Suite proficiency',
      'Experience with brand guidelines'
    ],
    timeline: '6 weeks',
    location: 'Remote',
    budget: '₹50,000 - ₹75,000',
    status: 'Open for collaborators',
    contactEmail: 'sam.taylor@artsync.com',
    image: null
  },
  {
    id: '3',
    title: 'Abstract Animation Series',
    artist: 'Alex Rivera',
    category: 'Animation',
    tags: ['Motion', '3D', 'Abstract'],
    views: 2100,
    likes: 445,
    collaborators: 4,
    description: 'Creating a series of abstract 3D animations exploring geometric forms and fluid dynamics. Perfect for motion designers and 3D artists interested in experimental work.',
    requirements: [
      'Motion design skills',
      '3D animation experience',
      'Understanding of abstract art',
      'Cinema 4D or similar software'
    ],
    timeline: '4 months',
    location: 'Remote',
    budget: 'Portfolio building',
    status: 'Open for collaborators',
    contactEmail: 'alex.rivera@artsync.com',
    image: null
  },
  {
    id: '4',
    title: 'Product Photography',
    artist: 'Jordan Lee',
    category: 'Photography',
    tags: ['Commercial', 'Product', 'Studio'],
    views: 1567,
    likes: 312,
    collaborators: 2,
    description: 'Professional product photography series for e-commerce brands. Looking for photographers and retouchers to create stunning product imagery.',
    requirements: [
      'Professional photography equipment',
      'Studio lighting expertise',
      'Photo retouching skills',
      'E-commerce photography experience'
    ],
    timeline: '2 months',
    location: 'Mumbai, India',
    budget: '₹40,000 - ₹60,000',
    status: 'Open for collaborators',
    contactEmail: 'jordan.lee@artsync.com',
    image: null
  }
];

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId }) => {
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#e879f9] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handleJoinProject = () => {
    setIsJoined(true);
    alert(`Successfully joined "${project.title}"! The project owner will be notified.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white">
      <main className="max-w-7xl mx-auto px-6 py-12 pt-24">
        <button
          onClick={() => router.push('/projects')}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-8xl">🎨</div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-4 py-2 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-black/60 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <Eye size={18} /> {project.views}
                </span>
                <span className="bg-black/60 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <Heart size={18} /> {project.likes}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-[#e879f9] bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300">by {project.artist}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>{project.collaborators} collaborators</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={20} />
                <span>{project.views} views</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={20} />
                <span>{project.likes} likes</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#e879f9]">About This Project</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#e879f9]">Requirements</h2>
              <ul className="space-y-2">
                {project.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#e879f9] mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#e879f9] flex items-center gap-2">
                <MessageCircle size={24} />
                Discussion
              </h2>
              <p className="text-gray-400 text-center py-8">
                Join the project to participate in discussions
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#e879f9]" />
                  <div>
                    <p className="text-sm text-gray-400">Timeline</p>
                    <p className="font-semibold">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#e879f9]" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign size={20} className="text-[#e879f9]" />
                  <div>
                    <p className="text-sm text-gray-400">Budget</p>
                    <p className="font-semibold">{project.budget}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Status</p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>

                <div className="pt-4 space-y-3">
                  {!isJoined ? (
                    <button
                      onClick={handleJoinProject}
                      className="w-full bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                    >
                      Join Project
                    </button>
                  ) : (
                    <div className="w-full bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold text-center">
                      ✓ Joined Successfully
                    </div>
                  )}
                  
                  <button className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Share Project
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Contact</p>
                  <a
                    href={`mailto:${project.contactEmail}`}
                    className="text-[#e879f9] hover:underline text-sm"
                  >
                    {project.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Project Owner</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] rounded-full flex items-center justify-center font-bold">
                  {project.artist.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold">{project.artist}</p>
                  <p className="text-sm text-gray-400">Project Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;