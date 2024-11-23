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

  // Modelo de paginación
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

  // Modelo de la respuesta
export interface ApiResponse<T> {
  message: string;
  data: {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
}