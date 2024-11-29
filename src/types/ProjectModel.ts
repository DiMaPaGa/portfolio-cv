
/**
* Definición del modelo de un proyecto:
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
* 
**/
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

  /**
   * Modelo de paginación:
   *    pageNumber: Número de página actual.
   *    pageSize: Número de elementos por página.
   *    offset: Desplazamiento desde el inicio de los elementos.
   *    paged: Indica si la respuesta es paginada.
   *    unpaged: Indica si la respuesta no es paginada.
   *  */ 
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

  /**
   * Modelo de la respuesta de la API
   *    message: Mensaje que describe el resultado de la operación (éxito, error, etc.).
   *    data: Datos que contienen la información de la respuesta de la API.
   *      content: Lista de elementos (por ejemplo, proyectos) dentro de la página solicitada.
   *      pageable: Información de paginación sobre la consulta.
   *      last: Indica si la respuesta es la última página.
   *      totalPages: Número de páginas totales.
   *      totalElements: Número de elementos totales en la base de datos.
   *      size: Número de elementos por página.
   *      number: Número de página actual.
   *      sort: Metadatos de ordenamiento.
   *        empty: Indica si la respuesta esta vacia.
   *        unsorted: Indica si la respuesta no esta ordenada.
   *        sorted: Indica si la respuesta esta ordenada.
   *      numberOfElements: Número de elementos en la página actual.
   *      empty: Indica si la respuesta es vacia.
   * 
   *  */ 
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