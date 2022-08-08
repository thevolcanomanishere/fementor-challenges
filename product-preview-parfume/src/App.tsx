import imageProduct from "./assets/image-product-desktop.jpg";
import imageProductMobile from "./assets/image-product-mobile.jpg";

function App() {
  return (
    <div className="flex h-screen justify-center overflow-hidden relative">
      <div className="flex flex-col lg:flex-row m-auto rounded-b shadow-xl p-10">
        <div className="flex max-w-md group z-10">
          <img
            className="rounded-l-lg object-contain hidden lg:flex"
            src={imageProduct}
            alt="Perfume bottle on a table surrounded by plants"
          />
          <img
            className="rounded-t-lg lg:hidden"
            src={imageProductMobile}
            alt="Perfume bottle on a table surrounded by plants"
          />
        </div>
        <div className="flex flex-col bg-white max-w-md px-10 pt-10 rounded-b-lg lg:rounded-r-lg z-20 bg-clip-padding bg-opacity-70">
          <h2 className="text-xl md:text-2xl text-[#70768F] font-[Montserrat] font-bold">
            P E R F U M E
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-6xl py-5 p font-[Fraunces] font-bold">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-lg md:text-xl font-medium tracking-wider font py-3 lg:py-5 font-[Montserrat] text-[#70768F]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Podge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className="flex flex-row my-6 font-[Fraunces] font-bold">
            <h3 className="text-green-700 text-4xl md:text-5xl">$149.99</h3>
            <p className="text-2xl line-through self-center ml-8 text-[#70768F]">
              $169.99
            </p>
          </div>
          <div className="flex flex-col my-5">
            <button className="border h-16 bg-green-700 active:bg-green-900 rounded-lg">
              <div className="flex flex-row gap-4 justify-center">
                <svg
                  className="self-center"
                  width="15"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                    fill="#FFF"
                  />
                </svg>
                <span className="text-white text-xl font-[Montserrat] font-extrabold">
                  Add to Cart
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-visible z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-1/2 right-1/2 top-1/2 left-1/2  w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
    </div>
  );
}

export default App;
