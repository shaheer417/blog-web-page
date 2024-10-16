
const SubscribeForm = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8 animate__animated animate__bounceIn">
      <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <form>
        <input
          type="email"
          placeholder="Your email"
          className="p-2 w-full border rounded-md mb-4"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
