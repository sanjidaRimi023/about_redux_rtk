import ResultGrid from "./components/ResultGrid";
import Searchbar from "./components/Searchbar";
import TabsComp from "./components/Tabs";

export default function App() {
  return (
    <>
     <section className="container mx-auto">
       <Searchbar />
      <TabsComp />
      <ResultGrid />
     </section>
    </>
  );
}
