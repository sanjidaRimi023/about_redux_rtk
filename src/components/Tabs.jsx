import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

export default function TabsComp() {
  const tabs = ["photo", "vedio"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <>
      <section>
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, idx) => {
            return (
              <button
                onClick={() => {
                  dispatch(setActiveTab(tab));
                }}
                key={idx}
                className={` px-4 py-2 cursor-pointer font-medium transition ${activeTab === tab ? "border-b-2 border-[#03AED2] text-[#03AED2]" : ""}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
