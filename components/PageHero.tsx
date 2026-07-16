import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "/images/ACT-Decks-Exerior-hd.jpg",
  video,
  poster,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  poster?: string;
}) {
  return (
    <section className="relative h-[320px] md:h-[420px] flex items-center overflow-hidden">
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image src={image} alt="" fill priority className="object-cover" />
      )}
      <div className="absolute inset-0 bg-brand-navy/70" />
      <div className="container-x relative text-white">
        {subtitle && <p className="eyebrow !text-brand-orange">{subtitle}</p>}
        <h1 className="font-heading font-bold text-4xl md:text-6xl max-w-3xl leading-tight text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
