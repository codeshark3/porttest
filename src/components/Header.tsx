import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div className="mb-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Image
          src="/assets/kevinRushLogo.png"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
      <div className="m-2 flex items-center justify-center gap-x-4">
        <FaLinkedin size={20} />
        <FaGithub size={20} />
        <FaInstagram size={20} />
        <FaSquareXTwitter size={20} />
      </div>
    </div>
  );
};

export default Header;
