import Image from "next/image";

function CardView({ data }) {
  const { post_hint, url_overridden_by_dest, preview } = data;

  if (post_hint === "link") {
    return (
      <>
        <a href={url_overridden_by_dest} target="_blank">
          {" "}
          {url_overridden_by_dest}{" "}
        </a>
      </>
    );
  }

  if (post_hint === "image") {
    return (
      <div className="min-w-full h-64 relative mt-2">
        <Image
          src={url_overridden_by_dest}
          alt="..."
          fill={true}
          objectFit="cover"
        />
      </div>
    );
  }

  if (post_hint === "hosted:video") {
  }

  return <></>;
}

export default CardView;
