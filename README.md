# Azaroso
random lucky game, in html, css, js
 **RANDOM LUCKY**

## Objetivo

> Desarrollar una página web dinámica y animada para una empresa de juegos online.
> 

## Requisitos

- **Requisitos funcionales**
    - **RANDOM LUCKY**
        
        **Mínimos** 
        
        - La aplicación DEBE permitir ingresar nombres a una lista
        - La aplicación DEBE tener una colección de mensajes con suerte
        - La aplicación DEBE tener la funcionalidad de dar un mensaje a cada nombre de la lista de manera aleatoria
        - La aplicación DEBE mostrar un aviso con la "suerte" para el nombre seleccionado
        - La aplicación DEBE poder editar el nombre de usario
        - La aplicación DEBE poder eliminar algún nombre de usuario de la lista
        - La aplicación no DEBE poder funcionar si la lista de usuarios está vacía
        - La aplicación DEBE poder reiniciarse
        
        **Extras**
        
        - La aplicación DEBE almacenar en el *localstorage* las listas de personas con su mensaje y la fecha
        - La aplicación DEBE mostrar el historial del *localstorage*


- **Requisitos UX/UI**
    - Diseñar user flow (centrado en UX)
    - La aplicación DEBE tener efectos de sonido
    - La aplicación DEBE tener una pantalla de inicio
    - La aplicación DEBE tener un botón de reinicio
    - La aplicación DEBE tener muchas animaciones y transiciones que le den valor al negocio
    - La aplicación DEBE tener eventos que activen animaciones
    - Las temáticas de la aplicación son de libre elección
    - El diseño de la aplicación DEBE ser creativo, interactivo y entretenido
    - Eventos de teclado, mouse, etc

- **Requisitos Técnicos**
    - Front-end: Tecnologías HTML, CSS, JS (vanilla)
    - Diseño: figma
    - Git (gitflow)
    - Responsive and adaptative behavior: mobile first
    - Código Limpio
    - Marcado HTML semántico
    - Clases CSS reutilizables
    - Código modular tanto CSS/SASS como JS

- **Requisitos Ciberseguridad**
    - **Validación**: Verifica que todos los datos ingresados por el usuario cumplan con los formatos esperados.
    - **Eliminar Caracteres Peligrosos**: Utiliza una lista blanca de caracteres permitidos y elimina cualquier carácter que no esté en esta lista.
    - **Documentación:** Escribir o documentar los hallazgos y medidas implementadas para asegurar la página web.


 
 **RANDOM LUCKY** PLANIFICACIÓN DEL PROYECTO´ EL AZAROSO

OBJETIVO: 
 
 Desarrollar una página web animada y dinámica que asigne mensajes de "suerte" a usuarios de forma aleatoria, con una experiencia atractiva y segura.

### 1. Investigación UX


Diseño de la experiencia de usuario (UX) y de la interfaz de usuario (UI) de la aplicación web.

ENTREGA:
 
Página funcional en HTML, CSS y JS.
Diseño en Figma.
Código modular, limpio y documentado.

ROLES EQUIPO:

Prduct Manager: Trabaja en estrecha colaboración con el equipo de diseño y desarrollo para definir los objetivos del proyecto y establecer expectativas claras desde el principio, y es el enlace con el cliente. 
Scrum Master: Coordina el equipo y supervisa el progreso.
Desarrollador Front-end: Implementa funcionalidades y diseño.
Diseñador UX/UI: Crea wireframes y prototipos en Figma.
Especialista en Seguridad: Implementa medidas de validación y seguridad.

HERRAMIENTAS:

Gestión del proyecto: Jira (aplicar sprints y user stories).
Diseño: Figma (WireFrames, MockUps)
Versionamiento de código: Git/GitHub con gitflow.

User Stories (ejemplo)

Como usuario: 
-quiero ingresar nombres a una lista para que puedan recibir mensajes de suerte.
-quiero eliminar nombres de la lista para mantenerla actualizada.
-quiero ver animaciones y transiciones para una experiencia más atractiva.


DESARROLLO:

## Diseño UX/UI

Fase 1 : Diseño  en Figma

Crear wireframes de las siguientes vistas:
Pantalla de inicio con bienvenida y botón de comenzar.
Interfaz principal con lista editable de usuarios y botón para asignar mensajes.
Modal o sección de historial con animaciones.
Aplicar diseño responsive con enfoque mobile first.
Seleccionar colores y fuentes que reflejen la temática elegida (Pitons@: Allanator).


Fase 2: Prototipo interactivo.

Simular animaciones y transiciones (hover, clic, eventos de teclado).


## Implementación Técnica
Estructura básica:

HTML semántico: Estructurar secciones principales: cabecera, lista de usuarios, botón de reinicio, etc.

CSS:archivos separados ( usuarios.css, mensajes.css).
Utilizar variables para colores y fuentes.
Implementar transiciones suaves y efectos animados.

JavaScript:
Funcionalidades principales en archivos separados ( usuarios.js, mensajes.js).

Funcionalidades clave:

Gestión de lista: Agregar, editar y eliminar nombres.
Asignación aleatoria: Asignar un mensaje de suerte de forma aleatoria.
Reinicio: Limpiar mensajes.
Efectos y eventos: Animaciones al hacer clic, hover, teclas, etc.

## Ciberseguridad

Validaciones:
Validar que los nombres no contengan caracteres peligrosos ( ej: < >).
No permitir listas vacías antes de ejecutar acciones.

Escape de datos:
Limpiar entradas antes de mostrarlas (evitar inyecciones de código).

Auditoría de seguridad:
Documentar las medidas implementadas.

## PRUEBAS

Pruebas Funcionales:
Validar cada requisito funcional:
Ingresar nombres.
Eliminar nombres.
Asignación aleatoria de mensajes.
Función de reinicio.

Pruebas de UX/UI:
Verificar adaptabilidad en diferentes dispositivos (mobile-first).
Comprobar transiciones y animaciones.

Pruebas de Seguridad:
Introducir entradas maliciosas para verificar validaciones.


## SEGUIMIENTO Y ENTREGA
Duración estimada del proyecto: 10 días.

Revisión al sexto día: Actualización de avances, validación de cumplimiento de sprints.

***Entrega Final: Página funcional con código documentado y diseño en Figma.


/project EL AZAROSO
  ├── index.html
  ├── style
  │   ├── reset.css
  │   ├── welcome.css
  │   ├── game.css
  |   └── card-game.css
  |   
  ├── script.js
  └── /assets
      └── Img
      └── Gifs
      └── Icons


