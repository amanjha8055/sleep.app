import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
        <div className="mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="inline-block mx-4"
          >
            <img
              src={viteLogo}
              className="h-32 p-4 transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.8)] animate-pulse"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="inline-block mx-4"
          >
            <img
              src={reactLogo}
              className="h-32 p-4 transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.8)] animate-[spin_15s_linear_infinite]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-7xl leading-tight font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 animate-fade-in">
          Sleep App
        </h1>
        <div className="p-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="rounded-full border-2 border-transparent px-8 py-4 text-xl font-semibold bg-linear-to-r from-purple-500 to-pink-500 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-300 transform"
          >
            🌙 Count is {count}
          </button>
          <p className="mt-6 text-lg text-gray-300">
            Edit{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-gray-400 text-sm">
          Click on the Vite and React logos to learn more ✨
        </p>
      </div>
    </div>
  );
}

export default App;
