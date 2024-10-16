export default function Contact() {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700">
        If you have any questions, feel free to reach out to us at:
      </p>
      <p className="text-lg text-gray-700 mt-4">Email: contact@myblog.com</p>
      <p className="text-lg text-gray-700 mt-4">Phone: +123 456 7890</p>
      <form className="mt-8">
        <input
          type="text"
          placeholder="Your name"
          className="p-2 w-full border rounded-md mb-4"
        />
        <input
          type="email"
          placeholder="Your email"
          className="p-2 w-full border rounded-md mb-4"
        />
        <textarea
          placeholder="Your message"
          className="p-2 w-full border rounded-md mb-4"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all">
          Send Message
        </button>
      </form>
    </div>
  );
}



// export default function Contact() {
//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold">Contact Us</h1>
//         <p className="mt-4 text-lg">
//           Reach out to us for any inquiries or collaborations.
//         </p>
//       </div>
//     </Layout>
//   );
// }
