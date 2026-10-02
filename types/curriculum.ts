export type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  location: string | null;
  summary: string | null;
  photoUrl: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
};

export type AcademicExperience = {
  id: string;
  profileId: string;
  institution: string;
  course: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
};

export type ProfessionalExperience = {
  id: string;
  profileId: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
};

export type Technology = {
  id: string;
  name: string;
  category: string | null;
};

export type Project = {
  id: string;
  profileId: string;
  name: string;
  description: string;
  githubUrl: string | null;
  projectUrl: string | null;
  startDate: string | null;
  endDate: string | null;
  technologies: Technology[];
};

export type FullProfile = Profile & {
  academicExperiences: AcademicExperience[];
  professionalExperiences: ProfessionalExperience[];
  projects: Project[];
};
