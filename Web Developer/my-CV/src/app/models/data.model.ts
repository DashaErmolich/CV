export interface Data {
  name: string,
  surname: string,
  subtitle: string,
  location: {
    title: string,
    link: string,
  },
  contacts: {
    email: string,
    tel: string,
    linkedInLink: string,
    gitHubLink: string,
    portfolioLink: string,
  },
  about: string,
  workExperience: {
    title: string,
    items: WorkExperience[]
  },
  courses: {
    title: string,
    items: Education[],
  },
  education: {
    title: string,
    items: Education[]
  },
  skills: {
    title: string,
    items: Skills[]
  },
  languages: {
    title: string
    items: Language[],
  },
  projects: {
    title: string,
    items: Project[],
  },
}

export interface ExperienceBase {
  start: string,
  end: string,
  title: string,
  companyName: string,
  companyLink: string,
}

type Test = {
  details: string[],
}

export interface ExperienceBase {
  start: string,
  end: string,
  title: string,
  companyName: string,
  companyLink: string,
  companyLogo: string,
}

export interface WorkExperience extends ExperienceBase {
  details: string[],
}

export interface Education extends ExperienceBase {
  certificateLink: string | null,
  skills: string[] | null
}

export interface Language {
  title: string,
  level: string,
  emoji: string,
}

export interface Skills {
  title: string,
  items: string[],
}

export interface ListData {
  title: string,
  items: Language[] | Education[] | Skills,
}

export interface Project {
  title: string,
  start: string,
  end: string,
  details: string[],
  deployLink: string,
  gitHubLink: string,
  skills: string[],
}
