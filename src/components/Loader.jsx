// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-3/4 h-3/4 top-[12.5%] left-[12.5%] border-4 border-green-400 border-t-transparent rounded-full animate-spin [animation-duration:1.2s]"></div>
        <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 border-4 border-green-300 border-t-transparent rounded-full animate-spin [animation-duration:1.6s]"></div>
      </div>
    </div>
  );
}
