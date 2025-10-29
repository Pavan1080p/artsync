"use client";

import React, { useState } from 'react';
import { Eye, MapPin, Instagram, Twitter, Globe, Filter } from 'lucide-react';

// TypeScript interfaces
interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface SocialLinks {
  instagram?: string;
  twitter?: string;
  website?: string;
}

interface Artist {
  id: number;
  name: string;
  bio: string;
  avatar: string;
  location: string;
  tags: string[];
  followers: number;
  projects: number;
  socialLinks: SocialLinks;
  portfolio: PortfolioItem[];
}

interface PortfolioGridProps {
  onArtistClick: (artist: Artist) => void;
}

interface ArtistPortfolioProps {
  artist: Artist;
  onBack: () => void;
}

// Mock data for artists
const mockArtists: Artist[] = [
  {
    id: 1,
    name: "Maya Chen",
    bio: "Digital artist specializing in cyberpunk and sci-fi environments",
    avatar: "/api/placeholder/150/150",
    location: "Tokyo, Japan",
    tags: ["Digital Art", "Concept Art", "3D Design"],
    followers: 12400,
    projects: 34,
    socialLinks: {
      instagram: "@maya_digital",
      twitter: "@mayachen_art",
      website: "mayachen.art"
    },
    portfolio: [
      { id: 1, title: "Cyberpunk City", image: "/api/placeholder/400/300", category: "Digital" },
      { id: 2, title: "Neon Streets", image: "/api/placeholder/400/300", category: "Digital" },
      { id: 3, title: "Future Vehicle", image: "/api/placeholder/400/300", category: "3D" },
      { id: 4, title: "Character Design", image: "/api/placeholder/400/300", category: "Digital" },
      { id: 5, title: "Environment Concept", image: "/api/placeholder/400/300", category: "Concept" },
      { id: 6, title: "Mech Design", image: "/api/placeholder/400/300", category: "3D" }
    ]
  },
  {
    id: 2,
    name: "Alex Rivera",
    bio: "Traditional painter exploring modern digital mediums",
    avatar: "/api/placeholder/150/150",
    location: "Barcelona, Spain",
    tags: ["Painting", "Mixed Media", "Digital Art"],
    followers: 8900,
    projects: 28,
    socialLinks: {
      instagram: "@alexrivera_art",
      website: "alexrivera.studio"
    },
    portfolio: [
      { id: 1, title: "Abstract Series #1", image: "/api/placeholder/400/300", category: "Painting" },
      { id: 2, title: "Digital Portrait", image: "/api/placeholder/400/300", category: "Digital" },
      { id: 3, title: "Mixed Media Collage", image: "/api/placeholder/400/300", category: "Mixed Media" },
      { id: 4, title: "Color Study", image: "/api/placeholder/400/300", category: "Painting" }
    ]
  },
  {
    id: 3,
    name: "Jordan Kim",
    bio: "3D animator and character designer for games and films",
    avatar: "/api/placeholder/150/150",
    location: "Seoul, South Korea",
    tags: ["3D Animation", "Character Design", "Game Art"],
    followers: 15600,
    projects: 42,
    socialLinks: {
      instagram: "@jordankim3d",
      twitter: "@jkim_animator",
      website: "jordankim.dev"
    },
    portfolio: [
      { id: 1, title: "Character Rig", image: "/api/placeholder/400/300", category: "3D" },
      { id: 2, title: "Animation Reel", image: "/api/placeholder/400/300", category: "Animation" },
      { id: 3, title: "Game Asset", image: "/api/placeholder/400/300", category: "Game Art" },
      { id: 4, title: "Character Model", image: "/api/placeholder/400/300", category: "3D" },
      { id: 5, title: "Facial Animation", image: "/api/placeholder/400/300", category: "Animation" }
    ]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    bio: "Illustrator and visual storyteller with a passion for fantasy art",
    avatar: "/api/placeholder/150/150",
    location: "Mexico City, Mexico",
    tags: ["Illustration", "Fantasy Art", "Book Design"],
    followers: 9200,
    projects: 31,
    socialLinks: {
      instagram: "@elena_fantasy",
      website: "elenarodriguez.art"
    },
    portfolio: [
      { id: 1, title: "Book Cover", image: "/api/placeholder/400/300", category: "Illustration" },
      { id: 2, title: "Fantasy Character", image: "/api/placeholder/400/300", category: "Fantasy" },
      { id: 3, title: "Editorial Illustration", image: "/api/placeholder/400/300", category: "Illustration" },
      { id: 4, title: "Dragon Concept", image: "/api/placeholder/400/300", category: "Fantasy" }
    ]
  },
  {
    id: 5,
    name: "Sam Taylor",
    bio: "Brand designer creating memorable visual identities",
    avatar: "/api/placeholder/150/150",
    location: "London, UK",
    tags: ["Branding", "Logo Design", "Identity"],
    followers: 6800,
    projects: 25,
    socialLinks: {
      instagram: "@samtaylor_design",
      twitter: "@sam_brands",
      website: "samtaylor.design"
    },
    portfolio: [
      { id: 1, title: "Brand Identity", image: "/api/placeholder/400/300", category: "Branding" },
      { id: 2, title: "Logo Collection", image: "/api/placeholder/400/300", category: "Logo" },
      { id: 3, title: "Packaging Design", image: "/api/placeholder/400/300", category: "Branding" },
      { id: 4, title: "Visual System", image: "/api/placeholder/400/300", category: "Identity" }
    ]
  },
  {
    id: 6,
    name: "Aria Patel",
    bio: "Motion graphics designer and video editor",
    avatar: "/api/placeholder/150/150",
    location: "Mumbai, India",
    tags: ["Motion Graphics", "Video Editing", "Animation"],
    followers: 11300,
    projects: 38,
    socialLinks: {
      instagram: "@aria_motion",
      twitter: "@ariapatel_gfx",
      website: "ariapatel.co"
    },
    portfolio: [
      { id: 1, title: "Motion Logo", image: "/api/placeholder/400/300", category: "Motion" },
      { id: 2, title: "Explainer Video", image: "/api/placeholder/400/300", category: "Video" },
      { id: 3, title: "Title Sequence", image: "/api/placeholder/400/300", category: "Motion" },
      { id: 4, title: "Social Media Pack", image: "/api/placeholder/400/300", category: "Animation" }
    ]
  }
];

