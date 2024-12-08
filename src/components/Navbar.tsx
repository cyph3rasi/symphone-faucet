import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="https://fallenones.xyz" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}