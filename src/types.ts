export interface Station {
  id: string;
  name: string;
  code: string;
}

export interface Train {
  id: string;
  number: string;
  name: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  runsOn: string[];
  fares: {
    class: 'SL' | '3A' | '2A' | '1A' | 'CC' | 'EC' | '2S';
    price: number;
    availability: string;
  }[];
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
  class: string;
}
