import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/Authcontext";
import LoddingSpenner from "../../Component/LoddingSpenner";
import HomeSlider from "./HomeSlider";
import Card from "../../Component/Card";


const Home = () => {
  const { user, loading } = useContext(AuthContext);

  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 


    fetch("http://localhost:3000/latestModels", {
    
    })
      .then(async (res) => {
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || "Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
   
        if (Array.isArray(data)) {
          setAllData(data);
        } else {
          console.warn("Unexpected response:", data);
          toast.error("Unexpected response from server");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch Error:", err);
        toast.error("Failed to load model details!");
        setIsLoading(false);
      });
  }, [user]);

  // ✅ Loading spinner
  if (loading || isLoading) {
    return <LoddingSpenner />;
  }

  return (
    <div>
      <HomeSlider />
      <div className="w-11/12 mx-auto border-rose-500">
        <div className="my-8">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 text-center"
          >
            Explore the AI Universe
          </h1>
          <p className="text-gray-500 text-lg md:text-xl text-center">
            Browse all available AI models with ease and insight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {allData.length > 0 ? (
            allData.map((item) => <Card key={item._id} data={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No models available.
            </p>
          )}
        </div>
      </div>
<div>
  {/* <BestRegerud></BestRegerud> */}
</div>





    </div>
  );
};

export default Home;