// Portfolio Grid Component
const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onArtistClick }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockArtists.map((artist) => (
          <div key={artist.id} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
            {/* Artist Avatar */}
            <div className="relative p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white text-2xl font-bold">
                  {artist.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">{artist.bio}</p>
              
              <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {artist.location}
              </div>
              
              {/* Stats */}
              <div className="flex justify-center space-x-4 mb-4 text-sm">
                <div className="text-center">
                  <div className="text-white font-bold">{artist.followers.toLocaleString()}</div>
                  <div className="text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold">{artist.projects}</div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {artist.tags.slice(0, 3).map((tag: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* View Portfolio Button */}
              <button 
                onClick={() => onArtistClick(artist)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual Artist Portfolio Component
const ArtistPortfolio: React.FC<ArtistPortfolioProps> = ({ artist, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(artist.portfolio.map((item: PortfolioItem) => item.category))];
  const filteredPortfolio = selectedCategory === 'All' 
    ? artist.portfolio 
    : artist.portfolio.filter((item: PortfolioItem) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-6">
        <button 
          onClick={onBack}
          className="text-purple-400 hover:text-white transition-colors flex items-center"
        >
          ← Back to All Portfolios
        </button>
      </div>

      {/* Artist Profile Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white text-3xl font-bold">
                {artist.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
            </div>
            
            {/* Artist Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-4">{artist.name}</h1>
              <p className="text-gray-300 text-lg mb-4 max-w-2xl">{artist.bio}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center justify-center md:justify-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  {artist.location}
                </div>
                
                <div className="flex justify-center md:justify-start space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-white font-bold text-xl">{artist.followers.toLocaleString()}</div>
                    <div className="text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-xl">{artist.projects}</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {artist.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                {artist.socialLinks.instagram && (
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {artist.socialLinks.twitter && (
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {artist.socialLinks.website && (
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Portfolio</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item: PortfolioItem) => (
            <div key={item.id} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🎨</div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <span className="text-purple-300 text-sm">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const PortfolioPage: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleBackToGrid = () => {
    setSelectedArtist(null);
  };

  // If an artist is selected, show their individual portfolio
  if (selectedArtist) {
    return <ArtistPortfolio artist={selectedArtist} onBack={handleBackToGrid} />;
  }

  // Otherwise, show the main portfolio grid
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 opacity-50" />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full text-pink-300 text-sm font-medium">
              Welcome to the Future of Art
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore Artist{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Portfolios
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover creativity from artists worldwide
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{mockArtists.length}</div>
              <div className="text-gray-400">Featured Artists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {mockArtists.reduce((sum: number, artist: Artist) => sum + artist.portfolio.length, 0)}
              </div>
              <div className="text-gray-400">Art Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {mockArtists.reduce((sum: number, artist: Artist) => sum + artist.followers, 0).toLocaleString()}
              </div>
              <div className="text-gray-400">Community</div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <PortfolioGrid onArtistClick={handleArtistClick} />
    </div>
  );
};

export default PortfolioPage;