import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const navigate = useNavigate();

  // Blog data array
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Water Conservation",
      description:
        "Learn how water conservation can impact both the environment and your daily life.",
      imageUrl: "https://via.placeholder.com/400x250",
      content: "This is the full content of blog post 1",
    },
    {
      id: 2,
      title: "Sustainable Water Practices for Businesses",
      description:
        "Discover how businesses can implement sustainable water use practices for long-term benefits.",
      imageUrl: "https://via.placeholder.com/400x250",
      content: "This is the full content of blog post 2",
    },
    {
      id: 3,
      title: "How to Reduce Water Waste at Home",
      description:
        "Learn easy steps to reduce water waste in your daily routine and make a difference.",
      imageUrl: "https://via.placeholder.com/400x250",
      content: "This is the full content of blog post 3",
    },
    // Add more blog posts here
  ];

  const handleReadMore = (blog) => {
    navigate(`/blogs/${blog.id}`, { state: { blog } });
  };

  return (
    <div>
      <Navbar />
      {/* Main Container */}
      <div className="bg-blue-50 min-h-screen py-12 mt-[7rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900">
              Dive into Our Latest Blogs
            </h1>
            <p className="mt-4 text-lg text-blue-700">
              Discover insights about water conservation, sustainable practices,
              and more!
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-900">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-blue-700">{post.description}</p>
                  <button
                    onClick={() => handleReadMore(post)}
                    className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
