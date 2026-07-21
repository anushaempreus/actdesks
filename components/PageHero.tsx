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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-brand-navy/60" />
      <div className="container-x relative text-white text-center">
        {subtitle && <p className="eyebrow !text-brand-orange">{subtitle}</p>}
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto leading-none text-white">
          {title}
        </h1>
      </div>
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
