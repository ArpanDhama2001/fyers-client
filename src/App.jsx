import { useEffect, useRef, useState } from "react";
import { deleteAllData } from "./api/mogoDB/service";
import "./App.css";
import MarketData from "./components/MarketData";
import SetAccessToken from "./components/SetAccessToken";
import { getAccessTokenFromDB } from "./utils/tokenManager";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshTokenExpiry, setRefreshTokenExpiry] = useState();

  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  async function deleteData() {
    try {
      await deleteAllData();
      console.log("All data deleted successfully.");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  useEffect(() => {
    const fetchToken = async () => {
      const response = await getAccessTokenFromDB();
      // console.warn("App.jsx:", response);
      setAccessToken(response.data.access_token);
      setRefreshTokenExpiry(response.data.refresh_token_expiry);
    };

    fetchToken();
  }, []);

  useEffect(() => console.log("Access Token Modified"), [accessToken]);

  return (
    <div className="mt-4 flex-col gap-2">
      <h1 className="text-3xl font-bold text-center">Dharmendra Dhama</h1>

      <SetAccessToken
        scrollTo={scrollToSection}
        setAccessToken={setAccessToken}
        refreshTokenExpiry={refreshTokenExpiry}
      />

      <div className="min-h-screen bg-gray-50 py-10">
        <MarketData ref={sectionRef} accessToken={accessToken} />
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={deleteData}>
        Delete All Data
      </button>
    </div>
  );
}

export default App;
