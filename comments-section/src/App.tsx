/// <reference types="vite-plugin-svgr/client" />
import Data from "../data.json";
import NewComment from "./components/NewComment";
import Thread from "./components/Thread";

const App = () => {
  return (
    <main className="flex flex-col justify-center mx-auto my-14 max-w-[800px]">
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
    </main>
  );
};

export default App;
