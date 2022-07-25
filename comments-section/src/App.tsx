/// <reference types="vite-plugin-svgr/client" />
import Data from "../data.json";
import NewComment from "./components/NewComment";
import Thread from "./components/Thread";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-center m-auto">
      {Data.comments.map((comment, index) => {
        return <Thread thread={comment} propKey={index} />;
      })}
      <div>
        <NewComment thread={Data} />
      </div>
    </div>
  );
};

export default App;
