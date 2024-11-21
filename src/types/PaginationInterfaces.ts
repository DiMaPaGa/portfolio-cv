// Definición de un proyecto individual
export interface Project {
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
  
  // Metadatos sobre la paginación de las respuestas
  export interface Pageable {
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
  }
  
  // Estructura completa de la respuesta de la API
  export interface ProjectApiResponse {
    message: string;
    data: {
      content: Project[];
      pageable: Pageable;
      totalPages: number;
      totalElements: number;
      size: number;
      number: number;
      sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
      };
      first: boolean;
      last: boolean;
      numberOfElements: number;
      empty: boolean;
    };
  }

  export interface PaginationProps {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
  }
  
  