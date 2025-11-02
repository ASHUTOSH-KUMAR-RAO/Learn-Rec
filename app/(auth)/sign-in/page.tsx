"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {

  const handleSignIn = async()=>{
      return await authClient.signIn.social({provider:"google"})
  }
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            height={40}
            width={40}
          />
          <h1>LearN-Rec</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="star"
                  height={20}
                  width={20}
                />
              ))}
            </figure>
            <p>
              LearN-Rec makes screen recording easy.from quick through to fall
              presentation. it's fast and smooth.ans sharable in seconds{" "}
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                height={64}
                width={64}
                className="rounded-full"
              />
              <div>
                <h2>Jason Revier</h2>
                <p>Product Designer and Nova </p>
              </div>
            </article>
          </section>
        </div>
        <p>LearN-ReC {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              height={40}
              width={40}
            />
            <h1>LearN-Rec</h1>
          </Link>
          <p>
            Create and Share Your very First <span>LearN-Rec Video</span>in no
            time !
          </p>
          <button
          onClick={handleSignIn}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="google-icon"
              height={20}
              width={20}
            />
            Sign in with Google
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
