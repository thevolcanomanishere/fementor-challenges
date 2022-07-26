import Comment from "./Comment";
import { FC } from "react";

const Thread: FC<any> = ({
  thread,
  currentUser,
  propKey,
}: {
  thread: any;
  currentUser: { username: string };
  propKey: number;
}) => {
  return (
    <div key={propKey}>
      <Comment comment={thread} currentUser={currentUser} />
      <div className="md:ml-16 ml-4 md:pl-5 border-l-2">
        {/*@ts-ignore*/}
        {thread.replies.map((reply, index) => {
          return (
            <Comment comment={reply} currentUser={currentUser} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Thread;
