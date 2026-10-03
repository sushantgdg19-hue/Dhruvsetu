import { 
  StationTelemetry, 
  MindMapNode, 
  ResearchPaper, 
  PolarDataset, 
  PolarExpedition, 
  ScientistProfile, 
  InstitutionProfile,
  EvidenceCheckItem,
  Milestone,
  EditorialInsight,
  ExpeditionStory,
  MediaDraft
} from '../types/polar';

export const POLAR_TIMELINE_MILESTONES: Milestone[] = [
  {
    year: 1981,
    title: 'First Indian Antarctic Expedition',
    region: 'Antarctic',
    description: 'Dr. S. Z. Qasim led India’s historic maiden scientific voyage aboard MV Polar Circle, anchoring India’s sovereign commitment to polar scientific exploration.',
    source: 'NCPOR / MoES Official Expedition Records'
  },
  {
    year: 1983,
    title: 'Dakshin Gangotri Station Commissioned',
    region: 'Antarctic',
    description: 'India constructed its first permanent research station in Queen Maud Land during the 3rd Indian Scientific Expedition, initiating continuous winter-over observations.',
    source: 'National Antarctic Programme Historical Archives'
  },
  {
    year: 1989,
    title: 'Maitri Station Operationalized',
    region: 'Antarctic',
    description: 'Commissioned in the ice-free Schirmacher Oasis rocky terrain, supporting geomagnetism, upper atmosphere physics, and freshwater Priyadarshini Lake limnology.',
    source: 'Council of Scientific and Industrial Research / MoES'
  },
  {
    year: 2008,
    title: 'Himadri Arctic Station Inaugurated',
    region: 'Arctic',
    description: 'India established Himadri in Ny-Ålesund, Svalbard (Norway) at 78°55′ N, marking India’s expansion into circumpolar Arctic climate science and aerosol monitoring.',
    source: 'MoES Official Gazette Notification (July 2008)'
  },
  {
    year: 2012,
    title: 'Bharati Station Established',
    region: 'Antarctic',
    description: 'Inauguration of a third-generation modular polar base on stilts in Larsemann Hills, featuring ISRO Earth observation satellite data ground telemetry.',
    source: 'NCPOR Polar Engineering Division'
  },
  {
    year: 2014,
    title: 'IndARC Subsurface Mooring Deployed',
    region: 'Arctic',
    description: 'India successfully deployed its multi-sensor underwater observatory at 192m depth in Kongsfjorden, Svalbard, recording uninterrupted winter oceanographic telemetry.',
    source: 'Ocean Sciences Division, MoES'
  },
  {
    year: 2016,
    title: 'Himansh High-Altitude Station Built',
    region: 'Himalaya',
    description: 'Constructed at 4,080 meters (13,500 ft) in the Chandra Basin, Spiti Valley, enabling real-time on-glacier mass-balance and meltwater runoff forecasting.',
    source: 'Cryosphere Science Division, NCPOR'
  },
  {
    year: 2024,
    title: '44th Indian Scientific Expedition to Antarctica',
    region: 'Antarctic',
    description: 'Multidisciplinary team flagged off from Goa to execute inland deep-firn core retrieval, oceanographic surveys along Prydz Bay, and atmospheric ozone recovery profiling.',
    source: '44th ISEA Mission Charter (2024-2025)'
  }
];

export const EDITORIAL_INSIGHTS: EditorialInsight[] = [
  {
    id: 'ins-01',
    category: 'Featured Research',
    title: 'How Melting Arctic Sea Ice Alters the Indian Summer Monsoon Jet',
    description: 'Coupled climate models and IndARC observation data reveal how reduced Barents-Kara sea ice induces atmospheric planetary wave blocking that modulates seasonal rainfall anomalies over the Indian subcontinent.',
    region: 'Arctic',
    date: 'February 2025',
    source: 'Journal of Earth System Science · NCPOR / MoES',
    readTime: '5 min read',
    doi: '10.1007/s12040-025-02194-x'
  },
  {
    id: 'ins-02',
    category: 'Expedition Story',
    title: 'Wintering Over in the Schirmacher Oasis: Human Resilience at Maitri',
    description: 'Behind the science: inside the living quarters, biological rhythm tests, and emergency logistics of Indian glaciologists and engineers who brave months of polar night in Queen Maud Land.',
    region: 'Antarctic',
    date: 'January 2025',
    source: 'NCPOR Expedition Monograph Series',
    readTime: '6 min read'
  },
  {
    id: 'ins-03',
    category: 'Polar Science Explained',
    title: 'Reading 400 Years of Earth’s Atmospheric History in Ancient Firn',
    description: 'Step inside the cryogenic ice core vault at NCPOR Goa where scientists slice translucent cylinders drilled at Larsemann Hills to isolate trapped greenhouse gas bubbles from the pre-industrial era.',
    region: 'Antarctic',
    date: 'March 2025',
    source: 'National Cryospheric Archive',
    readTime: '4 min read',
    doi: '10.1017/jog.2024.89'
  },
  {
    id: 'ins-04',
    category: 'Data & Discovery',
    title: 'Himansh Telemetry: Accelerated Glacial Retreat in the Chandra Basin',
    description: 'Continuous differential GPS and ablation stake datasets confirm that benchmark glaciers in Lahaul-Spiti experienced an average negative cumulative mass balance of -0.58 m w.e. over recent observation cycles.',
    region: 'Himalaya',
    date: 'December 2024',
    source: 'The Cryosphere (EGU) · Himansh Station AWS',
    readTime: '4 min read',
    doi: '10.5194/tc-19-1422-2025'
  }
];

