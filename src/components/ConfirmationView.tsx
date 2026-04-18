import { motion } from 'motion/react';
import { CheckCircle2, QrCode, Download, Share2, Home } from 'lucide-react';
import { Train } from '../types';

interface ConfirmationViewProps {
  train: Train;
  passenger: any;
  onHome: () => void;
}

export default function ConfirmationView({ train, passenger, onHome }: ConfirmationViewProps) {
  const pnr = Math.floor(Math.random() * 9000000000) + 1000000000;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto py-8"
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-green-600 p-8 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black tracking-tight">BOOKING SUCCESSFUL!</h2>
          <p className="opacity-80 mt-1 font-bold tracking-widest text-sm uppercase">PNR: {pnr}</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Ticket Header */}
          <div className="flex justify-between items-start border-b border-dashed border-slate-200 pb-6">
            <div>
               <h3 className="text-xl font-black text-irctc-blue">{train.name}</h3>
               <p className="text-sm font-bold text-slate-500">Train No: {train.number}</p>
            </div>
            <div className="text-right">
               <QrCode className="w-12 h-12 text-slate-800" />
            </div>
          </div>

          {/* Journey Section */}
          <div className="flex justify-between items-center text-center">
            <div>
               <div className="text-2xl font-black text-slate-900">{train.departureTime}</div>
               <div className="text-sm font-bold text-irctc-blue uppercase">{train.from}</div>
            </div>
            <div className="flex-1 flex flex-col items-center px-6">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 w-full mb-1">{train.duration}</div>
               <div className="w-2 h-2 bg-slate-300 rounded-full" />
            </div>
            <div>
               <div className="text-2xl font-black text-slate-900">{train.arrivalTime}</div>
               <div className="text-sm font-bold text-irctc-blue uppercase">{train.to}</div>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="bg-slate-50 rounded-lg p-5 space-y-4">
             <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Passenger Details</span>
                <div className="text-[10px] font-bold text-green-600 border border-green-200 px-2 py-0.5 rounded italic">CONFIRMED (CNF)</div>
             </div>
             
             {passenger.passengers.map((p: any, i: number) => (
               <div key={i} className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-bold text-slate-800">{i + 1}. {p.name}</span>
                    <span className="text-slate-500 ml-2 text-xs">({p.age}, {p.gender})</span>
                  </div>
                  <div className="text-xs font-bold text-slate-600">S4, Berth {20 + i}</div>
               </div>
             ))}

             <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Contact</span>
                <div className="text-xs font-bold text-slate-800">{passenger.contactInfo.email}</div>
             </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-4 pt-4">
             <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <Download className="w-5 h-5 text-irctc-blue" />
                <span className="text-[10px] font-bold text-slate-600">PRINT</span>
             </button>
             <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <Share2 className="w-5 h-5 text-irctc-blue" />
                <span className="text-[10px] font-bold text-slate-600">SHARE</span>
             </button>
             <button 
               onClick={onHome}
               className="flex flex-col items-center gap-2 p-3 rounded-lg bg-irctc-blue hover:bg-[#002880] transition-colors"
             >
                <Home className="w-5 h-5 text-white" />
                <span className="text-[10px] font-bold text-white">HOME</span>
             </button>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest px-8 leading-relaxed">
        Please carry an original ID proof during the journey. Have a safe travel with RailEase!
      </p>
    </motion.div>
  );
}
