// Club facts used across the site. Everything here comes from the club's own
// Instagram (@cca.aero.ravens), its earlier website, or its flyers.
// Edit here, not in the components.

export const links = {
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSdFPDwy-diJuq7Imo1RURnaM_Vu4BywHZ4NnSLOGkW3V0Dc-g/viewform',
  email: 'aeroravens@gmail.com',
  instagram: 'https://www.instagram.com/cca.aero.ravens/',
  instagramHandle: '@cca.aero.ravens',
  recf: 'https://www.recf.org/aerial-drone-competition/',
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#record', label: 'Record' },
  { href: '#work', label: 'Work' },
  { href: '#gallery', label: 'Gallery' },
];

export type Result = {
  year: string;
  event: string;
  result: string;
  detail: string;
  /** set when a detail still needs confirming by the club */
  todo?: string;
};

export const results: Result[] = [
  {
    year: '2026',
    event: 'West Aerial Drone HS Championship',
    result: '2nd place, teamwork',
    detail: 'Out of 50 teams · 5951A + 5951B',
  },
  {
    year: '2025',
    event: 'National West Championship',
    result: 'Skills Mission Champion',
    detail: 'Also won the Coding Award · 5951A',
  },
  {
    year: '2025',
    event: 'BHHS Regional',
    result: 'Tournament win',
    detail: 'Regional event · 2025 season',
    todo: 'Confirm which award this was',
  },
  {
    year: '—',
    event: 'Troy High School',
    result: 'All-Around Award',
    detail: 'Recognized by the CCA Foundation',
    todo: 'Add the year',
  },
];

export const season = [
  { date: 'Aug 25', text: 'First meeting. What the Aerial Drone Competition is, and a first look at the drones.' },
  { date: 'Sept 1', text: 'Flight basics, then an obstacle course around the classroom.' },
  { date: 'Sept 15', text: 'First week of code: commands that make a real drone take off, move and land.' },
  { date: 'Sept 22', text: "Built this year's new teamwork field and flew it for the first time." },
  { date: 'Sept 23', text: 'Club Day: a poster board, drones on the table, and a lot of explaining what we do.' },
  { date: 'Oct 13', text: 'New members from Club Day got their first flights on the teamwork field.' },
  { date: 'Oct 15', text: 'Autonomous members started coding on the new pilot/autonomous field.' },
  { date: 'Oct 22', text: 'Practice split for good into an autonomous group and a teamwork/piloting group.' },
  { date: 'Oct 29', text: 'Part of the teamwork field had problems, so we changed the layout. Still adjusting.' },
];
