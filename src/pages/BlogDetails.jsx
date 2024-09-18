import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state;

  return (
    <div>
      <Navbar />
      <div className="bg-blue-50 min-h-screen py-12 mt-[7rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            className="mb-8 px-6 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700"
            onClick={() => navigate(-1)}>
            Back to Blogs
          </button>

          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            {blog.title}
          </h1>

          {/* Blog Image */}
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Blog Content */}
          <div className="text-lg text-blue-700 space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel dolor fermentum, venenatis elit ac, convallis est. Integer ut
              dignissim ipsum. {blog.description}
            </p>
            <p>
              Phasellus nec orci lectus. Nulla facilisi. Etiam fermentum est vel
              augue interdum, quis commodo urna pharetra. Cras tempor
              condimentum ornare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
