import { Train as TrainIcon, User, Menu, Search, Phone, HelpCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Main Nav */}
      <div className="bg-white border-b-[3px] border-irctc-blue px-10 py-[15px] flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-irctc-orange rounded-full flex items-center justify-center">
             <TrainIcon className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-irctc-blue uppercase">
            RAIL CONNECT
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-5 text-sm font-semibold text-irctc-blue">
           <a href="#" className="hover:opacity-70 transition-opacity">LOGIN</a>
           <a href="#" className="hover:opacity-70 transition-opacity">REGISTER</a>
           <a href="#" className="hover:opacity-70 transition-opacity">CONTACT US</a>
        </div>

        <div className="flex items-center gap-4">
           <button className="p-2 hover:bg-slate-100 rounded-full transition-colors lg:hidden">
              <Menu className="w-5 h-5 text-irctc-blue" />
           </button>
        </div>
      </div>
    </nav>
  );
}
