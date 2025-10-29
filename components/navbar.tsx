"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {};
const Navbar = () => {
  const router = useRouter()
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={56}
            height={56}
          />
          <h1>LearN-ReC</h1>
        </Link>
        {user && (
          <figure>
            <button onClick={()=>router.push("/profile/123")}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={48}
                height={48}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="Logout"
                width={30}
                height={30}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
