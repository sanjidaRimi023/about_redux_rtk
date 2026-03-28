import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto, fetchvideo } from "../api/mediaApi";
import { setError, setLoading, setResult } from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

export default function ResultGrid() {
  const { query, loading, error, activeTab, results } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "photo") {
          let res = await fetchPhoto(query);
          data = (res?.results || []).map((items) => ({
            id: items.id,
            title: items.slug,
            description: items.description,
            type: "photo",
            src: items.urls.full,
            thamb: items.urls.thumb,
          }));
        }
        if (activeTab === "video") {
          let res = await fetchvideo(query);
          console.log("vedio response",res);
          data = (res?.videos || []).map((vedioItem) => ({
            id: vedioItem.id,
            type: "video",
            title: vedioItem.user.name || "video",
            thamb: vedioItem.image,
            src: vedioItem.video_files[0].link,
          }));
        }
        dispatch(setResult(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab]);
  if (!query.trim()) {
    return (
      <div className="py-20 text-center text-gray-400">
        <p className="text-lg font-medium">Start searching</p>
        <p className="text-sm">Type something to see photos or videos</p>
      </div>
    );
  }
  if (error)
    return (
      <div className="py-20 text-center text-red-500 font-medium">
        Failed to load results. Please try again.
      </div>
    );

  if (loading)
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="aspect-3/4 animate-pulse rounded-2xl bg-gray-200"
          />
        ))}
      </div>
    );

  return (
    <div className="my-8">
      {!results.length && query && !loading ? (
        <p className="text-center text-gray-500">
          No results found for "{query}"
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