export const EXPEDITION_STORIES: ExpeditionStory[] = [
  {
    id: 'story-arctic',
    region: 'Arctic',
    title: 'IndARC Fjord Turnaround: Battling Arctic Twilight in Svalbard',
    shortDescription: 'How Indian oceanographers retrieved, recalibrated, and redeployed the 192-meter IndARC mooring in icy Kongsfjorden amidst sub-zero Arctic gale winds.',
    station: 'Himadri Station (Ny-Ålesund, 78°55′ N)',
    image: '/src/assets/images/arctic_himadri_station_1790962275208.jpg',
    leadScientist: 'Dr. K. P. Krishnan',
    season: 'Boreal Summer-Fall Campaign',
    keyFindings: [
      'Captured continuous pulse of Atlantic water heat intrusion into Kongsfjorden fjord.',
      'Calibrated underwater acoustic doppler current profiler (ADCP) at 192m depth.',
      'Retrieved year-round salinity, chlorophyll-a fluorescence, and dissolved oxygen time-series.'
    ]
  },
  {
    id: 'story-antarctic',
    region: 'Antarctic',
    title: 'The Larsemann Hills Traverse: Deep Core Drilling South of Bharati',
    shortDescription: 'Field scientists conducted a 180 km motorized traverse over crevassed ice sheets to drill a 101.4-meter firn core preserving Antarctic climate signatures.',
    station: 'Bharati Station (Larsemann Hills, 69°24′ S)',
    image: '/src/assets/images/antarctic_bharati_station_1790962287391.jpg',
    leadScientist: 'Dr. Thamban Meloth',
    season: '43rd & 44th ISEA Window',
    keyFindings: [
      'Retrieved unbroken 101.4-meter ice core spanning four centuries of Antarctic history.',
      'Maintained uninterrupted ISRO Earth-observation ground station data pipeline.',
      'Sampled marine sediment cores along the continental shelf of Prydz Bay.'
    ]
  },
  {
    id: 'story-himalaya',
    region: 'Himalaya',
    title: '13,500 Feet in Lahaul-Spiti: Glaciological Vigil at Himansh',
    shortDescription: 'Living in sub-zero thin air at 4,080 meters to establish real-time mass balance telemetry on the Samudra Tapu and Batal glaciers in the Western Himalayas.',
    station: 'Himansh Station (Chandra Basin, 32°24′ N)',
    image: '/src/assets/images/himalaya_himansh_station_1790962298987.jpg',
    leadScientist: 'Dr. Parmanand Sharma',
    season: 'Year-Round Automated Telemetry',
    keyFindings: [
      'Deployed automated weather stations (AWS) transmitting hourly snow-water-equivalent telemetry.',
      'Quantified glacial lake growth to develop early warnings against Glacial Lake Outburst Floods (GLOFs).',
      'Established high-precision baseline for freshwater river inflow forecasting across Northern India.'
    ]
  }
];

export const INITIAL_MEDIA_DRAFTS: MediaDraft[] = [
  {
    id: 'draft-01',
    sourceTitle: 'Seasonal intrusion of Atlantic water in Kongsfjorden (IndARC Observatory)',
    sourceType: 'NCPOR Arctic Research Monograph',
    audience: 'Public',
    outputType: 'Article',
    language: 'English',
    content: 'SVALBARD — Deep beneath the icy surface of Kongsfjorden in the Norwegian High Arctic, an Indian scientific instrument has spent a decade listening to the hidden rhythm of the planet’s ocean. Deployed at a depth of 192 meters, India’s IndARC observatory provides critical evidence of how warm Atlantic waters are reshaping Arctic marine ecosystems and altering the monsoon weather cycles that nourish farms across India.',
    credits: 'National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences',
    doi: '10.1007/s00300-024-03211-x',
    provenance: 'Verified NCPOR Source',
    createdDate: '2026-03-30'
  },
  {
    id: 'draft-02',
    sourceTitle: 'Glacier mass balance and velocity patterns in the Chandra Basin (Himansh Station)',
    sourceType: 'The Cryosphere (EGU) Publication',
    audience: 'Student',
    outputType: 'Research Explainer',
    language: 'English',
    content: 'Did you know India has a research station perched at 13,500 feet in the mountains of Himachal Pradesh? Called "Himansh", this high-altitude camp helps scientists measure whether Himalayan glaciers are gaining or losing snow. Over recent years, researchers discovered that glaciers like Samudra Tapu are losing ice annually, highlighting the urgent need to protect freshwater sources for millions of people.',
    credits: 'Cryosphere Science Division, NCPOR / Himansh Station Team',
    doi: '10.5194/tc-19-1422-2025',
    provenance: 'Verified NCPOR Source',
    createdDate: '2026-04-01'
  }
];

