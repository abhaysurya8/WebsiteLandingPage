export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="font-rigot text-3xl md:text-4xl mb-6 font-bold text-amber-100">
              Ar. Shivangi Shivakumar
            </h3>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-4">
            <div className="font-quicksand text-amber-100">
              <p className="mb-2">+91 99726 81819</p>
              <p className="mb-4">Nagasandra,</p>
              <p>Bangalore - 560073.</p>
            </div>
            <div className="font-quicksand text-amber-100">
              <p>contact@aakaarastudio.in</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
