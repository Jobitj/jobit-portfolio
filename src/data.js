// ✏️ Edit everything about your portfolio here.
// NOTE: anything marked SAMPLE / "Your ..." is a placeholder — replace it with your real details.
export const profile = {
  name: 'JOBIT',
  roles: ['Website Designer & Developer', 'Technical Support', 'UI / UX Designer', 'MERN Stack Developer'],
  tagline: 'MERN Stack Engineer & IT Admin: From Full-Stack Codebase to Reliable Cloud Uptime and Support.',
  email: 'jobitj2001@gmail.com',
  phone: '+91 974 410 1907',
  location: 'Kottayam, Kerala, India',
  photo: '/profile.png',          // original circle photo (fallback)
  cine: '/profile-cine.jpg',      // graded square portrait
  avatar: '/profile-avatar.jpg',  // centred face crop used in the About card
  resume: '/Jobit_Anto_Jose_Resume.pdf',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/jobit-anto-jose' },
    { label: 'GitHub', url: 'https://github.com/Jobitj' },
    { label: 'Instagram', url: 'https://www.instagram.com/__jo_bi_t__?fqnt=MWRjOXl0cXBtZGRqMg%3D%3D&utm_source=qr' },
  ],
};

export const terminal = [
  { cmd: 'whoami', out: 'Jobit — website designer & developer, technical support' },
  { cmd: 'cat mission.txt', out: 'Design it well, build it right, support it kindly.' },
  { cmd: 'ls skills/', out: 'web-design/  web-dev/  ui-ux/  tech-support/  networking-basic/' },
  { cmd: 'uptime', out: 'available for new opportunities — response time < 24h' },
];

// Main works first.
export const services = [
  { icon: 'code', title: 'Website Design & Development', text: 'Modern, responsive websites designed in Figma and built with React, Node, Express and MongoDB.' },
  { icon: 'headset', title: 'Technical Support', text: 'Troubleshooting, OS and software installation, remote help and friendly, clear user support.' },
  { icon: 'layers', title: 'UI / UX Design', text: 'Wireframes, user flows and clickable prototypes in Figma.' },
  { icon: 'image', title: 'Graphic Design', text: 'Posters, social media graphics and branding in Photoshop.' },
  { icon: 'film', title: 'Video Editing', text: 'Cuts, colour and motion graphics in Premiere Pro.' },
  { icon: 'server', title: 'MERN Stack Apps', text: 'Full-stack web apps: React front-end, Node/Express API and MongoDB database.' },
  { icon: 'network', title: ' IT & Networking', text: ' Wi-Fi / LAN setup, user accounts, updates and backups.' },
];

export const process = [
  { step: '01', icon: 'search', title: 'Detect', text: 'Ticket, alert or call comes in. I capture symptoms, urgency and impact.' },
  { step: '02', icon: 'wrench', title: 'Diagnose', text: 'Reproduce the issue, check logs and isolate the root cause fast.' },
  { step: '03', icon: 'check', title: 'Resolve', text: 'Apply the fix remotely or on-site and verify with the user.' },
  { step: '04', icon: 'file', title: 'Document', text: 'Write the solution into the knowledge base for the next person.' },
  { step: '05', icon: 'shield', title: 'Prevent', text: 'Automate, patch or train so the same issue never returns.' },
];

// Your projects. Edit the text / tags, add a link, or a screenshot: image: '/projects/shot.jpg' (file in client/public/projects/).
export const projects = [
  { title: 'Online Counseling', art: 'counseling', cat: 'Web', text: 'Web platform where clients can find counselors and book online counseling sessions.', stack: ['Web App', 'Appointments'], link: '#' },
  { title: 'Tour Booking', art: 'tour', cat: 'Web', text: 'Tour booking website to explore destinations and book travel packages.', stack: ['Web App', 'Booking'], link: '#' },
  { title: 'Restaurant Booking', art: 'restaurant', cat: 'Web', text: 'Restaurant website to view the menu and book a table online.', stack: ['Web App', 'Table Booking'], link: '#' },
  { title: 'Doctor Appointment', art: 'doctor', cat: 'Web', text: 'Appointment system to find doctors and schedule visits.', stack: ['Web App', 'Appointments'], link: '#' },
  { title: 'UI / UX Design', art: 'ui', cat: 'UI / UX', text: 'User-focused UI/UX designs — wireframes, app screens and clickable prototypes.', stack: ['UI / UX', 'Wireframes'], link: '#' },
  { title: 'IT Support & Setup', art: 'remote', cat: 'Support', text: 'Computer and software setup, OS installation, troubleshooting and day-to-day user support.', stack: ['IT Support', 'Setup'], link: '#' },
];

// Skill levels are placeholders — set your real levels (0–100).
export const coreSkills = [
  { label: 'Web Dev (MERN)', pct: 78 },
  { label: 'UI / UX', pct: 75 },
  { label: 'Photoshop', pct: 75 },
  { label: 'Premiere Pro', pct: 70 },
  { label: 'Tech Support', pct: 90 },
  { label: 'Networking', pct: 60 },
];

