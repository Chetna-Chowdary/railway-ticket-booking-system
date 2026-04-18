import { motion } from 'motion/react';
import { Train as TrainIcon } from 'lucide-react';

export default function TrainAnimation() {
  return (
    <div className="w-full h-20 relative overflow-hidden bg-[#e1e8ed] rounded-lg mt-8 flex items-end">
      {/* Tracks */}
      <div className="absolute bottom-[20px] left-0 w-full h-[4px] bg-[#666]" />

      {/* Train Engine and Cars */}
      <motion.div
        className="absolute bottom-[24px] flex gap-1"
        initial={{ left: '-100%' }}
        animate={{ left: '50%' }}
        style={{ translateX: '-50%' }}
        transition={{
          duration: 3,
          ease: 'easeOut',
        }}
      >
        {/* Engine Front */}
        <div className="w-12 h-10 bg-[#152951] rounded-tl-[20px] rounded-tr-[4px] relative">
           <div className="absolute top-[10px] left-[6px] w-[12px] h-[12px] bg-[#ffd700] rounded-full shadow-[0_0_10px_#ffd700]" />
        </div>
        
        {/* Cars */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-10 h-10 bg-irctc-blue rounded-t-[4px] relative">
             <div className="absolute top-[8px] left-[4px] right-[4px] h-[10px] bg-white/30" />
          </div>
        ))}
      </motion.div>

      {/* Scenery details could be added here if needed, but keeping it minimal as per spec */}
    </div>
  );
}