export const POLAR_STATIONS: StationTelemetry[] = [
  {
    id: 'himadri',
    name: 'Himadri Station',
    region: 'Arctic',
    location: 'Ny-Ålesund, Spitsbergen, Svalbard (Norway)',
    coordinates: '78°55′ N, 11°56′ E',
    established: 2008,
    currentTemp: -14.6,
    windSpeed: 24,
    windDirection: 'NNW',
    pressure: 1012.4,
    daylight: 'Polar Twilight / Transition',
    primaryResearch: ['Atmospheric Aerosols & Black Carbon', 'Kongsfjorden Fjord Hydrography', 'Cryospheric Microbial Ecology', 'Long-term IndARC Ocean Mooring'],
    liveStatus: 'Active & Operational',
    imagePath: '/src/assets/images/arctic_himadri_station_1790962275208.jpg',
  },
  {
    id: 'bharati',
    name: 'Bharati Station',
    region: 'Antarctic',
    location: 'Larsemann Hills, East Antarctica',
    coordinates: '69°24′ S, 76°11′ E',
    established: 2012,
    currentTemp: -26.8,
    windSpeed: 38,
    windDirection: 'ESE',
    pressure: 986.2,
    daylight: '24h Polar Light (Austral Summer Window)',
    primaryResearch: ['Break-up of Gondwanaland Tectonics', 'High-speed Satellite Ground Station (ISRO/NRSC)', 'Oceanography & Marine Sedimentology', 'Deep Ice-Sheet Dynamics'],
    liveStatus: 'Active & Operational',
    imagePath: '/src/assets/images/antarctic_bharati_station_1790962287391.jpg',
  },
  {
    id: 'maitri',
    name: 'Maitri Station',
    region: 'Antarctic',
    location: 'Schirmacher Oasis, Queen Maud Land',
    coordinates: '70°46′ S, 11°44′ E',
    established: 1989,
    currentTemp: -29.2,
    windSpeed: 45,
    windDirection: 'SE',
    pressure: 991.0,
    daylight: 'Polar Wind Conditions',
    primaryResearch: ['Geomagnetism & Upper Atmospheric Physics', 'Priyadarshini Fresh Water Lake Limnology', 'Human Physiology in Extreme Isolation', 'Meteorological Long-Term Records'],
    liveStatus: 'Active & Operational',
    imagePath: '/src/assets/images/antarctic_bharati_station_1790962287391.jpg',
  },
  {
    id: 'himansh',
    name: 'Himansh Station',
    region: 'Himalaya',
    location: 'Chandra Basin, Lahaul-Spiti, Himachal Pradesh (4,080m ASL)',
    coordinates: '32°24′ N, 77°37′ E',
    established: 2016,
    currentTemp: -8.4,
    windSpeed: 18,
    windDirection: 'WNW',
    pressure: 628.5,
    daylight: 'High-Altitude Solar Radiation 980 W/m²',
    primaryResearch: ['Batal & Samudra Tapu Glacier Mass-Balance', 'Automatic Weather Station (AWS) Telemetry', 'Cryospheric Melt Runoff Modeling', 'Permafrost Thermal Regimes'],
    liveStatus: 'Active & Operational',
    imagePath: '/src/assets/images/himalaya_himansh_station_1790962298987.jpg',
  },
];

