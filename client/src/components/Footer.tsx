export default function Footer() {
  return (
    <footer className="bg-[#5a3a22] text-[#d9c4b0]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
        <h2 className="font-rigot text-[28px] md:text-[32px] leading-[38px] font-bold border-b border-[#d9c4b0]/30 pb-4 mb-6">
          Ar. Shivangi Shivakumar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-quicksand text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
          <div>+91 99726 81819</div>
          <div>contact@aakaarastudio.in</div>
          <div>
            Nagasandra,<br />
            Bangalore- 560073.
          </div>
        </div>
      </div>
    </footer>
  );
}
