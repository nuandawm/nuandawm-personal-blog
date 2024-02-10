type ContentfulEntityI = {
  "id": string;
  "contentful_id": string;
}

export type WorkExperienceI = ContentfulEntityI & {
  "company": string;
  "country": string;
  "from": string;
  "role": string;
  "to": string;
  "description": {
    "raw": string;
  };
  "longDescription": {
    "raw": string;
  }
}

export type DigitalSkillAreaI = ContentfulEntityI & {
  "areaName": string;
  "skills": string[];
}

export type EducationAndTrainingI = ContentfulEntityI & {
  "country": string;
  "from": string;
  "name": string;
  "to": string;
  "institution": string;
  "description": {
    "raw": string;
  };
}
