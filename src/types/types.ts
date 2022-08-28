export type WorkExperienceI = {
  "company": string,
  "contentful_id": string,
  "country": string,
  "from": string,
  "id": string,
  "role": string,
  "to": string,
  "description": {
    raw: string
  }
}

export type DigitalSkillAreaI = {
  "id": string,
  "contentful_id": string,
  "areaName": string,
  "skills": string[]
}
