const disciplines = [
  {
    id: "fingerprints",
    name: "Fingerprint Analysis",
    icon: "🔍",
    summary: "Study and identification of fingerprints.",
    detail: "Fingerprint analysis studies ridge patterns, loops, whorls and arches to help identify individuals during forensic investigations."
  },
  {
    id: "dna",
    name: "DNA Forensics",
    icon: "🧬",
    summary: "Identification through biological evidence.",
    detail: "DNA analysis examines biological samples such as blood, saliva and hair to assist in identifying individuals."
  },
  {
    id: "toxicology",
    name: "Forensic Toxicology",
    icon: "🧪",
    summary: "Detection of drugs, chemicals and toxins.",
    detail: "Forensic toxicology analyzes biological samples to detect drugs, chemicals or poisonous substances."
  },
  {
    id: "ballistics",
    name: "Ballistics",
    icon: "🔬",
    summary: "Examination of firearm-related evidence.",
    detail: "Ballistics examines bullets, cartridge cases and firearm-related evidence to assist criminal investigations."
  },
  {
    id: "digital",
    name: "Digital Forensics",
    icon: "💻",
    summary: "Investigation of digital evidence.",
    detail: "Digital forensics recovers and examines digital evidence from computers, mobile devices and electronic storage."
  },
  {
    id: "documents",
    name: "Document Examination",
    icon: "📄",
    summary: "Analysis of handwriting and documents.",
    detail: "Document examination helps identify forged signatures, alterations, handwriting differences and suspicious documents."
  }
];

const cases = [
  {
    field: "DNA Forensics",
    title: "DNA Identification",
    description: "Biological evidence collected from a crime scene is examined and compared with reference DNA profiles to assist identification."
  },
  {
    field: "Fingerprint Analysis",
    title: "Latent Fingerprint Investigation",
    description: "Fingerprints found on objects are examined and compared to determine whether they may be associated with an individual."
  },
  {
    field: "Digital Forensics",
    title: "Digital Evidence Recovery",
    description: "Investigators examine digital devices and recover relevant electronic information to reconstruct events."
  },
  {
    field: "Forensic Toxicology",
    title: "Toxicology Examination",
    description: "Laboratory testing of biological samples helps detect drugs, chemicals or toxic substances."
  },
  {
    field: "Document Examination",
    title: "Questioned Document Analysis",
    description: "Experts examine handwriting, signatures and document alterations to assess authenticity."
  },
  {
    field: "Ballistics",
    title: "Firearm Evidence Examination",
    description: "Experts analyze firearm-related evidence to help determine possible connections between evidence and weapons."
  }
];

const questions = [
  {
    id: 1,
    question: "What is the main purpose of forensic science?",
    options: [
      "Entertainment",
      "Scientific investigation of evidence",
      "Making laws",
      "Punishing suspects"
    ],
    answer: 1,
    explanation: "Forensic science applies scientific methods to examine evidence and assist investigations."
  },
  {
    id: 2,
    question: "Which branch analyzes DNA samples?",
    options: [
      "Ballistics",
      "Document examination",
      "DNA forensics",
      "Digital forensics"
    ],
    answer: 2,
    explanation: "DNA forensics examines genetic material for identification purposes."
  },
  {
    id: 3,
    question: "What is a latent fingerprint?",
    options: [
      "A visible drawing",
      "A hidden fingerprint impression",
      "A DNA sample",
      "A shoe mark"
    ],
    answer: 1,
    explanation: "A latent fingerprint is an impression that may not be visible without special processing."
  },
  {
    id: 4,
    question: "Which branch examines electronic devices?",
    options: [
      "Toxicology",
      "Digital forensics",
      "Ballistics",
      "Anthropology"
    ],
    answer: 1,
    explanation: "Digital forensics examines computers, phones and other electronic devices for evidence."
  },
  {
    id: 5,
    question: "What does forensic toxicology examine?",
    options: [
      "Fingerprints",
      "Handwriting",
      "Drugs and toxic substances",
      "Computer files"
    ],
    answer: 2,
    explanation: "Forensic toxicology detects and analyzes drugs, chemicals and toxins."
  },
  {
    id: 6,
    question: "Why is evidence preservation important?",
    options: [
      "To change the evidence",
      "To prevent contamination and alteration",
      "To hide evidence",
      "To destroy samples"
    ],
    answer: 1,
    explanation: "Proper preservation protects evidence integrity and reliability."
  },
  {
    id: 7,
    question: "Which field examines bullets and cartridge cases?",
    options: [
      "Linguistics",
      "Toxicology",
      "Ballistics",
      "Psychology"
    ],
    answer: 2,
    explanation: "Ballistics examines firearm-related evidence, including bullets and cartridge cases."
  },
  {
    id: 8,
    question: "What is questioned document examination used for?",
    options: [
      "Examining forged signatures and alterations",
      "Testing blood groups",
      "Recovering computer data",
      "Measuring temperature"
    ],
    answer: 0,
    explanation: "Questioned document examination investigates handwriting, signatures and possible alterations."
  },
  {
    id: 9,
    question: "What should investigators do when collecting evidence?",
    options: [
      "Handle it carelessly",
      "Mix all samples",
      "Follow proper collection and documentation procedures",
      "Discard original evidence"
    ],
    answer: 2,
    explanation: "Proper evidence collection and documentation help prevent contamination."
  },
  {
    id: 10,
    question: "What is the chain of custody?",
    options: [
      "A list of suspects",
      "A record of evidence handling and transfers",
      "A laboratory instrument",
      "A type of fingerprint"
    ],
    answer: 1,
    explanation: "The chain of custody documents who collected, handled, stored and transferred evidence."
  }
];

module.exports = { disciplines, cases, questions };
