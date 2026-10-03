export type PolarRole = 'researcher' | 'institution' | 'admin' | 'student' | 'media';

export type PolarRegion = 'Arctic' | 'Antarctic' | 'Himalaya' | 'Global / Tri-Polar';

export interface Milestone {
  year: number;
  title: string;
  region: PolarRegion;
  description: string;
  source: string;
}

export interface EditorialInsight {
  id: string;
  category: 'Featured Research' | 'Expedition Story' | 'Polar Science Explained' | 'Data & Discovery';
  title: string;
  description: string;
  region: PolarRegion;
  date: string;
  source: string;
  readTime: string;
  doi?: string;
}

export interface ExpeditionStory {
  id: string;
  region: PolarRegion;
  title: string;
  shortDescription: string;
  station: string;
  image: string;
  leadScientist: string;
  season: string;
  keyFindings: string[];
}

export interface MediaDraft {
  id: string;
  sourceTitle: string;
  sourceType: string;
  audience: 'Public' | 'Student' | 'Teacher' | 'Journalist' | 'General Audience';
  outputType: 'Article' | 'Research Explainer' | 'Social Post' | 'Infographic' | 'Video Script';
  language: 'English' | 'Hindi';
  content: string;
  credits: string;
  doi: string;
  provenance: 'Verified NCPOR Source';
  createdDate: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  region: PolarRegion;
  station: string;
  year: number;
  journal: string;
  doi: string;
  abstract: string;
  datasetUrl?: string;
  status: 'Published' | 'Under Review' | 'Preprint';
  tags: string[];
}

export interface PolarDataset {
  id: string;
  title: string;
  region: PolarRegion;
  station: string;
  parameters: string;
  timeframe: string;
  fileSize: string;
  downloads: number;
  doi: string;
  accessLevel: 'Open Access' | 'Restricted / Consortium';
}

export interface PolarExpedition {
  id: string;
  name: string;
  season: string;
  region: PolarRegion;
  stationBase: string;
  leader: string;
  teamSize: number;
  duration: string;
  objectives: string[];
  status: 'Completed' | 'Active On-Site' | 'Planned';
}

export interface ScientistProfile {
  id: string;
  name: string;
  designation: string;
  institution: string;
  specialization: string;
  expeditionsCount: number;
  regions: PolarRegion[];
  publicationsCount: number;
  email: string;
  orcid: string;
}

export interface InstitutionProfile {
  id: string;
  name: string;
  shortName: string;
  location: string;
  leadMinistry: string;
  activeProjects: number;
  affiliatedScientists: number;
  specialties: string[];
  established: number;
}

export interface MindMapNode {
  id: string;
  label: string;
  category: 'region' | 'station' | 'discipline' | 'discovery' | 'expedition';
  parent?: string;
  region: PolarRegion;
  summary: string;
  keyFacts: string[];
  scientificSignificance: string;
  relatedStations?: string[];
  quizQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface EvidenceCheckItem {
  id: string;
  claim: string;
  sourceContext: string;
  submittedBy: string;
  submissionDate: string;
  status: 'Verified' | 'Pending Verification' | 'Flagged';
  confidenceScore?: number;
  rationale?: string;
  citations?: string[];
}

export interface StationTelemetry {
  id: string;
  name: string;
  region: PolarRegion;
  location: string;
  coordinates: string;
  established: number;
  currentTemp: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  daylight: string;
  primaryResearch: string[];
  liveStatus: 'Active & Operational' | 'Winterized Autonomous' | 'Historic Site';
  imagePath: string;
}
