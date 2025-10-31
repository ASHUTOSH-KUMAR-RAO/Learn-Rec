"use client";


import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  id,
  createdAt,
  duration,
  thumbnail,
  title,
  userImg,
  username,
  views,
  visibility,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={290}
        height={160}
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image
              src="/assets/icons/eye.svg"
              alt="views"
              width={24}
              height={24}
            />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image
          src="/assets/icons/link.svg"
          alt="copy link"
          width={24}
          height={24}
        />
      </button>
      {duration && (
        <div className="duration">
          {Math.ceil(duration / 60)}:{(duration % 60).toString().padStart(2, "0")}
        </div>
      )}
    </Link>
  );

};

export default VideoCard;