export const MIND_MAP_NODES: MindMapNode[] = [
  {
    id: 'root-polar',
    label: 'Polar Earth System',
    category: 'region',
    region: 'Global / Tri-Polar',
    summary: 'The Earth’s three poles—the Arctic, Antarctic, and Himalayan Third Pole—govern global heat redistribution, planetary albedo, ocean circulation, and freshwater supply.',
    keyFacts: [
      'Together, polar ice holds over 68% of the planet’s freshwater.',
      'India is among the few select nations with permanent scientific outposts in all three polar domains.'
    ],
    scientificSignificance: 'Changes across the cryosphere modulate the Indian Monsoon, ocean currents, and global sea-level rise through teleconnection pathways.'
  },
  {
    id: 'node-arctic',
    label: 'Arctic Domain',
    category: 'region',
    parent: 'root-polar',
    region: 'Arctic',
    summary: 'The northern circumpolar ocean and surrounding tundra undergoing Arctic Amplification—warming nearly 4x faster than the global mean.',
    keyFacts: [
      'India established Himadri Station at Ny-Ålesund, Svalbard in July 2008.',
      'Indian scientists track how vanishing sea ice influences mid-latitude jet stream patterns and Indian monsoon anomalies.'
    ],
    scientificSignificance: 'Atmospheric and oceanographic gateway connecting Atlantic waters to the Arctic Basin.',
    relatedStations: ['Himadri Station'],
    quizQuestion: {
      question: 'In which year did India inaugurate its Arctic research station "Himadri"?',
      options: ['1989', '2008', '2016', '1981'],
      correctIndex: 1,
      explanation: 'Himadri was inaugurated on July 1, 2008 in Ny-Ålesund, Svalbard, making India the 11th country with a permanent station there.'
    }
  },
  {
    id: 'node-antarctic',
    label: 'Antarctic Continent',
    category: 'region',
    parent: 'root-polar',
    region: 'Antarctic',
    summary: 'The vast southern continent entombed in over 30 million cubic kilometers of ice, surrounded by the powerful Southern Ocean current system.',
    keyFacts: [
      'India has completed 44 continuous Indian Scientific Expeditions to Antarctica (ISEA).',
      'Operating two active year-round stations: Maitri (1989) and state-of-the-art Bharati (2012).'
    ],
    scientificSignificance: 'Critical planetary archive of ancient atmospheres trapped in ice cores going back hundreds of thousands of years.',
    relatedStations: ['Bharati Station', 'Maitri Station'],
    quizQuestion: {
      question: 'Which Indian Antarctic station is situated in the Larsemann Hills promontory?',
      options: ['Dakshin Gangotri', 'Bharati', 'Maitri', 'Himadri'],
      correctIndex: 1,
      explanation: 'Bharati Station was commissioned in 2012 in the Larsemann Hills, focusing on marine geology, oceanography, and ISRO satellite ground communications.'
    }
  },
  {
    id: 'node-himalaya',
    label: 'The Third Pole (Himalaya)',
    category: 'region',
    parent: 'root-polar',
    region: 'Himalaya',
    summary: 'The Tibetan Plateau and Himalayan ranges store the greatest volume of ice outside the Polar regions, feeding Asia’s 10 major river systems.',
    keyFacts: [
      'Himansh Research Station is located at 13,500 ft (4,080m) in the Chandra Basin, Spiti Valley.',
      'Sustains direct monitoring of benchmark glaciers: Batal, Samudra Tapu, Sutri Dhaka, and Gepang Gath.'
    ],
    scientificSignificance: 'Ensures water security for more than 1.4 billion people downstream across South Asia.',
    relatedStations: ['Himansh Station'],
    quizQuestion: {
      question: 'What is the altitude of India’s Himansh station in the Western Himalayas?',
      options: ['1,200 meters', '4,080 meters (13,500 ft)', '6,500 meters', '2,800 meters'],
      correctIndex: 1,
      explanation: 'Himansh was built at 4,080 meters (approx. 13,500 ft) in Himachal Pradesh to enable direct on-glacier glaciological measurements.'
    }
  },
  {
    id: 'node-indarc',
    label: 'IndARC Fjord Mooring',
    category: 'discovery',
    parent: 'node-arctic',
    region: 'Arctic',
    summary: 'India’s permanent underwater observatory deployed at a depth of 192 meters in Kongsfjorden, Svalbard, recording continuous hydrographic data throughout Arctic winter.',
    keyFacts: [
      'Deployed in 2014, making India the first Asian nation with a multi-sensor moored ocean observatory in an Arctic fjord.',
      'Captures seasonal intrusions of warm Atlantic water and its impact on sea-ice melting.'
    ],
    scientificSignificance: 'Continuous salinity, temperature, and current velocity recordings prove that Arctic winter warming is accelerating through oceanic pathways.',
    quizQuestion: {
      question: 'What is "IndARC"?',
      options: [
        'An Indian Antarctic ice breaker ship',
        'India’s multi-sensor underwater moored Arctic observatory',
        'A satellite telescope in Spiti',
        'A meteorological drone used in Svalbard'
      ],
      correctIndex: 1,
      explanation: 'IndARC is India’s subsurface moored observatory in Kongsfjorden, Svalbard, deployed to monitor marine climate cycles continuously.'
    }
  },
  {
    id: 'node-ice-core',
    label: 'Paleoclimate Ice Cores',
    category: 'discipline',
    parent: 'node-antarctic',
    region: 'Antarctic',
    summary: 'Cylindrical cores of compact glacier ice drilled from the Antarctic ice sheet, preserving atmospheric gases, volcanic ash, and isotopic signatures from millennia ago.',
    keyFacts: [
      'NCPOR’s National Ice Core Laboratory in Goa houses thousands of meters of ice retrieved from coastal and inland Antarctica.',
      'Oxygen isotope (δ18O) analyses reconstruct historical sea surface temperatures and monsoon linkages.'
    ],
    scientificSignificance: 'Enables calibration of modern climate models against pre-industrial baseline conditions over past glacial-interglacial cycles.'
  },
  {
    id: 'node-glacier-mass',
    label: 'Glacier Mass Balance',
    category: 'discipline',
    parent: 'node-himalaya',
    region: 'Himalaya',
    summary: 'Field glaciology techniques combining ablation stakes, differential GPS, and satellite radar to calculate whether glaciers are gaining or losing total mass.',
    keyFacts: [
      'Samudra Tapu glacier has retreated over 1.2 kilometers over the last four decades.',
      'Himansh automated weather stations transmit hourly snow-water-equivalent (SWE) telemetry via satellite.'
    ],
    scientificSignificance: 'Critical for predicting glacial lake outburst floods (GLOFs) and future river discharge patterns in the Indus and Ganges basins.'
  },
  {
    id: 'node-teleconnections',
    label: 'Monsoon Teleconnections',
    category: 'discovery',
    parent: 'root-polar',
    region: 'Global / Tri-Polar',
    summary: 'Atmospheric Rossby wave linkages and oceanic circulation patterns connecting melting Arctic ice and Southern Ocean warming directly to the intensity of the Indian Summer Monsoon.',
    keyFacts: [
      'Loss of Barents-Kara sea ice correlates with anomalous blocking patterns causing delayed or erratic Indian monsoons.',
      'Southern Ocean heat absorption regulates the Indian Ocean dipole mode.'
    ],
    scientificSignificance: 'Demonstrates why polar science is vital for India’s national agricultural security and weather forecasting.'
  },
];

