"use client";

import { motion } from 'framer-motion';
import { LogOut, User, Mail, Shield, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from './AuthProvider';

export function UserDashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome back,{' '}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {user?.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300">Ready to continue your creative journey?</p>
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Your Profile</h2>
                <p className="text-gray-400">Account information</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Name</p>
                  <p className="text-white font-medium">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Role</p>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {user?.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
                <p className="text-gray-400">What would you like to do?</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                Explore Artworks
              </Button>

              <Button className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 bg-transparent backdrop-blur-sm py-3 rounded-lg font-semibold transition-all duration-300">
                Connect with Artists
              </Button>

              <Button className="w-full border-2 border-violet-400 text-violet-400 hover:bg-violet-400/10 hover:text-violet-300 bg-transparent backdrop-blur-sm py-3 rounded-lg font-semibold transition-all duration-300">
                Browse Collections
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Logout Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            onClick={handleLogout}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </motion.div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { top: "20%", right: "15%", size: "w-2 h-2", color: "bg-pink-500", delay: 0 },
            { top: "60%", left: "10%", size: "w-1 h-1", color: "bg-cyan-400", delay: 1 },
            { top: "30%", left: "80%", size: "w-1.5 h-1.5", color: "bg-violet-500", delay: 2 },
          ].map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute ${shape.size} ${shape.color} rounded-full opacity-30`}
              style={{ top: shape.top, left: shape.left, right: shape.right }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}