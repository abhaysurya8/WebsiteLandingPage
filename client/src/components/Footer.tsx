import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5a3a22] text-[#d9c4b0] w-full">
      <div className="px-6 md:px-12 py-12">
        <h2 className="font-quicksand text-[32px] md:text-[36px] leading-[42px] font-normal border-b border-[#d9c4b0]/30 pb-4 mb-6">
          Ar. Shivangi Shivakumar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-quicksand text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal">
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:gap-8 justify-center md:justify-start">
            <span>+91 99726 81819</span>
            <span className="mx-0 md:mx-4">|</span>
            <span>contact@aakaarastudio.in</span>
            <div className="flex justify-center md:justify-start mt-3 md:mt-0 md:ml-4">
              <a
                href="https://www.instagram.com/studio_aakaara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#d9c4b0] hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
          <div>
            Nagasandra,<br />
            Bangalore- 560073.
          </div>
        </div>
      </div>
    </footer>
  );
}
