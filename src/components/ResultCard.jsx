import { Link } from "react-router";

export default function ResultCard({ item }) {
  const isVideo = item.type === "video";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Media Content */}
      <div className="aspect-square w-full sm:aspect-video md:aspect-3/4">
        {isVideo ? (
          <video
            src={item.src}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <img
            src={item.thamb}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300">
        <div className="p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#03AED2]">
            {item.type}
          </p>
          <h3 className="line-clamp-1 text-lg font-bold leading-tight">
            {item.title || "Untitled"}
          </h3>
          {item.description && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-300">
              {item.description}
            </p>
          )}
          <Link
            to={item.src}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-lg bg-[#03AED2] px-4 py-2 text-xs font-bold transition hover:bg-white hover:text-[#03AED2]"
          >
            View Full {isVideo ? "Video" : "Photo"}
          </Link>
        </div>
      </div>
    </div>
  );
}
