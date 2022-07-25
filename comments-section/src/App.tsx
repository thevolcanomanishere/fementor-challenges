/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as IconReply } from "./svgs/icon-reply.svg";

const App = () => {
  const renderChat = () => {
    const comment = {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
    };

    const createImageUri = (comment: { user: { image: { png: string } } }) => {
      const uri = comment.user.image.png.replace(
        "./images/avatars",
        "./assets"
      );
      return new URL(uri, import.meta.url).href;
    };

    const imageUri = createImageUri(comment);
    console.log(imageUri);

    return (
      <section className="bg-white rounded m-4 p-3">
        <div className="flex flex-row space-x-6">
          <img className="w-8 h-8 bg-black rounded-full" src={imageUri} />
          <h2 className="text-lg font-bold">{comment.user.username}</h2>
          <span className="text-lg text-gray-600">{comment.createdAt}</span>
        </div>
        <p className="my-5 font-sans text-gray-600">{comment.content}</p>
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
  return (
    <div className="flex flex-col h-screen justify-center m-auto">
      {renderChat()}
    </div>
  );
};

export default App;