export const skillGroups = [
  { group: 'Website Design & Development', items: [['HTML, CSS & JavaScript', 82], ['React', 78], ['Node & Express', 72], ['MongoDB', 72]] },
  { group: 'UI / UX & Design', items: [['UI / UX Design', 75], ['Figma', 75], ['Adobe Photoshop', 75], ['Adobe Premiere Pro', 70]] },
  { group: 'Technical Support', items: [['Hardware & Software Troubleshooting', 90], ['Remote Support', 88], ['Customer Care', 92]] },
  { group: 'System Setup & Maintenance', items: [['OS Installation (Windows)', 85], ['Software Installation & Setup', 88], ['Driver & Update Management', 80], ['Virus & Malware Removal', 78]] },
  { group: 'Networking', items: [['TCP/IP, DNS & DHCP', 60], ['Wi-Fi & LAN setup', 65], ['Windows basics', 72]] },
];

// slug = brand logo from the Simple Icons CDN; if it can't load, `icon` (or initials) is shown instead.
export const arsenal = [
  { name: 'Figma', slug: 'figma', icon: 'layers' },
  { name: 'Photoshop', slug: 'adobephotoshop', icon: 'image' },
  { name: 'Premiere Pro', slug: 'adobepremierepro', icon: 'film' },
  { name: 'After Effects', slug: 'adobeaftereffects', icon: 'layers' },
  { name: 'Illustrator', slug: 'adobeillustrator', icon: 'pen' },
  { name: 'Canva', slug: 'canva', icon: 'image' },
  { name: 'UI / UX', icon: 'layers' },
  { name: 'HTML5', slug: 'html5', icon: 'code' },
  { name: 'CSS3', slug: 'css3', icon: 'code' },
  { name: 'Bootstrap', slug: 'bootstrap', icon: 'code' },
  { name: 'JavaScript', slug: 'javascript', icon: 'code' },
  { name: 'React', slug: 'react', icon: 'code' },
  { name: 'Node.js', slug: 'nodedotjs', icon: 'server' },
  { name: 'Express', slug: 'express', icon: 'server' },
  { name: 'MongoDB', slug: 'mongodb', icon: 'database' },
  { name: 'Git', slug: 'git', icon: 'code' },
  { name: 'GitHub', slug: 'github', icon: 'code' },
  { name: 'VS Code', slug: 'visualstudiocode', icon: 'code' },
  { name: 'Windows', slug: 'windows', icon: 'monitor' },
  { name: 'Microsoft 365', slug: 'microsoftoffice', icon: 'cloud' },
  { name: 'TeamViewer', slug: 'teamviewer', icon: 'headset' },
  { name: 'AnyDesk', slug: 'anydesk', icon: 'monitor' },
  // technical support · installation · troubleshooting
  { name: 'Linux', slug: 'linux', icon: 'server' },
  { name: 'Ubuntu', slug: 'ubuntu', icon: 'server' },
  { name: 'Windows 11', slug: 'windows11', icon: 'monitor' },
  { name: 'VirtualBox', slug: 'virtualbox', icon: 'server' },
  { name: 'Bootable USB', icon: 'server' },
  { name: 'BIOS / Boot Setup', icon: 'settings' },
  { name: 'Command Prompt', icon: 'code' },
  { name: 'Remote Desktop', icon: 'monitor' },
  { name: 'Drivers & Updates', icon: 'settings' },
  { name: 'Antivirus & Security', icon: 'shield' },
  { name: 'Hardware Repair', icon: 'wrench' },
  { name: 'Wi-Fi & Router Setup', icon: 'wifi' },
  { name: 'Backup & Recovery', icon: 'database' },
];

// ⚠️ SAMPLE — replace with your real education (newest first).
export const education = [
  { title: 'Bachelor Of Computer Applications (BCA)', place: 'Shermount College, Erumeli', period: '2020 — 2023', points: ['Computer Science fundamentals.', 'Web Development.', 'Database Management.'],  },
  { title: 'Higher Secondary', place: 'St. John the Baptist’s Higher Secondary School', period: '2018 — 2020', points: ['Computer Science.', 'Mathematics.', 'Physics.', 'Chemistry.'],},
];

// Your only certification. Fill in the institute and year.
export const certs = [
  { name: 'MEARN Stack Development', issuer: 'National Council for Technology and Training (NACTET)', institute: 'Luminar Technolab, Kochi', year: '2024' },
];

export const faqs = [
  { q: 'What kind of work are you looking for?', a: 'Website design and development, UI/UX and technical support roles — on-site, hybrid or remote.' },
  { q: 'Can you work with remote teams?', a: 'Yes. I am comfortable with remote tools like AnyDesk, TeamViewer, Teams and Slack.' },
  { q: 'Do you build full websites?', a: 'Yes. I design in Figma and build with the MERN stack — front-end, API and database.' },
  { q: 'How fast can you start?', a: 'Send me a message with the details and I will reply within 24 hours with my availability.' },
];

export const ticker = ['WEBSITE DESIGN', 'WEB DEVELOPMENT', 'TECHNICAL SUPPORT', 'UI / UX', 'MERN STACK', 'FIGMA', 'PHOTOSHOP', 'PREMIERE PRO'];

export const statement = 'Design and build websites, support the people who use them, and make every pixel feel intentional.';

// Defined last so the numbers always match the lists above (no made-up figures).
export const stats = [
  { value: projects.length, suffix: '', label: 'Projects' },
  { value: arsenal.length, suffix: '', label: 'Tools I Use' },
  { value: 2, suffix: '', label: 'Main Works' },
];
