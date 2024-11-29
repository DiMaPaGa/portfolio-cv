// Importación de los tipos para el modelo de proyecto (definidos en los archivos .ts)
import type { ProjectModel } from "./ProjectModel";

/**
 * Interfaz que define el tipado de las traducciones del cv completo:
 *    home: Interfaz que define el tipado de las traducciones del componente Home.
 *    aboutMe: Interfaz que define el tipado de las traducciones del componente AboutMe.
 *    education: Interfaz que define el tipado de las traducciones del componente Education.
 *    workExperience: Interfaz que define el tipado de las traducciones del componente WorkExperience.
 *    skill: Interfaz que define el tipado de las traducciones del componente Skill.
 *    project: Interfaz que define el tipado de las traducciones del componente Project.
 *    contact: Interfaz que define el tipado de las traducciones del componente Contact.
 *    reference: Interfaz que define el tipado de las traducciones del componente Reference.
 **/
export interface Translations {
    home: {
      title: string;
      subtitle: string;
      description: string;
    };
    aboutMe: {
      title: string;
      name: string;
      photo?: string;
      profession: string;
      description: string;
    };
    education: {
      title: string;
      items: Array<{
        institution: string;
        degree: string;
        years: string;
      }>;
    };
    workExperience: {
      title: string;
      items: Array<{
        jobTitle: string;
        company: string;
        image?: string;
        years: string;
        description: string;
      }>;
    };
    skill: {
      title: string;
      categories: {
        frontend: {
          title: string;
          items: Array<{
            name: string;
            level: number;
            logo?: string;
          }>;
        };
        backend: {
          title: string;
          items: Array<{
            name: string;
            level: number;
            logo?: string;
          }>;
        };
        devops: {
          title: string;
          items: Array<{
            name: string;
            level: number;
            logo?: string;
          }>;
        };
      };
    };
    project:{
        title: string; 
        items: Array<ProjectModel
          >
    };
    contact: {
        form: {
            title: string;
            nameLabel: string;
            namePlaceholder: string;
            surnameLabel: string;
            surnamePlaceholder: string;
            emailLabel: string;
            emailPlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submitButton: string;
            nameError: string;
            surnameError: string;
            emailError: string;
            messageError: string;
            confirmationMessage: string;
    }
    },
    reference: {
      title: string;
      items: Array<{
        name: string;
        relationship: string;
        contact: string;
        photo?: string;
        description: string;
      }>;
    };
  }
  