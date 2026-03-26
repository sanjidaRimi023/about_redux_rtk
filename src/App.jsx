import { fetchPhoto, fetchVedio } from "./api/mediaApi";

export default function App() {
async  function getPhoto() {
   const data = await fetchPhoto("cat");
   console.log(data.results)
  }
  async function getVedio() {
    const data = await fetchVedio("Tigers")
    console.log(data.videos)
  }

  return (
    <>
      <section className="">
        app
        <button onClick={getPhoto} className="border">
          getPhoto
        </button>
          <button onClick={getVedio} className="border">
          getVedio
        </button>
      </section>
    </>
  );
}
