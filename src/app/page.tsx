import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <main className="space-y-12">
          {/* Profile Section */}
          <section className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <Image
                src="https://github.com/t4ichi.png"
                alt="Ito Taichi"
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover border-4 border-blue-200"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Ito Taichi
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Web developer
            </p>
          </section>

          {/* Navigation Cards */}
          <section className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            {/* Ramen Link */}
            <Link
              href="/ramens"
              className="group flex flex-col items-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors duration-200">
                <SteamingBowlColor className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">
                Ramen
              </span>
            </Link>

            {/* GitHub Link */}
            <a
              href="https://github.com/t4ichi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="GitHub"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                GitHub
              </span>
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
