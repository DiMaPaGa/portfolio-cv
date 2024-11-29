/**
 * Interfaz que define el tipado de las traducciones del layout del cv:
 *    navbar: Interfaz que define el tipado de las traducciones del navbar.
 *    footer: Interfaz que define el tipado de las traducciones del footer.
 */

export interface TranslationsLayout {
    navbar: {
      aboutMe: string; 
      education: string;
      workExperience: string;
      skill: string;
      project: string;
      reference: string;
      contact: string;
    };
    footer: {
      copyright: string; 
    };
  }
  