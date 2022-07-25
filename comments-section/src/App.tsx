/// <reference types="vite-plugin-svgr/client" />
import Data from "../data.json";
import Thread from "./components/thread";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-center m-auto">
      {Data.comments.map((comment, index) => {
        return <Thread thread={comment} propKey={index} />;
      })}
    </div>
  );
};

export default App;