export const INITIAL_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-001',
    title: 'Seasonal intrusion of Atlantic water in Kongsfjorden and its biogeochemical consequences',
    authors: ['Dr. P. V. Bhaskar', 'Dr. Neloy Khare', 'K. P. Krishnan', 'MoES Oceanography Group'],
    region: 'Arctic',
    station: 'Himadri Station',
    year: 2024,
    journal: 'Polar Biology & Cryosphere Studies',
    doi: '10.1007/s00300-024-03211-x',
    abstract: 'Using continuous mooring data from the IndARC observatory in Kongsfjorden, Svalbard, we examine the pulse of transformed Atlantic Water (TAW) entering the fjord during late autumn and its impact on the winter microbial community structure.',
    status: 'Published',
    tags: ['Arctic Oceanography', 'IndARC', 'Kongsfjorden', 'Microbiology']
  },
  {
    id: 'paper-002',
    title: 'High-resolution chemical stratigraphy of an ice core from Princess Elizabeth Land, East Antarctica',
    authors: ['Dr. Thamban Meloth', 'Dr. Manish Tiwari', 'R. Mohan', 'NCPOR Ice Core Division'],
    region: 'Antarctic',
    station: 'Bharati Station',
    year: 2025,
    journal: 'Journal of Glaciology and Paleoclimate',
    doi: '10.1017/jog.2024.89',
    abstract: 'Reconstructed atmospheric dust and sea salt aerosol variability over the past 450 years from a 101.4-meter firn/ice core retrieved during the 42nd Indian Scientific Expedition to Antarctica.',
    status: 'Published',
    tags: ['Antarctic Paleoclimate', 'Ice Core', 'Aerosol Transport', 'Bharati']
  },
  {
    id: 'paper-003',
    title: 'Glacier mass balance and velocity patterns in the Chandra Basin, Western Himalaya',
    authors: ['Dr. H. S. Negi', 'Dr. Parmanand Sharma', 'Lavkush Patel', 'S. K. Singh'],
    region: 'Himalaya',
    station: 'Himansh Station',
    year: 2025,
    journal: 'The Cryosphere (EGU)',
    doi: '10.5194/tc-19-1422-2025',
    abstract: 'Field-based glaciological observations collected at Himansh Station combined with Sentinel-1 SAR interferometry show that debris-free glaciers in the upper Chandra basin experienced an average mass deficit of -0.58 m w.e. a-1 between 2016 and 2024.',
    status: 'Published',
    tags: ['Third Pole', 'Himansh', 'Mass Balance', 'Western Himalaya']
  },
  {
    id: 'paper-004',
    title: 'Geomagnetic pulsating aurora observations at Maitri Station during solar cycle maximum',
    authors: ['Dr. Ajay Dhar', 'Dr. K. Jeeva', 'Indian Institute of Geomagnetism Team'],
    region: 'Antarctic',
    station: 'Maitri Station',
    year: 2026,
    journal: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2025JA033104',
    abstract: 'Multi-instrument fluxgate magnetometer and induction coil sensor recordings from Maitri station (Schirmacher Oasis) analyzed during intense coronal mass ejection (CME) shock events.',
    status: 'Under Review',
    tags: ['Geomagnetism', 'Space Weather', 'Maitri', 'Auroral Physics']
  },
];

