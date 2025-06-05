export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#5a3a22] mb-4">404</h1>
        <p className="text-lg text-[#7f6a4d] mb-8">Page not found</p>
        <a href="/" className="bg-[#7f6a4d] hover:bg-[#5a3a22] text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}