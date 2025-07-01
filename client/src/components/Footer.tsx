export default function Footer() {
  return (
    <footer className="bg-[#5a3a22] text-[#d9c4b0] w-full">
      <div className="px-6 md:px-12 py-12">
        <h2 className="font-quicksand text-[32px] md:text-[36px] leading-[42px] font-normal border-b border-[#d9c4b0]/30 pb-4 mb-6">
          Ar. Shivangi Shivakumar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-quicksand text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal">
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
