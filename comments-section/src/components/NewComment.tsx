import Data from "../../data.json";

const NewComment = ({ thread }: { thread: typeof Data }) => {
  const createImageUri = (thread: typeof Data) => {
    const uri = thread.currentUser.image.png.replace(
      "./images/avatars",
      "/assets"
    );
    return new URL(uri, import.meta.url).href;
  };

  const imageUri = createImageUri(thread);
  return (
    <section className="flex flex-col md:flex-row bg-white rounded-lg my-2 mx-4 p-3 shadow">
      <img className="md:w-10 md:h-10 mx-3 hidden md:flex" src={imageUri} />
      <textarea
        className="border w-[100%] h-24 rounded self-center mb-4 p-2"
        placeholder="Add a comment..."
      />

      <button className="text-white text-sm rounded-lg w-28 h-12 mx-3 bg-[#5458B0] hidden md:block">
        SEND
      </button>

      <div className="flex flex-row justify-between md:hidden">
        <img className="w-12 h-12" src={imageUri} alt="Profile picture" />
        <button className="text-white rounded-lg w-24 h-12 bg-[#5458B0]">
          SEND
        </button>
      </div>
    </section>
  );
};

export default NewComment;
