import BlogCard from "../components/BlogCard";
import SubscribeForm from "../components/SubscribeForm";

const blogPosts = [
  {
    image: "/images/image1.jpg",
    title: "Blog Post One",
    description: "This is a short description of blog post one.",
  },
  {
    image: "/images/image2.jpg",
    title: "Blog Post Two",
    description: "This is a short description of blog post two.",
  },
  {
    image: "/images/image3.jpg",
    title: "Blog Post Three",
    description: "This is a short description of blog post three.",
  },
  {
    image: "/images/image4.jpg",
    title: "Blog Post Four",
    description: "This is a short description of blog post four.",
  },
];

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to My Blog
      </h1>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
      <SubscribeForm />
    </>
  );
}

