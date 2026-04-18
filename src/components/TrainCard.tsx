import { Train } from '../types';
import { Clock, Calendar, CheckCircle2, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface TrainCardProps {
  train: Train;
  onBook: (train: Train) => void;
}

export default function TrainCard({ train, onBook }: TrainCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg border-l-[5px] border-irctc-blue grid grid-cols-1 lg:grid-cols-5 p-5 items-center shadow-[0_2px_5px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow mb-3"
    >
      <div className="flex flex-col gap-1 pr-4 lg:border-r border-slate-100">
        <h3 className="text-base font-bold text-irctc-blue uppercase leading-tight">
          {train.name} ({train.number})
        </h3>
        <p className="text-[11px] font-bold text-text-muted">
          Runs On: {['M','T','W','T','F','S','S'].map((day, i) => {
            const runs = train.runsOn.includes(['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]);
            return runs ? day + ' ' : '';
          })}
        </p>
      </div>

      <div className="flex flex-col items-center py-4 lg:py-0">
        <div className="text-lg font-bold text-text-dark">{train.departureTime}</div>
        <div className="text-[11px] font-bold text-text-muted uppercase">{train.from}</div>
      </div>

      <div className="flex flex-col items-center py-2 lg:py-0 px-4">
        <div className="text-xs text-text-muted text-center border-b border-dashed border-slate-300 pb-1 w-full mx-2">
          {train.duration}
        </div>
      </div>

      <div className="flex flex-col items-center py-4 lg:py-0">
        <div className="text-lg font-bold text-text-dark">{train.arrivalTime}</div>
        <div className="text-[11px] font-bold text-text-muted uppercase">{train.to}</div>
      </div>

      <div className="flex items-center gap-2 justify-end lg:pl-4">
         {train.fares.slice(0, 3).map((f, i) => (
           <div 
             key={i} 
             onClick={() => onBook(train)}
             className={`border border-slate-200 p-2 rounded text-center min-w-[75px] cursor-pointer hover:border-irctc-blue transition-colors ${i === 0 ? 'bg-[#eef2f7] border-irctc-blue' : ''}`}
           >
             <div className="text-[10px] font-bold text-text-dark uppercase">{f.class}</div>
             <div className="text-sm font-black text-irctc-blue">₹{f.price.toLocaleString()}</div>
           </div>
         ))}
      </div>
    </motion.div>
  );
}
