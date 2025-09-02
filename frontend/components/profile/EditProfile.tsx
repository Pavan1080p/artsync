"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { User, Image as ImageIcon, Save, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../auth/AuthProvider';

const EditProfile = () => {
  const router = useRouter();
  const { user, token, loading, logout } = useAuth(); // Added loading here
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch initial profile data on mount
  useEffect(() => {
    const fetchProfileData = async () => {
      // Wait if auth is still loading
      if (loading) return;
      
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setName(data.name || '');
          setBio(data.bio || '');
          setProfilePic(data.profilePic || '');
        } else if (response.status === 401) {
          logout();
        } else {
          setError('Failed to fetch profile data.');
        }
      } catch (err) {
        setError('Network error. Could not fetch profile data.');
      }
    };
    fetchProfileData();
  }, [token, loading, router, logout]); // Added loading to dependencies

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const payload = { name, bio, profilePic };

    try {
      const response = await fetch('http://localhost:8080/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess('✅ Profile saved successfully!');
        // Auto-hide success after 3s
        setTimeout(() => setSuccess(''), 3000);
      } else if (response.status === 401) {
        logout();
      } else {
        const errorText = await response.text();
        setError(errorText || 'Failed to update profile.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading spinner while auth is loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Complete Your Profile
          </h2>
          <p className="text-gray-400 mt-2">Add your details to personalize your experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm 
                         text-white placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Bio Field */}
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                       focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm 
                       text-white placeholder-gray-400 resize-none"
            placeholder="Tell us about yourself..."
          />

          {/* Profile Picture Field */}
          <div className="relative">
            <ImageIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="url"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm 
                         text-white placeholder-gray-400"
              placeholder="Paste a link to your profile picture"
            />
          </div>
          {profilePic && (
            <div className="flex justify-center mt-4">
              <img
                src={profilePic}
                alt="Profile Preview"
                className="h-24 w-24 object-cover rounded-full border-2 border-pink-500/20"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-green-400 text-sm flex items-center"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              {success}
            </motion.div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 
                       text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 
                       flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Profile...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save & Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProfile;