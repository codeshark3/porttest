import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <div className="mb-2 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
      </div>
      <div className="m-2 flex items-center justify-center gap-x-4">
        <Link href=" https://www.linkedin.com/in/joel-john-otchere-baffour">
          <FaLinkedin size={20} />
        </Link>
        <Link href="https://github.com/codeshark3">
          <FaGithub size={20} />
        </Link>
        {/* <Link href="https://instagram.com/kevinrush">
          <FaInstagram size={20} />
        </Link> */}
        <Link href="">
          {" "}
          <FaSquareXTwitter size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
