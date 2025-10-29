'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Filter, Eye, Heart, Users, Plus, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  artist: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  collaborators: number;
  image?: string | null;
}

const ProjectsPage = () => {
  const router = useRouter();
  
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Cyberpunk City Concept',
      artist: 'Maya Chen',
      category: '3D Environment',
      tags: ['3D', 'Concept Art', 'Sci-Fi'],
      views: 1200,
      likes: 234,
      collaborators: 3,
      image: null
    },
    {
      id: 2,
      title: 'Brand Identity System',
      artist: 'Sam Taylor',
      category: 'Design',
      tags: ['Branding', 'Logo', 'Identity'],
      views: 856,
      likes: 189,
      collaborators: 2,
      image: null
    },
    {
      id: 3,
      title: 'Abstract Animation Series',
      artist: 'Alex Rivera',
      category: 'Animation',
      tags: ['Motion', '3D', 'Abstract'],
      views: 2100,
      likes: 445,
      collaborators: 4,
      image: null
    },
    {
      id: 4,
      title: 'Product Photography',
      artist: 'Jordan Lee',
      category: 'Photography',
      tags: ['Commercial', 'Product', 'Studio'],
      views: 1567,
      likes: 312,
      collaborators: 2,
      image: null
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    artist: '',
    category: '',
    tags: '',
    description: ''
  });

  const categories = ['All', '3D Environment', 'Design', 'Animation', 'Photography', 'Illustration', 'UI/UX'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProject = () => {
    if (!newProject.title || !newProject.artist || !newProject.category || !newProject.tags) {
      alert('Please fill in all required fields');
      return;
    }
    
    const project: Project = {
      id: projects.length + 1,
      title: newProject.title,
      artist: newProject.artist,
      category: newProject.category,
      tags: newProject.tags.split(',').map(tag => tag.trim()),
      views: 0,
      likes: 0,
      collaborators: 1,
      image: null
    };
    setProjects([...projects, project]);
    setShowAddModal(false);
    setNewProject({ title: '', artist: '', category: '', tags: '', description: '' });
  };

  const handleJoinProject = (projectId: number) => {
    console.log('Navigating to project:', projectId); // Debug log
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 pt-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#e879f9] bg-clip-text text-transparent">
            Collaboration Projects
          </h1>
          <p className="text-xl text-gray-300">
            Join exciting projects or start your own creative journey
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex gap-4 items-center flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-[#e879f9]"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-3 rounded-full hover:bg-white/10 transition">
            <Filter size={20} />
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition"
          >
            <Plus size={20} />
            Add Project
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#e879f9] to-[#3b82f6]'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#e879f9]/50 transition group"
            >
              {/* Project Image Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-4 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Eye size={16} /> {project.views}
                  </span>
                  <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Heart size={16} /> {project.likes}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#e879f9]">{project.title}</h3>
                <p className="text-gray-300 mb-4">by {project.artist}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users size={18} />
                    <span>{project.collaborators} collaborators</span>
                  </div>
                  <Link href={`/projects/${project.id}`}>
  <button className="bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-6 py-2 rounded-full hover:opacity-90 transition">
    Join Project
  </button>
</Link>


                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-purple-900/50 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-[#e879f9] bg-clip-text text-transparent">
                  Add New Project
                </h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e879f9]"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Artist Name *</label>
                  <input
                    type="text"
                    value={newProject.artist}
                    onChange={(e) => setNewProject({...newProject, artist: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e879f9]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e879f9]"
                  >
                    <option value="">Select category</option>
                    {categories.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags (comma-separated) *</label>
                  <input
                    type="text"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e879f9]"
                    placeholder="e.g., 3D, Art, Design"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e879f9]"
                    rows={4}
                    placeholder="Describe your project..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddProject}
                    className="flex-1 bg-gradient-to-r from-[#e879f9] to-[#3b82f6] px-6 py-3 rounded-full hover:opacity-90 transition"
                  >
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;