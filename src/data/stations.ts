export interface Station {
  id: string;
  x: number;
  ft: number;
  name: string;
  opt?: boolean;
  mobileHide?: boolean;
  eolus?: boolean;
}

export const STATIONS: Station[] = [
  { id: 'dfw',        x: 0,    ft: 430,   name: 'Dallas',        opt: true },
  { id: 'dro',        x: 110,  ft: 6512,  name: 'Durango' },
  { id: 'needleton',  x: 250,  ft: 8200,  name: 'Needleton',     mobileHide: true },
  { id: 'camp',       x: 390,  ft: 11000, name: 'Chicago Basin' },
  { id: 'twin',       x: 470,  ft: 12500, name: 'Twin Lakes',    opt: true },
  { id: 'windom',     x: 540,  ft: 14089, name: 'Windom' },
  { id: 'sunlight',   x: 610,  ft: 14059, name: 'Sunlight',      mobileHide: true },
  { id: 'camp2',      x: 690,  ft: 11000, name: 'Camp',          opt: true },
  { id: 'eolus',      x: 760,  ft: 14083, name: 'Eolus',         eolus: true },
  { id: 'camp3',      x: 820,  ft: 11000, name: 'Camp',          eolus: true, opt: true },
  { id: 'needleton2', x: 880,  ft: 8200,  name: 'Needleton',     opt: true },
  { id: 'dro2',       x: 940,  ft: 6512,  name: 'Durango' },
  { id: 'dfw2',       x: 1000, ft: 430,   name: 'Dallas',        opt: true },
];

export const SECTION_FOR: Record<string, string> = {
  dfw: 'thu', dro: 'thu',
  needleton: 'fri', camp: 'fri',
  twin: 'sat', windom: 'sat', sunlight: 'sat', camp2: 'sat',
  eolus: 'eolus-day', camp3: 'eolus-day',
  needleton2: 'sun', dro2: 'sun', dfw2: 'sun',
};

export const STATION_BY_SECTION: Record<string, string> = {
  thu: 'dro',
  fri: 'camp',
  sat: 'sunlight',
  'eolus-day': 'eolus',
  sun: 'dro2',
  routes: 'windom',
  gear: 'camp',
  basin: 'camp',
};
