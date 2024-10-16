import Image from "next/image";

const BlogCard = ({ title, description, image }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp .roll-in-left {
	-webkit-animation: roll-in-left 0.6s ease-out both;
	        animation: roll-in-left 0.6s ease-out both;
}"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="mt-4 text-indigo-500">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;


