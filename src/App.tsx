import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import StationSearch from './components/StationSearch';
import TrainAnimation from './components/TrainAnimation';
import TrainCard from './components/TrainCard';
import BookingForm from './components/BookingForm';
import ConfirmationView from './components/ConfirmationView';
import { MOCK_TRAINS, STATIONS } from './constants';
import { SearchParams, Train } from './types';
import { ArrowLeft, Filter, SortAsc, LayoutGrid, Search } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'home' | 'results' | 'booking' | 'confirmation'>('home');
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const [passengerDetails, setPassengerDetails] = useState<any>(null);

  const filteredTrains = useMemo(() => {
    if (!searchParams) return [];
    return MOCK_TRAINS.filter(train => 
      train.from === searchParams.from && train.to === searchParams.to
    );
  }, [searchParams]);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setView('results');
  };

  const startBooking = (train: Train) => {
    setSelectedTrain(train);
    setView('booking');
  };

  const confirmBooking = (details: any) => {
    setPassengerDetails(details);
    setView('confirmation');
  };

  const fromStation = STATIONS.find(s => s.code === searchParams?.from);
  const toStation = STATIONS.find(s => s.code === searchParams?.to);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-irctc-blue selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full flex-1 flex flex-col justify-center p-10 gap-10 min-h-[calc(100vh-80px)]"
            >
              <div className="max-w-6xl mx-auto w-full text-center mb-4">
                <h2 className="text-4xl font-black text-irctc-blue tracking-tight uppercase mb-2">
                  Plan Your Journey
                </h2>
                <p className="text-text-muted font-bold text-sm tracking-widest uppercase">
                  Fast • Reliable • Modern
                </p>
              </div>

              {/* Search Section */}
              <StationSearch onSearch={handleSearch} />

              {/* Train Animation */}
              <div className="max-w-6xl mx-auto w-full mt-auto">
                <TrainAnimation />
              </div>
            </motion.div>
          ) : view === 'results' ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-6xl mx-auto px-4 py-8"
            >
              {/* Results Header */}
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                   <button 
                     onClick={() => setView('home')}
                     className="flex items-center gap-2 text-irctc-blue font-bold text-sm mb-4 hover:translate-x-[-4px] transition-transform"
                   >
                     <ArrowLeft className="w-4 h-4" /> MODIFY SEARCH
                   </button>
                   <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                     {fromStation?.name} <span className="text-irctc-blue">→</span> {toStation?.name}
                   </h2>
                   <p className="text-slate-500 font-bold mt-1 uppercase text-sm flex gap-4">
                      <span>{searchParams?.date}</span>
                      <span>|</span>
                      <span>{searchParams?.class}</span>
                      <span>|</span>
                      <span>{filteredTrains.length} Trains Found</span>
                   </p>
                </div>

                <div className="flex gap-3">
                   <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-irctc-blue transition-colors">
                      <Filter className="w-4 h-4" /> FILTER
                   </button>
                   <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-irctc-blue transition-colors">
                      <SortAsc className="w-4 h-4" /> SORT BY
                   </button>
                   <div className="w-[1px] h-8 bg-slate-200 mx-2" />
                   <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold shadow-lg">
                      <LayoutGrid className="w-4 h-4" /> LIST VIEW
                   </button>
                </div>
              </div>

              {/* Train List */}
              <div className="space-y-6 pb-20">
                {filteredTrains.length > 0 ? (
                  filteredTrains.map((train) => (
                    <div key={train.id}>
                      <TrainCard train={train} onBook={startBooking} />
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300">
                     <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="text-slate-300 w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-800">No trains found for this route</h3>
                     <p className="text-slate-500 mt-2">Try searching between Mumbai and New Delhi to see sample results.</p>
                     <button 
                       onClick={() => setView('home')}
                       className="mt-6 bg-irctc-blue text-white px-8 py-2 rounded-lg font-bold"
                     >
                       GO BACK
                     </button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : view === 'booking' ? (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="px-4 py-12 bg-bg-gray"
            >
              {selectedTrain && (
                <BookingForm 
                  train={selectedTrain} 
                  onConfirm={confirmBooking}
                  onCancel={() => setView('results')}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-12"
            >
              {selectedTrain && passengerDetails && (
                <ConfirmationView 
                  train={selectedTrain} 
                  passenger={passengerDetails}
                  onHome={() => setView('home')}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-irctc-blue py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-blue-100">
           <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black text-white tracking-tighter mb-4 uppercase">
                RAIL CONNECT
              </h2>
              <p className="max-w-sm text-sm opacity-60 leading-relaxed font-medium">
                RailEase is the leading platform for reliable and fast railway bookings in India. We strive to provide a seamless travel experience for millions of passengers daily.
              </p>
           </div>
           <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Company</h4>
              <ul className="space-y-3 text-sm font-medium opacity-80">
                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Connect</h4>
              <ul className="space-y-3 text-sm font-medium opacity-80">
                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Email Support</a></li>
              </ul>
           </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs font-black tracking-widest text-white/40">
           © 2026 RAIL CONNECT - INDIAN RAILWAYS PARTNER. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
