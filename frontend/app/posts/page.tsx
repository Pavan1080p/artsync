export default function PostsPage() {
  const posts = [
    {
      id: 1,
      title: "Looking for a mural artist for café wall",
      category: "Painting",
      description: "Need a large wall painting with nature theme for a new café. Size 12x15 feet. Timeline: 3 weeks.",
      location: "Pune",
      budget: "₹15,000 - ₹20,000",
      deadline: "2025-09-20",
      contact: "cafeowner@gmail.com",
    },
    {
      id: 2,
      title: "Need guitarist for local event",
      category: "Music",
      description: "Looking for a guitarist to perform at a cultural event in Baramati.",
      location: "Baramati",
      budget: "Negotiable",
      deadline: "2025-09-15",
      contact: "eventcoordinator@gmail.com",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Collaboration Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="rounded-xl border border-white/10 bg-black/40 p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-white/70 mb-3">{post.description}</p>
            <div className="text-sm text-white/60 space-y-1">
              <p>🎭 {post.category}</p>
              <p>📍 {post.location}</p>
              <p>💰 {post.budget}</p>
              <p>⏰ Deadline: {post.deadline}</p>
              <p>📧 Contact: {post.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
