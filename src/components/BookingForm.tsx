import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, ArrowRight, CreditCard } from 'lucide-react';
import { Train } from '../types';

interface BookingFormProps {
  train: Train;
  onConfirm: (passengerDetails: any) => void;
  onCancel: () => void;
}

interface Passenger {
  name: string;
  age: string;
  gender: string;
}

export default function BookingForm({ train, onConfirm, onCancel }: BookingFormProps) {
  const [passengers, setPassengers] = useState<Passenger[]>([
    { name: '', age: '', gender: 'Male' }
  ]);
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
  });

  const handleAddPassenger = () => {
    if (passengers.length < 4) {
      setPassengers([...passengers, { name: '', age: '', gender: 'Male' }]);
    }
  };

  const handleRemovePassenger = (index: number) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter((_, i) => i !== index));
    }
  };

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const newPassengers = [...passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setPassengers(newPassengers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({ passengers, contactInfo });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200"
    >
      <div className="bg-irctc-blue p-6 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CreditCard className="w-6 h-6" /> TICKET BOOKING
          </h2>
          <div className="mt-2 text-sm opacity-80 flex gap-4">
            <span>{train.number} - {train.name}</span>
            <span>|</span>
            <span>{train.from} → {train.to}</span>
          </div>
        </div>
        <div className="text-right">
           <div className="text-sm font-bold opacity-60 uppercase mb-1">Total Bill</div>
           <div className="text-2xl font-black tracking-tight">₹{(train.fares[0].price * passengers.length).toLocaleString()}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        {/* Passengers Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h3 className="font-bold text-irctc-blue flex items-center gap-2">
               <User className="w-4 h-4" /> PASSENGER DETAILS ({passengers.length}/4)
            </h3>
            {passengers.length < 4 && (
              <button 
                type="button" 
                onClick={handleAddPassenger}
                className="text-xs font-bold text-irctc-orange hover:underline uppercase"
              >
                + Add Passenger
              </button>
            )}
          </div>

          {passengers.map((p, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end bg-bg-gray/50 p-4 rounded-lg relative group">
              {passengers.length > 1 && (
                <button 
                  type="button"
                  onClick={() => handleRemovePassenger(index)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-xs">×</span>
                </button>
              )}
              
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-muted uppercase">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-10 px-3 border border-border-minimal rounded bg-white text-sm outline-none focus:ring-1 focus:ring-irctc-blue"
                  value={p.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-muted uppercase">Age</label>
                <input
                  required
                  type="number"
                  placeholder="Age"
                  className="w-full h-10 px-3 border border-border-minimal rounded bg-white text-sm outline-none focus:ring-1 focus:ring-irctc-blue"
                  value={p.age}
                  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-muted uppercase">Gender</label>
                <select
                  className="w-full h-10 px-3 border border-border-minimal rounded bg-white text-sm outline-none focus:ring-1 focus:ring-irctc-blue cursor-pointer"
                  value={p.gender}
                  onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-6 pt-4">
          <h3 className="font-bold text-irctc-blue flex items-center gap-2 border-b border-slate-100 pb-2">
             <ArrowRight className="w-4 h-4" /> CONTACT INFORMATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-muted uppercase">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  className="w-full pl-10 h-10 border border-border-minimal rounded bg-bg-gray text-sm outline-none focus:ring-1 focus:ring-irctc-blue"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-muted uppercase">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="tel"
                  placeholder="10 digit mobile number"
                  className="w-full pl-10 h-10 border border-border-minimal rounded bg-bg-gray text-sm outline-none focus:ring-1 focus:ring-irctc-blue"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex gap-4 justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="px-8 py-2.5 bg-irctc-orange text-white rounded font-bold uppercase shadow-lg hover:shadow-orange-200 transition-all flex items-center gap-2"
          >
            PROCEED TO PAY <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