export const POLAR_DATASETS: PolarDataset[] = [
  {
    id: 'ds-indarc-2024',
    title: 'IndARC Kongsfjorden Multi-Depth CTD and Current Profiler Time-Series (2020-2024)',
    region: 'Arctic',
    station: 'Himadri Station',
    parameters: 'Water Temp (°C), Salinity (PSU), Dissolved Oxygen, Chlorophyll-a, Turbidity, Acoustic Doppler Current',
    timeframe: '2020 - 2024 (Continuous 15-min intervals)',
    fileSize: '4.8 GB NetCDF',
    downloads: 1420,
    doi: '10.21125/ncpor.arctic.indarc.2024',
    accessLevel: 'Open Access',
  },
  {
    id: 'ds-larsemann-ice',
    title: 'Larsemann Hills Coastal Firn Core Geochemistry & Oxygen Isotopes (101m)',
    region: 'Antarctic',
    station: 'Bharati Station',
    parameters: 'δ18O, δD, Deuterium Excess, Major Ions (Na+, Ca2+, SO42-, Cl-), Dust Concentration',
    timeframe: '1570 AD - 2023 AD (Annual Layer Dating)',
    fileSize: '620 MB CSV/ASCII',
    downloads: 875,
    doi: '10.21125/ncpor.antarctic.firn.042',
    accessLevel: 'Open Access',
  },
  {
    id: 'ds-spiti-glacier',
    title: 'Western Himalaya (Samudra Tapu & Batal) Automatic Weather Station (AWS) Meteorological Telemetry',
    region: 'Himalaya',
    station: 'Himansh Station',
    parameters: 'Air Temp, Wind Velocity/Vector, Relative Humidity, Incident Shortwave & Longwave Radiation, Snow Depth',
    timeframe: '2016 - 2025 (Hourly Synchronized)',
    fileSize: '1.2 GB NetCDF/CSV',
    downloads: 2190,
    doi: '10.21125/ncpor.himansh.aws.chandra.v3',
    accessLevel: 'Open Access',
  },
  {
    id: 'ds-maitri-lake',
    title: 'Priyadarshini Lake Limnology, Dissolved Minerals & Sub-surface Bathymetry',
    region: 'Antarctic',
    station: 'Maitri Station',
    parameters: 'Conductivity, pH, Organic Carbon, Trace Metals, Sedimentary core grain analysis',
    timeframe: '2018 - 2024',
    fileSize: '340 MB GeoJSON/CSV',
    downloads: 640,
    doi: '10.21125/ncpor.maitri.lake.priyadarshini',
    accessLevel: 'Restricted / Consortium',
  },
];

export const POLAR_EXPEDITIONS: PolarExpedition[] = [
  {
    id: 'exp-44-isea',
    name: '44th Indian Scientific Expedition to Antarctica (ISEA)',
    season: 'Austral Summer 2024-2025',
    region: 'Antarctic',
    stationBase: 'Bharati & Maitri Stations',
    leader: 'Dr. Rahul Mohan (NCPOR)',
    teamSize: 48,
    duration: 'Nov 2024 – Apr 2025',
    objectives: [
      'Ice core retrieval at inland plateau site (South of Bharati)',
      'Modernization of Maitri Station environmental control units',
      'ISRO Chandrayaan ground communications validation',
      'Marine sediment coring along Prydz Bay shelf'
    ],
    status: 'Active On-Site',
  },
  {
    id: 'exp-arctic-summer-2024',
    name: 'Indian Arctic Summer Research Campaign 2024',
    season: 'Boreal Summer 2024',
    region: 'Arctic',
    stationBase: 'Himadri Station, Ny-Ålesund',
    leader: 'Dr. K. P. Krishnan (Cryosphere Division)',
    teamSize: 16,
    duration: 'June 2024 – September 2024',
    objectives: [
      'Turnaround of IndARC underwater mooring and sensor recalibration',
      'Atmospheric optical depth and aerosol spectrophotometer monitoring',
      'Glaciological terminus survey of Kronebreen and Midtre Lovénbreen glaciers'
    ],
    status: 'Completed',
  },
  {
    id: 'exp-himansh-winter-2025',
    name: 'Chandra Basin High-Altitude Winter Cryosphere Campaign',
    season: 'Winter 2024-2025',
    region: 'Himalaya',
    stationBase: 'Himansh Station (4,080m)',
    leader: 'Dr. Parmanand Sharma',
    teamSize: 8,
    duration: 'December 2024 – March 2025',
    objectives: [
      'Real-time maintenance of snow ablation stakes on Samudra Tapu glacier',
      'Drone-based high-resolution photogrammetry of glacial lakes',
      'Winter stream discharge measuring and permafrost sensor recording'
    ],
    status: 'Active On-Site',
  },
];

