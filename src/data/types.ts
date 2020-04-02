import { data } from "./sam";

export type Resume = typeof data;
export type ResumeSkill = typeof data.skills[0];
export type ResumeJob = typeof data.jobs[0];
