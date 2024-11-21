
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
      items: Array<{
        name: string;
        level: string;
      }>;
    };
    project: any[]; // Deja esto como un array vacío si no tienes proyectos definidos.
    contact: {
      title: string;
      email: string;
      linkedin: string;
    };
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
  