export interface Data {
  name: string,
  surname: string,
  location: string,
  contacts: {
    email: string,
    tel: string,
    LinkedInLink: string,
    GitHubLink: string,
  },
  about: string,
  workExperience: WortExperience[],
  education: Education[],
  skills: string[],
  languages: Language[],
}

interface ExperienceBase {
  start: string,
  end: string,
  title: string,
  companyName: string,
  companyLink: string,
}

interface WortExperience extends ExperienceBase {
  details: string[],
}

interface Education extends ExperienceBase {
  certificateLink: string | null,
}

interface Language {
  title: string,
  level: string,
}
