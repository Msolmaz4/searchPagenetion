import Home from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  return (
    <div className="flex">
      <div className="w-48  h-[100vh] pl-6 pt-12 mt-36 pr-8">
        <Search />{" "}
      </div>
      <div>
        {" "}
        <Home />{" "}
      </div>
    </div>
  );
}
