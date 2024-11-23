import type { ProjectModel } from "./ProjectModel";

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
            level: string;
          }>;
        };
        backend: {
          title: string;
          items: Array<{
            name: string;
            level: string;
          }>;
        };
        devops: {
          title: string;
          items: Array<{
            name: string;
            level: string;
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
            emailLabel: string;
            emailPlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submitButton: string;
            nameError: string;
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
  