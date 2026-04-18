import { Station, Train } from './types';

export const STATIONS: Station[] = [
  { id: '1', name: 'New Delhi', code: 'NDLS' },
  { id: '2', name: 'Mumbai Central', code: 'MMCT' },
  { id: '3', name: 'Howrah Junction', code: 'HWH' },
  { id: '4', name: 'Chennai Central', code: 'MAS' },
  { id: '5', name: 'Bangalore City', code: 'SBC' },
  { id: '6', name: 'Ahmedabad Junction', code: 'ADI' },
  { id: '7', name: 'Pune Junction', code: 'PUNE' },
  { id: '8', name: 'Secunderabad Junction', code: 'SC' },
  { id: '9', name: 'Jaipur Junction', code: 'JP' },
  { id: '10', name: 'Lucknow Charbagh', code: 'LKO' },
  { id: '11', name: 'Patna Junction', code: 'PNBE' },
  { id: '12', name: 'Trivandrum Central', code: 'TVC' },
  { id: '13', name: 'Guwahati', code: 'GHY' },
  { id: '14', name: 'Bhopal Junction', code: 'BPL' },
  { id: '15', name: 'Chandigarh', code: 'CDG' },
];

export const MOCK_TRAINS: Train[] = [
  // NDLS Routes
  { id: '12951', number: '12951', name: 'Mumbai Rajdhani', from: 'NDLS', to: 'MMCT', departureTime: '16:30', arrivalTime: '08:35', duration: '16h 05m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 4750, availability: 'AVL 02' }, { class: '2A', price: 3240, availability: 'AVL 05' }, { class: '3A', price: 2150, availability: 'WL 12' }] },
  { id: '12301', number: '12301', name: 'Kolkata Rajdhani', from: 'NDLS', to: 'HWH', departureTime: '16:55', arrivalTime: '09:50', duration: '16h 55m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 4890, availability: 'AVL 01' }, { class: '2A', price: 3350, availability: 'RAC 04' }] },
  { id: '12616', number: '12616', name: 'Grand Trunk Express', from: 'NDLS', to: 'MAS', departureTime: '18:40', arrivalTime: '06:20', duration: '35h 40m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 3150, availability: 'WL 01' }, { class: '3A', price: 2100, availability: 'AVL 12' }, { class: 'SL', price: 780, availability: 'WL 105' }] },
  { id: '22692', number: '22692', name: 'Bangalore Rajdhani', from: 'NDLS', to: 'SBC', departureTime: '20:45', arrivalTime: '05:20', duration: '32h 35m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 5900, availability: 'AVL 04' }, { class: '2A', price: 3950, availability: 'AVL 08' }] },
  { id: '12002', number: '12002', name: 'NDLS Bhopal Shatabdi', from: 'NDLS', to: 'BPL', departureTime: '06:00', arrivalTime: '14:25', duration: '08h 25m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: 'EC', price: 2100, availability: 'AVL 24' }, { class: 'CC', price: 1150, availability: 'AVL 80' }] },
  
  // MMCT Routes
  { id: '12431', number: '12431', name: 'Rajdhani Special', from: 'MMCT', to: 'NDLS', departureTime: '17:10', arrivalTime: '09:40', duration: '16h 30m', runsOn: ['Tue','Thu','Sat'], fares: [{ class: '1A', price: 4750, availability: 'RAC 05' }, { class: '2A', price: 3240, availability: 'AVL 10' }] },
  { id: '12267', number: '12267', name: 'ADI Duronto Express', from: 'MMCT', to: 'ADI', departureTime: '23:25', arrivalTime: '05:55', duration: '06h 30m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 2200, availability: 'AVL 15' }, { class: '2A', price: 1550, availability: 'AVL 40' }] },
  
  // HWH Routes
  { id: '12302', number: '12302', name: 'HWH-NDLS Rajdhani', from: 'HWH', to: 'NDLS', departureTime: '16:50', arrivalTime: '09:55', duration: '17h 05m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 4890, availability: 'AVL 02' }, { class: '2A', price: 3350, availability: 'RAC 08' }] },
  { id: '12860', number: '12860', name: 'Gitanjali Express', from: 'HWH', to: 'MMCT', departureTime: '13:50', arrivalTime: '21:20', duration: '31h 30m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 2950, availability: 'WL 20' }, { class: '3A', price: 2050, availability: 'AVL 55' }] },
  
  // MAS Routes
  { id: '12621', number: '12621', name: 'Tamil Nadu Express', from: 'MAS', to: 'NDLS', departureTime: '22:00', arrivalTime: '06:30', duration: '32h 30m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 3150, availability: 'AVL 05' }, { class: '3A', price: 2100, availability: 'AVL 20' }] },
  { id: '12609', number: '12609', name: 'MAS-SBC Intercity', from: 'MAS', to: 'SBC', departureTime: '13:35', arrivalTime: '20:00', duration: '06h 25m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: 'CC', price: 650, availability: 'AVL 150' }, { class: '2S', price: 180, availability: 'AVL 400' }] },

  // SBC Routes
  { id: '12627', number: '12627', name: 'Karnataka Express', from: 'SBC', to: 'NDLS', departureTime: '19:20', arrivalTime: '10:30', duration: '39h 10m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 3850, availability: 'WL 15' }, { class: '3A', price: 2650, availability: 'AVL 40' }] },
  
  // Cross Routes
  { id: '12723', number: '12723', name: 'Telangana Express', from: 'SC', to: 'NDLS', departureTime: '06:50', arrivalTime: '09:05', duration: '26h 15m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 2850, availability: 'AVL 10' }, { class: '3A', price: 1950, availability: 'AVL 30' }] },
  { id: '12973', number: '12973', name: 'JP-SC Express', from: 'JP', to: 'SC', departureTime: '20:20', arrivalTime: '07:30', duration: '35h 10m', runsOn: ['Sat'], fares: [{ class: '2A', price: 2750, availability: 'AVL 05' }, { class: '3A', price: 1850, availability: 'AVL 15' }] },
  { id: '12222', number: '12222', name: 'HWH-PUNE Duronto', from: 'HWH', to: 'PUNE', departureTime: '08:20', arrivalTime: '09:45', duration: '25h 25m', runsOn: ['Thu', 'Sat'], fares: [{ class: '2A', price: 3450, availability: 'RAC 10' }, { class: '3A', price: 2450, availability: 'AVL 45' }] },
  
  // Northern/Central
  { id: '12011', number: '12011', name: 'Kalka Shatabdi', from: 'NDLS', to: 'CDG', departureTime: '07:40', arrivalTime: '11:05', duration: '03h 25m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: 'EC', price: 1450, availability: 'AVL 12' }, { class: 'CC', price: 850, availability: 'AVL 60' }] },
  { id: '12229', number: '12229', name: 'Lucknow Mail', from: 'NDLS', to: 'LKO', departureTime: '22:00', arrivalTime: '06:50', duration: '08h 50m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 1850, availability: 'AVL 05' }, { class: '2A', price: 1450, availability: 'AVL 15' }] },
  
  // Eastern/Patna
  { id: '12309', number: '12309', name: 'Patna Rajdhani', from: 'NDLS', to: 'PNBE', departureTime: '17:10', arrivalTime: '05:50', duration: '12h 40m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 3450, availability: 'AVL 02' }, { class: '2A', price: 2450, availability: 'AVL 08' }] },
  { id: '22404', number: '22404', name: 'NDLS-PNBE Garib Rath', from: 'NDLS', to: 'PNBE', departureTime: '20:10', arrivalTime: '08:45', duration: '12h 35m', runsOn: ['Mon', 'Wed', 'Fri'], fares: [{ class: '3A', price: 750, availability: 'AVL 120' }] },
  
  // Northeast/Trivandrum
  { id: '12424', number: '12424', name: 'NDLS-GHY Rajdhani', from: 'NDLS', to: 'GHY', departureTime: '16:20', arrivalTime: '18:15', duration: '25h 55m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 5450, availability: 'WL 05' }, { class: '2A', price: 3750, availability: 'AVL 12' }] },
  { id: '12644', number: '12644', name: 'Kerala Express', from: 'NDLS', to: 'TVC', departureTime: '20:10', arrivalTime: '15:15', duration: '43h 05m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '2A', price: 4250, availability: 'WL 25' }, { class: '3A', price: 2950, availability: 'AVL 60' }] },

  // reverse connections
  { id: '12230', number: '12230', name: 'Lucknow Mail', from: 'LKO', to: 'NDLS', departureTime: '23:15', arrivalTime: '07:50', duration: '08h 35m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: '1A', price: 1850, availability: 'AVL 04' }, { class: '2A', price: 1450, availability: 'AVL 10' }] },
  { id: '12012', number: '12012', name: 'Kalka Shatabdi', from: 'CDG', to: 'NDLS', departureTime: '18:23', arrivalTime: '21:55', duration: '03h 32m', runsOn: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], fares: [{ class: 'EC', price: 1450, availability: 'AVL 08' }, { class: 'CC', price: 850, availability: 'AVL 50' }] },
];
