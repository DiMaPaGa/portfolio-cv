# PROYECTO SERVIDOR: PORTFOLIO CV



**Denominación del Ciclo**: Desarrollo de Aplicaciones Web (DAW).- 2º Curso
**Alumno**: [Diana Mª Pascual García]



## ÍNDICE


1. [INTRODUCCION](#introduccion)
2. [FUNCIONALIDADES DEL PROYECTO Y TECNOLOGÍAS UTILIZADAS](#funcionalidades-del-proyecto-y-tecnologías-utilizadas)
3. [GUÍA DE INSTALACIÓN](#guía-de-instalación)
4. [GUíA DE USO](#guía-de-uso)
5. [ENLACE A FIGMA](#enlace-a-figma)
6. [CONCLUSIÓN](#conclusión)
7. [CONTRIBUCIONES, AGRADECIMIENTOS Y REFERENCIAS](#contribuciones-agradecimientos-y-referencias)
8. [LICENCIAS](#licencias)
9. [CONTACTO](#contacto)

---



## INTRODUCCION



### Descripción del Proyecto

El proyecto **Portfolio cv** es una página web de portfolio curricular que organiza y presenta información personal, académica y profesional de manera estructurada, atractiva y funcional. Se trata de una herramienta que facilita la presentación de proyectos personales y logros, con la posibilidad de ser usada como carta de presentación ante empleadores.

La aplicación consume información desde un JSON multilingüe (español e inglés) para asegurar su adaptabilidad, y hace uso de una API REST para gestionar los proyectos.



### Justificación  

El proyecto se ha desarrollado como parte de un trabajo académico para demostrar competencias en desarrollo web, utilizando Astro, HTML, TailwindCSS, JavaScript y consumo de APIs. 

Del mismo modo, tiene una motivación práctica. En el contexto actual, tener un portafolio online es crucial para los desarrolladores, ya que muestra de manera tangible sus habilidades y experiencia. Este proyecto facilita la transmisión de toda esa información que puede resultar de interés para empleadores, pero que no siempre puede transmitirse a través de un simple curriculum vitae o en una primera entrevista de trabajo.



### Objetivos

- Crear un portfolio curricular que permita presentar la informacíon de manera clara y profesional.
- Consumir información desde un JSON multilingüe (español e inglés).
- Consumir información desde la API REST desarrollada en la asignatura de Servidor.
- Permitir el visionado de proyectos paginados.
- Permitir el borrado de proyectos.
- Permitir la búsqueda de proyectos por palabra clave.
- Permitir la búsqueda de proyectos por tecnología.
- Creación de formulario de contacto con validaciones.
- Formulario de login con validación de entrada y funcionalidad de logout.
- Diseño amigable de la web, previo estudio, que ajuste la estructura de la información tal y como se solicita.
- Uso de recursos diferentes, sin repetir soluciones, para el desarrollo de la web. 



### Motivación  

La motivación de este proyecto surge de la necesidad de tener una herramienta que facilite la presentación de proyectos personales y logros, con la posibilidad de ser usada como carta de presentación ante empleadores.

---



## FUNCIONALIDADES DEL PROYECTO Y TECNOLOGÍAS UTILIZADAS 




### Secciones implementadas

- **Seleccion de Idioma**: Permite al usuario elegir el idioma del CV que desea visualizar.
- **Navbar**: Navegación principal con enlaces a diferentes secciones de la web y solución responsiva. Se ajusta al tamaño de la ventana del navegador cambiando a una barra de navegación vertical en dispositivos medianos y pequeños.
- **About Me**: Información básica sobre el autor (nombre, foto, profesión y descripción).
- **Education**: Detalle de la formación académica.
- **WorkExperience**: Historial laboral con descripciones de las experiencias profesionales.
- **Skills**: Descripción de habilidades técnicas categorizadas en frontend, backend y DevOps.
- **Projects**: Listado dinámico de proyectos consumidos desde una API REST. Paginación y búsqueda con validación mínima de entradas.
Filtro por tecnología usada en los proyectos.
- **Reference**: Listado de contactos que pueden dar referencias profesionales.
- **Contact**: Formulario de contacto validado en tiempo real (nombre, apellido,email y texto). Restricciones: nombre y apellido con formato adecuado, email válido, texto de al menos 20 caracteres. Botón solo habilitado si el formulario está completo y validado.
- **Login**: Formulario de login con validación de entrada (correo y contrasena). Botón de logout.
- **Administración**: Tras el login, se llega al panel de control, pero se encuentra actualmente en fase de construcción. Permite volver a la pantalla de inicio.
- **Footer**: Muestra nombre y derechos de autor. Enlace a Linkedin, GitHub y correo (con copiado de dirección al portapapeles).

### Otros detalles de interés:

- **Caracteristicas Técnicas**: 
    - **Multilenguaje:** Información gestionada desde JSON en inglés y español. Hay dos grupos de archivos json: Unos alojados en public/data/lang, que controlan la traducción de los títulos de las secciones y otros en public/data, que controlan los contenidos completos de cada sección.
    
    - **Properties:** Este json alojado en public/data contiene el control centralizado del valor del Test Mode.

    - **Types:** La carpeta public/data/types contiene las interfaces de todos los tipos de datos del proyecto descritos para Typescript.
    
    - **Buenas Prácticas:** Uso de comentarios, manejo de errores y estructura de proyecto clara con un intento de diseño responsivo.







### Tecnologías Utilizadas:

- **Astro**: Framework para la creación de web estaticas, con componentes reutilizables.
- **Tailwind CSS**: Diseño elegante y flexible mediante clases predefinidas.
- **JavaScript**: Funcionalidades dinámicas y consumo de APIs.
- **JSON**: Gestión de información en formato estructurado.
- **API REST**: Consumo de información desde un servidor.
- **Typescript**: Lenguaje de programación de alto nivel.

---



## GUíA DE INSTALACIÓN



### Requisitos Previos

- **Node.js** (versión 16.8 o superior).
- **npm** (el gestor de paquetes de Node.js) o yarn (si prefieres usarlo). npm se instala automáticamente con Node.js.





### Pasos para instalar en local

**1.** Clonar el repositorio:

   ```bash
   git clone https://github.com/DiMaPaGa/portfolio-cv
   ```

**2.** Navega al directorio del proyecto:

   ```bash
   cd servidorporfolio
   ```

**3.** Instala las dependencias:

 **ATENCION**: Asegúrate de estar en el directorio del proyecto y luego instala las dependencias necesarias ejecutando el siguiente comando:

   ```bash
   npm install
   ```
    Esto instalara todas las dependencias necesarias para que el proyecto funcione correctamente.

**4.** Verifica la configuración de TypeScript:
    Como el proyecto utiliza TypeScript, hay que asegurarse de que la configuración es correcta en **tsconfig.json**
   
   Debe aparecer algo similar a lo siguiente:

   - **extends:** Extiende la configuración estricta de Astro (astro/tsconfigs/strict).
   - **compilerOptions:** Establece opciones como el uso de react-jsx para trabajar con React y una correcta resolución de módulos.
   - **include:** Asegura que todos los archivos en el directorio src/ y el archivo astro.config.ts estén incluidos.
    Si no necesitas cambios, esta configuración es adecuada para comenzar.

**5.** Configura Tailwind CSS:

   - Abre el archivo **tailwind.config.js**.
   - Agrega la siguiente configuración si no la encuentras ya para este proyecto:

   ```bash
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
		  },
		  colors: {
			greenLight: {
			  DEFAULT: '#D3EBE5', // Para detalles secundarios
			},
			rose: {
			  DEFAULT: '#EBD9D3', // Color de fondo principal
			},
			brown: {
			  DEFAULT: '#6B3B2B', // Para textos principales
			},
			green: {
			  DEFAULT: '#559687', // Para detalles o enlaces destacados
			},
			brownLight: {
			  DEFAULT: '#AB7E6F', // Para acentos secundarios
			},
		  },
		  backgroundImage: {
			'home-background': "url('/images/fondoHome.png'), linear-gradient(to bottom, rgba(235, 217, 211, 0.8), rgba(235, 217, 211, 0.4))",
			'education-background': "url('/images/Pizarra.png'), linear-gradient(to bottom, rgba(235, 217, 211, 0.8), rgba(235, 217, 211, 0.4))",
		  },

		  transitionTimingFunction: {
			'ease-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
		  },
		  transitionDuration: {
			'custom': '300ms',
		  },
		  transform: {
			'pop-down': 'translateY(0)',
			'pop-up': 'translateY(-5px)',
		  },
		  
		},
	  },
	  plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.pop-down-child': {
			  transform: 'translateY(0)',
			  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
			},
			'.pop-down-child:hover': {
			  transform: 'translateY(-5px)',
			},
			'.option-hover-green': {
          		'&:hover': {
            		'background-color': '#559687',
            		'color': '#EBD9D3',
		  		},
		  	},
			
		  });
		},
	  ],
	};
   ```

   

## GUÍA DE USO



### Inicio del servidor de desarrollo

Una vez que todo esté configurado, puedes iniciar el servidor de desarrollo local con:

```bash	
npm run dev
```

Esto lo arrancará  y se podrá acceder al proyecto desde el navegador a la dirección indicada en la terminal.

### ¿Como construir el proyecto para ser desplegado?

Puedes crearlo en la terminal con:

```bash	
npm run build
```

Esto ejecutará los comandos de Astro para comprobar y construir el proyecto en la carpeta dist/, que estará lista para ser desplegada.

*************************************************
## ENLACE A FIGMA

El enlace a FIGMA es:
```bash	
https://www.figma.com/design/PohCscsdnrp5CkQj4cTBwc/PascualGarcia-Portfolio?node-id=0-1&t=8KCfS2F9WtxBP5dd-1
```	



## CONCLUSIÓN

Este proyecto se aproxima hacia la construcción de una página de portfolio profesional. A través de la implementación de Astro, codigo JS, y Tailwind CSS, se logra un sitio atractivo y accesible. 

Durante el desarrollo, se abordaron varios aspectos clave:

***Estructuración del Proyecto:*** Una organización coherente de carpetas y archivos que facilita el mantenimiento y la escalabilidad.

***Consumo de Datos Dinámicos:*** La integración de datos desde un archivo JSON y una API REST demostró el manejo eficiente de datos dinámicos y consumibles en múltiples idiomas.

***Interactividad y Validaciones:*** Se añadieron funcionalidades avanzadas, como la validación en tiempo real del formulario de contacto y la paginación en la sección de proyectos, mejorando la experiencia del usuario.

***Mejores Prácticas de Desarrollo:*** Se aplicaron conceptos como modularidad, reutilización de componentes y documentación completa, garantizando un código limpio y funcional.

Aunque el proyecto cumple con la mayoría de los requisitos establecidos, se identificaron áreas de mejora, como la implementación de la consola de administración y la creación de un WebComponent. Estos puntos pueden ser trabajados en un futuro para completar el alcance total del proyecto.



## CONTRIBUCIONES, AGRADECIMIENTOS Y REFERENCIAS

### Contribuciones:

Este proyecto fue desarrollado de manera individual. A los aprendizajes obtenidos en las clases y actividades, tuve que sumarle algunas horas más de estudio de tutoriales para un correcto manejo de algunas de las tecnologías utilizadas.
    
Gracias a ello, actualmente creo manejarme un poco mejor con las especificaciones de **TypeScript** y con algunas estrategias de **Tailwind CSS**. Me parece de gran utilidad manejarse en los cambios del *tailwind.config.js*, para personalizar el proyecto de acuerdo a sus necesidades.

### Agradecimientos:

Agradezco a **José Carlos Moreno** su actitud de continuo apoyo cuando el estrés ha empezado a aparecer en la recta final de este periodo de proyectos.

Por este mismo motivo, tengo que volver a mencionar a **Joaquin Borrego**, que incluso ha resistido de manera estoica mis críticas ante la propuesta de crear una web dinámica en un entorno ideado para generar web estáticas.

A **Rafael Mancina**, que con sus tareas me ha hecho ver que cualquier proyecto es susceptible de ser desplegado, incluso en el más inhóspito de los entornos. 

De mis compañeros de clase, al trío **Laura Padilla**, **Alejandro Navarro** y **Luna García-Arcicóllar**,porque como ya he comentado en otras ocasiones, siempre saben cómo apoyar y despertar mi creatividad.

Pero en esta ocasión, agrego también a **Miguel Ángel Reyes**, con sus recomendaciones y consejos de aspectos a tener en cuenta en el despliegue, ya que sin duda ello ha agilizado muchísimo la experiencia.


### Referencias:

https://docs.astro.build/es/getting-started

https://tailwindcss.com/docs/installation

https://www.typescriptlang.org/docs/



## LICENCIAS

This project is licensed under the **GNU General Public License (GPL) v3** - see the [LICENSE](LICENSE) file for details.




## CONTACTO

Desarrollado por: Diana Mª Pascual García
Correo: [dianamariapascual@gmail.com[](mailto:dianamariapascual@gmail.com)]
Linkedin: https://www.linkedin.com/in/diana-pascual-garc%C3%ADa-47209431/
GitHub: https://github.com/DiMaPaGa
