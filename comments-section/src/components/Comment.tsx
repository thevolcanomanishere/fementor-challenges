/// <reference types="vite-plugin-svgr/client" />
import Data from "../../data.json";
import { ReactComponent as IconReply } from "../svgs/icon-reply.svg";

type Reply = typeof Data.comments[number]["replies"][number];

const Comment = ({
  comment,
  key,
  isReply,
}: {
  comment: any;
  key?: number;
  isReply?: boolean;
}) => {
  const createImageUri = (comment: { user: { image: { png: string } } }) => {
    const uri = comment.user.image.png.replace("./images/avatars", "../assets");
    return new URL(uri, import.meta.url).href;
  };

  const renderAt = (comment: Reply) => {
    <span className="text-blue-900">@{comment.replyingTo}</span>;
  };

  const imageUri = createImageUri(comment);

  return (
    <section key={key} className="bg-white rounded-lg my-2 mx-4 p-3 shadow">
      <div className="flex flex-row space-x-6">
        <img className="w-10 h-10 bg-black rounded-full" src={imageUri} />
        <div className="flex flex-row  space-x-6 self-center">
          <h2 className="text-lg font-bold">{comment.user.username}</h2>
          <span className="text-lg text-gray-600">{comment.createdAt}</span>
        </div>
      </div>
      <p className="my-5 font-sans text-gray-600">
        {renderAt(comment)}
        {comment.content}
      </p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between space-x-5 p-2 rounded-lg bg-[#F5F5FC]">
          <div className="font-bold text-gray-400">+</div>
          <div className="font-bold text-scoreColor">{comment.score}</div>
          <div className="font-bold text-gray-400">-</div>
        </div>
        <div className="flex flex-row space-x-1 self-center">
          <div className="pt-[5px]">
            <IconReply />
          </div>
          <div className="text-scoreColor font-extrabold">Reply</div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
