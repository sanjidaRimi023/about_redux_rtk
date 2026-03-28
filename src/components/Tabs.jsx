import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

export default function TabsComp() {
  const tabs = ["photo", "video"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <>
      <section>
 <div className="inline-flex rounded-xl bg-gray-100 p-1">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => dispatch(setActiveTab(tab))}
      className={`rounded-lg px-6 py-2 text-sm font-semibold capitalize transition-all ${
        activeTab === tab
          ? "bg-white text-[#03AED2] shadow-sm"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {tab}s
    </button>
  ))}
</div>
      </section>
    </>
  );
}
