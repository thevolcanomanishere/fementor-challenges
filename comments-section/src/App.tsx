/// <reference types="vite-plugin-svgr/client" />
import Data from "../data.json";
import NewComment from "./components/NewComment";
import Thread from "./components/Thread";

const App = () => {
  return (
    <div className="flex flex-col justify-center m-auto max-w-[1000px]">
      {Data.comments.map((comment, index) => {
        return (
          <Thread
            thread={comment}
            currentUser={Data.currentUser}
            propKey={index}
          />
        );
      })}
      <div>
        <NewComment thread={Data} />
      </div>
    </div>
  );
};

export default App;