export const INSTITUTIONS_LIST: InstitutionProfile[] = [
  {
    id: 'inst-ncpor',
    name: 'National Centre for Polar and Ocean Research',
    shortName: 'NCPOR',
    location: 'Headland Sada, Vasco da Gama, Goa',
    leadMinistry: 'Ministry of Earth Sciences (MoES), Govt. of India',
    activeProjects: 38,
    affiliatedScientists: 142,
    specialties: ['Polar Logistics & Expeditions', 'Ice Core Paleoclimatology', 'Southern Ocean Dynamics', 'Arctic Marine Ecology', 'Himalayan Glaciology'],
    established: 1998,
  },
  {
    id: 'inst-wihg',
    name: 'Wadia Institute of Himalayan Geology',
    shortName: 'WIHG',
    location: 'Dehradun, Uttarakhand',
    leadMinistry: 'Department of Science and Technology (DST)',
    activeProjects: 14,
    affiliatedScientists: 46,
    specialties: ['Himalayan Geodynamics', 'Glacier Mass Balance & GLOF Warning', 'Seismology of the Third Pole'],
    established: 1968,
  },
  {
    id: 'inst-iit-roorkee',
    name: 'Indian Institute of Technology Roorkee (Glaciology Lab)',
    shortName: 'IIT Roorkee',
    location: 'Roorkee, Uttarakhand',
    leadMinistry: 'Ministry of Education',
    activeProjects: 9,
    affiliatedScientists: 28,
    specialties: ['Synthetic Aperture Radar (SAR) Interferometry', 'Debris-Covered Glacier Melting Models', 'Hydrological Runoff'],
    established: 1847,
  },
  {
    id: 'inst-nio',
    name: 'CSIR - National Institute of Oceanography',
    shortName: 'CSIR-NIO',
    location: 'Dona Paula, Goa',
    leadMinistry: 'Council of Scientific and Industrial Research (CSIR)',
    activeProjects: 12,
    affiliatedScientists: 35,
    specialties: ['Southern Ocean Biogeochemistry', 'Hydrothermal Vents', 'Marine Micropaleontology'],
    established: 1966,
  },
  {
    id: 'inst-zsi',
    name: 'Zoological Survey of India (Polar Fauna Unit)',
    shortName: 'ZSI',
    location: 'Kolkata, West Bengal',
    leadMinistry: 'Ministry of Environment, Forest and Climate Change',
    activeProjects: 7,
    affiliatedScientists: 19,
    specialties: ['Antarctic Invertebrate Taxonomy', 'Arctic Benthic Communities', 'Bryophyte Microfauna'],
    established: 1916,
  },
];

export const SCIENTISTS_LIST: ScientistProfile[] = [
  {
    id: 'sci-001',
    name: 'Dr. Thamban Meloth',
    designation: 'Director & Chief Glaciologist',
    institution: 'National Centre for Polar and Ocean Research (NCPOR)',
    specialization: 'Ice Core Paleoclimatology & Cryospheric Dynamics',
    expeditionsCount: 14,
    regions: ['Antarctic', 'Arctic', 'Himalaya'],
    publicationsCount: 118,
    email: 'tmeloth@ncpor.res.in',
    orcid: '0000-0002-8419-4217'
  },
  {
    id: 'sci-002',
    name: 'Dr. Parmanand Sharma',
    designation: 'Scientist-E, Himalayan Cryosphere Program',
    institution: 'National Centre for Polar and Ocean Research (NCPOR)',
    specialization: 'Himalayan Glacier Mass Balance & Hydro-meteorology',
    expeditionsCount: 19,
    regions: ['Himalaya'],
    publicationsCount: 64,
    email: 'pnsharma@ncpor.res.in',
    orcid: '0000-0003-1288-7390'
  },
  {
    id: 'sci-003',
    name: 'Dr. K. P. Krishnan',
    designation: 'Scientist-F, Arctic Operations',
    institution: 'National Centre for Polar and Ocean Research (NCPOR)',
    specialization: 'Arctic Fjord Oceanography & Microbial Biogeochemistry',
    expeditionsCount: 11,
    regions: ['Arctic'],
    publicationsCount: 82,
    email: 'kpkrishnan@ncpor.res.in',
    orcid: '0000-0001-9234-5821'
  },
  {
    id: 'sci-004',
    name: 'Dr. Neloy Khare',
    designation: 'Senior Adviser & Polar Researcher',
    institution: 'Ministry of Earth Sciences (MoES)',
    specialization: 'Paleoclimatology & Southern Ocean Micropaleontology',
    expeditionsCount: 12,
    regions: ['Antarctic', 'Arctic'],
    publicationsCount: 95,
    email: 'nkhare.moes@nic.in',
    orcid: '0000-0002-6120-4100'
  },
  {
    id: 'sci-005',
    name: 'Prof. Manish Mehta',
    designation: 'Senior Scientist, Glaciology Group',
    institution: 'Wadia Institute of Himalayan Geology (WIHG)',
    specialization: 'Glacial Geomorphology & Moraine Stability',
    expeditionsCount: 16,
    regions: ['Himalaya'],
    publicationsCount: 57,
    email: 'mmehta@wihg.res.in',
    orcid: '0000-0002-4589-9132'
  }
];

