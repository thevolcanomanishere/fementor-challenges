/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as IconReply } from "../svgs/icon-reply.svg";
import { ReactComponent as IconDelete } from "../svgs/icon-delete.svg";
import { ReactComponent as IconEdit } from "../svgs/icon-edit.svg";

const Comment = ({
  comment,
  currentUser,
  key,
}: {
  comment: any;
  currentUser: { username: string };
  key?: number;
}) => {
  const createImageUri = (comment: { user: { image: { png: string } } }) => {
    const uri = comment.user.image.png.replace(
      "./images/avatars",
      "/src/assets"
    );
    console.log(uri);
    return new URL(uri, import.meta.url).href;
  };

  const renderAt = (comment: any) => {
    if (comment.replyingTo) {
      return <span className="text-blue-900">@{comment.replyingTo} </span>;
    }
  };

  const imageUri = createImageUri(comment);
  return (
    <section
      key={key}
      className="md:flex bg-white rounded-lg my-2 mx-4 p-3 shadow"
    >
      <div className="hidden md:block flex-col align-center p-2 h-[90px] w-12 mr-4 rounded-lg bg-[#F5F5FC]">
        <div className="font-bold text-gray-400 text-center pb-1">+</div>
        <div className="font-bold text-scoreColor text-center">
          {comment.score}
        </div>
        <div className="font-bold text-gray-400 text-center">-</div>
      </div>
      <div>
        <div className="flex flex-row justify-between mr-4">
          <div className="flex flex-row space-x-6">
            <img className="w-10 h-10 bg-black rounded-full" src={imageUri} />
            <div className="flex flex-row  space-x-6 self-center">
              <h2 className="flex text-lg font-bold">
                {comment.user.username}{" "}
                {currentUser.username === comment.user.username && (
                  <span className="text-white h-6 mt-1 px-2 text-sm font-normal bg-[#5458B0] rounded ml-2">
                    you
                  </span>
                )}
              </h2>
              <span className="text-lg text-gray-600">{comment.createdAt}</span>
            </div>
          </div>
          <div className="hidden md:block flex-row space-x-1 self-center">
            {currentUser.username === comment.user.username ? (
              <div className="flex space-x-2  justify-end">
                <div className="pt-[4px]">
                  <IconDelete />
                </div>
                <span className="text-[#ED6368] font-bold">Delete</span>
                <div className="pt-[5px] pl-1">
                  <IconEdit />
                </div>

                <span className="text-[#5357B6] font-bold">Edit</span>
              </div>
            ) : (
              <div className="flex space-x-2 justify-end">
                <div className="pt-[5px]">
                  <IconReply />
                </div>
                <div className="text-scoreColor font-extrabold">Reply</div>
              </div>
            )}
          </div>
        </div>
        <p className="my-5 font-sans text-gray-600">
          {renderAt(comment)}
          {comment.content}
        </p>
      </div>
      <div className="md:hidden flex flex-row justify-between">
        <div className=" flex flex-row justify-between space-x-5 p-2 rounded-lg bg-[#F5F5FC]">
          <div className="font-bold text-gray-400">+</div>
          <div className="font-bold text-scoreColor">{comment.score}</div>
          <div className="font-bold text-gray-400">-</div>
        </div>
        <div className="flex flex-row space-x-1 self-center">
          {currentUser.username === comment.user.username ? (
            <div className="flex space-x-2">
              <div className="pt-[4px]">
                <IconDelete />
              </div>
              <span className="text-[#ED6368] font-bold">Delete</span>
              <div className="pt-[5px] pl-1">
                <IconEdit />
              </div>

              <span className="text-[#5357B6] font-bold">Edit</span>
            </div>
          ) : (
            <>
              <div className="pt-[5px] ">
                <IconReply />
              </div>
              <div className="text-scoreColor font-extrabold">Reply</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comment;
