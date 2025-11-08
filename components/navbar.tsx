"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
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
            <button onClick={() => router.push(`/profile/${user?.id}`)}>
              <Image
                src={user.image || " "} 
                alt="User"
                width={48}
                height={48}
                className="rounded-full aspect-square"
              />
            </button>
            <button
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
              className="cursor-pointer"
            >
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
