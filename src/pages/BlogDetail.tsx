import React from "react";
import { useParams } from "react-router-dom";
import user from '../icons/user.png'
import image from "../icons/blog1.jpg";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock blog post data to match the design
  const blogPost = {
    id,
    category: "Travel",
    title: "Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur.",
    mainImage: image, // Placeholder for Hungarian Parliament building
    content: `Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.
Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst una. Malesuada at ut quis mi sit augue. In orci et neque nisi et eu maximus dunc. Arcu lectus fringilla fermentum eu elementum eget.
Viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc commodo vel viverra at tortor volutpat labore. Est porta cursus justo fermentum ipsum id. Et enim quam eu laboris et habitant sollicitudin quis eu.`,
    author: "Lorem Ipsum",
    date: "January 30, 2025",
    latestPosts: [
      {
        image: image, // Beach image
        title:
          "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
        date: "January 30, 2025",
      },
      {
        image: image, // Venice image
        title:
          "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
        date: "January 30, 2025",
      },
      {
        image: image, // Car image
        title:
          "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
        date: "January 30, 2025",
      },
    ],
  };

  return (
    <div className="bg-black/80 text-white min-h-screen flex py-6 md:px-[80px]">
      <div className="w-full lg:w-3/4 p-6">
      <div className="bg-[#FFB800] rounded-md text-black text-lg font-bold px-3 py-1 inline-block mb-2">
            {blogPost.category}
          </div>
        {/* Main Blog Content */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{blogPost.title}</h1>

          <div className="flex items-center text-gray-400 mb-8 ">
            <img
              src={user}
              alt={blogPost.author}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-xl">
              {blogPost.author} | {blogPost.date}
            </span>
          </div>

          <img
            src={blogPost.mainImage}
            alt={blogPost.title}
            className="w-full md:h-[500px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-invert">
            {blogPost.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className=" text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Posts Sidebar */}
      <div className="hidden lg:block w-1/4 p-6 mt-14">
        <h2 className="text-xl font-bold mb-6">Latest Post</h2>

        {blogPost.latestPosts.map((post, index) => (
          <div key={index} className="mb-6 p-6 rounded-lg border border-[#242535]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] object-cover rounded-lg mb-3"
            />
             <div className="bg-[#FFB800] rounded-md text-black text-xs font-bold px-3 py-1 inline-block mb-2">
            {blogPost.category}
          </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center text-gray-400  ">
            <img
              src={user}
              alt={blogPost.author}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-2xs">
              {blogPost.author} | {blogPost.date}
            </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default BlogDetail;
