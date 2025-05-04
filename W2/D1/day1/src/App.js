import "./App.css";
import bgImage from "./assets/coffeeimage.png";
import { ContentFive } from "./components/ContentFive";
import { ContentFourth } from "./components/ContentFourth";
import { ContentOne } from "./components/ContentOne";
import { ContentSix } from "./components/ContentSix";
import { ContentThree } from "./components/ContentThree";
import { ContentTwo } from "./components/ContentTwo";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
  <div
    className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
    style={{
      backgroundImage: `
        linear-gradient(89.82deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0) 87.45%),
        url(${bgImage})
      `,
    }}
  >
    <Navbar />
    <ContentOne />
  </div>
  {/* Other content sections */}
</div>


      <div>
        <ContentTwo />
      </div>
      <div>
        <ContentThree />
      </div>
      <div>
        <ContentFourth />
      </div>
      <div>
        <ContentFive />
      </div>
      <div>
        <ContentSix />
      </div>
    </>
  );
}

export default App;
