/**
 * Definición de un proyecto individual:
 *    projectId: Identificador del proyecto.
 *    projectName: Nombre del proyecto.
 *    description: Descripción del proyecto.
 *    startDate: Fecha de inicio del proyecto.
 *    endDate: Fecha de finalización del proyecto.
 *    repositoryUrl: URL del repositorio del proyecto.
 *    demoUrl: URL de la demo del proyecto.
 *    picture: URL de la imagen del proyecto.
 *    statusName: Nombre del estado del proyecto.
 *    developers: Array de nombres de desarrolladores.
 *    technologies: Array de nombres de tecnologías.
 * */ 
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
  
  /**
   * Metadatos sobre la paginación de las respuestas de la API:
   *    pageNumber: Número de página actual.
   *    pageSize: Número de elementos por página.
   *    offset: Desplazamiento.
   *    paged: Indica si la respuesta es paginada.
   *    unpaged: Indica si la respuesta no es paginada. 
   *    sort: Metadatos de ordenamiento.
   *      empty: Indica si la respuesta esta vacia.
   *      unsorted: Indica si la respuesta no esta ordenada.
   *      sorted: Indica si la respuesta esta ordenada.
   * 
   *  */ 
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
  
  /**
   * Estructura completa de la respuesta de la API que devuelve un array de proyectos:
   *    message: Mensaje de la respuesta, que muestra el estado de la operación.
   *    data: Datos que contienen los proyectos e información de la paginación.
   *      content: Array de proyectos que corresponde a la página solicitada.
   *      pageable: Información de paginación sobre la consulta
   *      totalPages: Número de páginas totales.
   *      totalElements: Número de proyectos totales en la base de datos.
   *      size: Número de elementos por página.
   *      number: Número de página actual.
   *      sort: Metadatos de ordenamiento.
   *        empty: Indica si la respuesta esta vacia.
   *        unsorted: Indica si la respuesta no esta ordenada.
   *        sorted: Indica si la respuesta esta ordenada.
   *      first: Indica si la respuesta es la primera página.
   *      last: Indica si la respuesta es la última página.
   *      numberOfElements: Número de elementos en la página actual.
   *      empty: Indica si la respuesta es vacia.
   * 
   *  */ 

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

  /**
   * Propiedades para manejar la paginación en un componente:
   *    currentPage: Número de página actual.
   *    lastPage: Número de páginas totales.
   *    onPageChange: Función que se llama cuando se cambia de página.
   * 
   *  */
  export interface PaginationProps {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
  }
  
  