export const INITIAL_EVIDENCE_ITEMS: EvidenceCheckItem[] = [
  {
    id: 'ev-01',
    claim: 'IndARC observatory records demonstrate that Atlantic water heat transport during late autumn prevents early winter freeze-up in Kongsfjorden.',
    sourceContext: 'Arctic Marine Biology Synthesis Draft',
    submittedBy: 'Dr. K. P. Krishnan',
    submissionDate: '2026-03-28',
    status: 'Verified',
    confidenceScore: 97,
    rationale: 'Validated against continuous 2014-2024 IndARC mooring temperature and salinity profiles published in Polar Research.',
    citations: ['NCPOR Technical Report No. AR-2024-03', 'Journal of Marine Systems (Elsevier)']
  },
  {
    id: 'ev-02',
    claim: 'The Batal and Samudra Tapu glaciers in the Chandra Basin gained positive cumulative mass in the 2023-2024 hydrological year.',
    sourceContext: 'Public Outreach Pamphlet',
    submittedBy: 'Regional Outreach Cell',
    submissionDate: '2026-04-01',
    status: 'Flagged',
    confidenceScore: 24,
    rationale: 'Empirical data from Himansh ablation stakes and geodetic measurements indicates a negative mass balance of -0.42 m w.e., contradicting the claim of positive mass gain.',
    citations: ['Himansh Glaciological Bulletins 2024', 'MoES Annual Performance Report 2024-25']
  },
  {
    id: 'ev-03',
    claim: 'Ice cores drilled at Larsemann Hills preserve records of Southern Annular Mode (SAM) shifts over the past 400 years.',
    sourceContext: 'Antarctic Exhibition Wall Display',
    submittedBy: 'NCPOR Outreach Team',
    submissionDate: '2026-04-02',
    status: 'Verified',
    confidenceScore: 94,
    rationale: 'Consistent with published δ18O and MSA ion ratio findings in Journal of Glaciology.',
    citations: ['NCPOR Ice Core Division Monograph Series 2024', 'Climate of the Past 2023']
  }
];

export const POLAR_QUIZ_QUESTIONS = [
  {
    question: 'What is India’s first permanent research base in Antarctica, established in 1983?',
    options: ['Maitri', 'Dakshin Gangotri', 'Bharati', 'Himadri'],
    correctIndex: 1,
    explanation: 'Dakshin Gangotri was established in 1983 during the 3rd Indian Antarctic Expedition, marking India’s permanent research presence.'
  },
  {
    question: 'Where is India’s Arctic station "Himadri" located?',
    options: ['Greenland', 'Ny-Ålesund, Svalbard (Norway)', 'Bering Strait (Alaska)', 'Franz Josef Land'],
    correctIndex: 1,
    explanation: 'Himadri is located in the international research settlement of Ny-Ålesund in the Svalbard archipelago at 78°55′ N.'
  },
  {
    question: 'Which ministry oversees India’s polar research and logistics through NCPOR?',
    options: [
      'Ministry of Environment, Forest and Climate Change',
      'Ministry of Earth Sciences (MoES)',
      'Department of Atomic Energy',
      'Ministry of External Affairs'
    ],
    correctIndex: 1,
    explanation: 'The National Centre for Polar and Ocean Research (NCPOR) operates autonomously under the Ministry of Earth Sciences (MoES), Govt. of India.'
  },
  {
    question: 'What is the name of India’s high-altitude glaciological station in the Himalayas?',
    options: ['Himansh', 'Rohtang Shield', 'Karakoram Base', 'VayuSthal'],
    correctIndex: 0,
    explanation: 'Himansh was established in 2016 in the Chandra Basin of Himachal Pradesh at 4,080m elevation to study Himalayan glaciers.'
  },
  {
    question: 'Which Indian oceanographic research vessels support Antarctic and Southern Ocean scientific expeditions?',
    options: [
      'INS Vikrant',
      'ORV Sagar Kanya & Sagar Nidhi',
      'MV Kavaratti',
      'RV Celtic Explorer'
    ],
    correctIndex: 1,
    explanation: 'ORV Sagar Kanya and Sagar Nidhi are India’s premier oceanographic research vessels facilitating Southern Ocean and polar expeditions.'
  }
];
