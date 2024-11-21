export interface ProjectModel {
    projectId: number;
    projectName: string;
    description: string;
    startDate: string;
    endDate: string;
    repositoryUrl?: string;
    demoUrl?: string;
    picture?: string;
    statusName: string;
    developers: string[];
    technologies: string[];
  }

  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
  }