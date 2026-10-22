export const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: './Assets/dashbord.png',
    children: [
      { id: 'overview', label: 'Overview', icon: './Assets/dashbord.png' },
      { id: 'stats', label: 'Stats', icon: './Assets/result.png' },
    ],
  },
  {
    id: 'school',
    label: 'School Management',
    icon: './Assets/School Management.png',
    children: [
      { id: 'academic-year', label: 'Academic Year', icon: './Assets/Academic Year.png' },
      { id: 'add-class', label: 'Add Class & Section', icon: './Assets/add class.png' },
      { id: 'add-subject', label: 'ADD Subject', icon: './Assets/add Subject.png' },
    ],
  },
  {
    id: 'result',
    label: 'Result Management',
    icon: './Assets/Result MAnagement.png',
    children: [
      { id: 'show-result', label: 'Show Result', icon: './Assets/result.png' },
      {
        id: 'primary-level',
        label: 'Primary Level',
        icon: './Assets/Primary.png',
        nested: [
          { id: 'primary-first', label: 'First Terminal', icon: './Assets/First.png' },
          { id: 'primary-second', label: 'Second Terminal', icon: './Assets/Second.png' },
          { id: 'primary-annual', label: 'Anual Terminal', icon: './Assets/Anual.png' },
        ],
      },
      {
        id: 'middle-level',
        label: 'Middle Level',
        icon: './Assets/Middle.png',
        nested: [
          { id: 'middle-first', label: 'First Terminal', icon: './Assets/First.png' },
          { id: 'middle-second', label: 'Second Terminal', icon: './Assets/Second.png' },
          { id: 'middle-annual', label: 'Anual Terminal', icon: './Assets/Anual.png' },
        ],
      },
    ],
  },
  {
    id: 'fees',
    label: 'Fees Management',
    icon: './Assets/Fees Management.png',
    children: [
      { id: 'add-fee-structure', label: 'Add Fees Structure', icon: './Assets/Add Fe.png' },
      { id: 'add-payments', label: 'Add Payments', icon: './Assets/Add Payment.png' },
      { id: 'fee-collection', label: 'Fee Collection', icon: './Assets/Fee Col.png' },
    ],
  },
  {
    id: 'student',
    label: 'Student Management',
    icon: './Assets/Student Management.png',
    children: [
      { id: 'students-list', label: 'Students', icon: './Assets/Student M.png' },
      { id: 'add-student', label: 'Add Student', icon: './Assets/Add Student.png' },
    ],
  },
  {
    id: 'clerk',
    label: 'Clerk Management',
    icon: './Assets/Clerk Management.png',
    children: [
      { id: 'add-clerk', label: 'Add Clerk', icon: './Assets/add Clerk.png' },
      { id: 'clerk-list', label: 'Clerk List', icon: './Assets/Clark List.png' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: './Assets/Setting Management.png',
    children: [
      { id: 'profile', label: 'Profile', icon: './Assets/Profile.png' },
      { id: 'change-password', label: 'Change Password', icon: './Assets/Change Pasword.png' },
    ],
  },
];

export const STAT_CARDS = [
  {
    id: 'total-students',
    title: 'Total Students',
    value: '1,253',
    numericValue: 1253,
    prefix: '',
    icon: './Assets/Mask group.png',
    arrow: './Assets/Frame 876.png',
    trend: '+4.8% this term',
  },
  {
    id: 'total-classes',
    title: 'Total Classes',
    value: '36',
    numericValue: 36,
    prefix: '',
    icon: './Assets/Mask group (1).png',
    arrow: './Assets/Frame 876.png',
    trend: 'Classes I to XII',
  },
  {
    id: 'total-staff',
    title: 'Total Staff',
    value: '74',
    numericValue: 74,
    prefix: '',
    icon: './Assets/Mask group (2).png',
    arrow: './Assets/Frame 876.png',
    trend: '98% attendance',
  },
  {
    id: 'fees-collected',
    title: 'Fees Collected (October)',
    value: '₹11,23,235',
    numericValue: 1123235,
    prefix: '₹',
    isIndianCurrency: true,
    compactTitle: true,
    icon: './Assets/Mask group (3).png',
    arrow: './Assets/Frame 876.png',
    trend: '+12.4% vs Sep',
  },
  {
    id: 'pending-admission',
    title: 'Pending Admission',
    value: '5',
    numericValue: 5,
    prefix: '',
    compactTitle: true,
    icon: './Assets/Mask group (4).png',
    arrow: './Assets/Frame 876.png',
    trend: 'Action required',
  },
];

export const MONTHLY_COLLECTION_BY_YEAR = {
  '2025-26': {
    total: '₹47,36,260',
    numericTotal: 4736260,
    months: [
      { month: 'Apr', height: 90, amount: '₹9,45,000', primary: true },
      { month: 'May', height: 35, amount: '₹3,68,200' },
      { month: 'Jun', height: 72, amount: '₹7,54,800' },
      { month: 'Jul', height: 62, amount: '₹6,49,400' },
      { month: 'Aug', height: 52, amount: '₹5,42,625' },
      { month: 'Sep', height: 75, amount: '₹7,88,000' },
      { month: 'Oct', height: 42, amount: '₹6,88,235' },
      { month: 'Nov', height: 0, amount: '₹0' },
      { month: 'Dec', height: 0, amount: '₹0' },
      { month: 'Jan', height: 0, amount: '₹0' },
      { month: 'Feb', height: 0, amount: '₹0' },
      { month: 'Mar', height: 0, amount: '₹0' },
    ],
  },
  '2026-27': {
    total: '₹54,18,900',
    numericTotal: 5418900,
    months: [
      { month: 'Apr', height: 95, amount: '₹9,92,000', primary: true },
      { month: 'May', height: 48, amount: '₹4,85,000' },
      { month: 'Jun', height: 80, amount: '₹8,12,400' },
      { month: 'Jul', height: 68, amount: '₹6,94,500' },
      { month: 'Aug', height: 60, amount: '₹6,15,000' },
      { month: 'Sep', height: 84, amount: '₹8,60,000' },
      { month: 'Oct', height: 58, amount: '₹5,95,000' },
      { month: 'Nov', height: 36, amount: '₹3,65,000' },
      { month: 'Dec', height: 0, amount: '₹0' },
      { month: 'Jan', height: 0, amount: '₹0' },
      { month: 'Feb', height: 0, amount: '₹0' },
      { month: 'Mar', height: 0, amount: '₹0' },
    ],
  },
  '2027-28': {
    total: '₹61,80,450',
    numericTotal: 6180450,
    months: [
      { month: 'Apr', height: 96, amount: '₹10,20,000', primary: true },
      { month: 'May', height: 56, amount: '₹5,60,000' },
      { month: 'Jun', height: 85, amount: '₹8,75,000' },
      { month: 'Jul', height: 74, amount: '₹7,40,000' },
      { month: 'Aug', height: 66, amount: '₹6,65,450' },
      { month: 'Sep', height: 88, amount: '₹9,10,000' },
      { month: 'Oct', height: 72, amount: '₹7,30,000' },
      { month: 'Nov', height: 68, amount: '₹6,80,000' },
      { month: 'Dec', height: 0, amount: '₹0' },
      { month: 'Jan', height: 0, amount: '₹0' },
      { month: 'Feb', height: 0, amount: '₹0' },
      { month: 'Mar', height: 0, amount: '₹0' },
    ],
  },
};

export const STUDENT_CLASSES = [
  { label: 'I', color: '#DC97FF', students: 112, offset: 0 },
  { label: 'II', color: '#D283FF', students: 108, offset: -42 },
  { label: 'III', color: '#BD68EE', students: 104, offset: -84 },
  { label: 'IV', color: '#AB51E3', students: 106, offset: -126 },
  { label: 'V', color: '#8B2FC9', students: 110, offset: -168 },
  { label: 'VI', color: '#6818A5', students: 102, offset: -210 },
  { label: 'VII', color: '#5A108F', students: 105, offset: -252 },
  { label: 'VIII', color: '#4A0A77', students: 109, offset: -294 },
  { label: 'IX', color: '#3C0663', students: 101, offset: -336 },
  { label: 'X', color: '#310055', students: 98, offset: -378 },
  { label: 'XI', color: '#532B88', students: 100, offset: -420 },
  { label: 'XII', color: '#2F184B', students: 98, offset: -462 },
];

export const PENDING_FEES_BY_CLASS = {
  'Class VI': {
    total: '₹2,84,500',
    numericTotal: 284500,
    sections: [
      { label: 'Section A', width: 52, amount: '₹1,24,000' },
      { label: 'Section B', width: 30, amount: '₹82,500' },
      { label: 'Section C', width: 28, amount: '₹78,000' },
    ],
  },
  'Class VII': {
    total: '₹3,12,900',
    numericTotal: 312900,
    sections: [
      { label: 'Section A', width: 58, amount: '₹1,42,900' },
      { label: 'Section B', width: 34, amount: '₹92,000' },
      { label: 'Section C', width: 31, amount: '₹78,000' },
    ],
  },
  'Class VIII': {
    total: '₹3,58,740',
    numericTotal: 358740,
    sections: [
      { label: 'Section A', width: 65, amount: '₹1,68,240' },
      { label: 'Section B', width: 35, amount: '₹91,500' },
      { label: 'Section C', width: 40, amount: '₹99,000' },
    ],
  },
  'Class IX': {
    total: '₹4,10,200',
    numericTotal: 410200,
    sections: [
      { label: 'Section A', width: 74, amount: '₹1,94,200' },
      { label: 'Section B', width: 46, amount: '₹1,14,000' },
      { label: 'Section C', width: 42, amount: '₹1,02,000' },
    ],
  },
  'Class X': {
    total: '₹2,45,800',
    numericTotal: 245800,
    sections: [
      { label: 'Section A', width: 45, amount: '₹1,10,800' },
      { label: 'Section B', width: 28, amount: '₹72,000' },
      { label: 'Section C', width: 25, amount: '₹63,000' },
    ],
  },
};

export const SCALE_LABELS = [
  '0', '20K', '40K', '60K', '80K', '100K', '120K', '140K', '160K',
  '180K', '200K', '220K', '240K', '260K', '280K', '300K', '320K',
];

export const INITIAL_NOTIFICATIONS = [
  { id: 1, title: 'October Fee Report Ready', time: '10 mins ago', type: 'fee' },
  { id: 2, title: '5 New Admission Applications', time: '1 hour ago', type: 'admission' },
  { id: 3, title: 'Class VIII Result Published', time: '3 hours ago', type: 'result' },
];

export const INITIAL_EMAILS = [
  { id: 1, sender: 'Principal Office', subject: 'Academic Year 2025-26 Schedule', time: '09:30 AM' },
  { id: 2, sender: 'Accounts Dept', subject: 'Pending Fee Reminders Sent', time: 'Yesterday' },
  { id: 3, sender: 'Exam Controller', subject: 'First Terminal Marksheets', time: 'Yesterday' },
  { id: 4, sender: 'Parent Portal', subject: 'Fee Receipt Query - Class VIII-A', time: '2 days ago' },
  { id: 5, sender: 'System Admin', subject: 'Weekly Backup Completed', time: '3 days ago' },
];
