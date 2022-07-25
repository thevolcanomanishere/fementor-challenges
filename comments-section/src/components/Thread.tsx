import Comment from "./Comment";
import Data from "../../data.json";
import { FC } from "react";

const Thread: FC<any> = ({
  thread,
  propKey,
}: {
  thread: typeof Data.comments[number];
  propKey: number;
}) => {
  return (
    <div key={propKey}>
      <Comment comment={thread} />
      <div className="ml-4 border-l-2">
        {thread.replies.map((reply, index) => {
          return <Comment comment={reply} key={index} isReply={true} />;
        })}
      </div>
    </div>
  );
};

export default Thread;
