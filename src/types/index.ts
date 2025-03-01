// This file exports TypeScript interfaces and types used throughout the application for type safety.

export interface Project {
  id: number;
  name: string;
  code: string;
}

export interface Entry {
  id: number;
  projectId: string;
  percentage: string;
  isManuallySet: boolean;
}

export interface TimesheetData {
  weekStarting: string;
  entries: Entry[];
  total: number;
}

export interface PreviousSubmissions {
  [key: string]: Entry[];
}