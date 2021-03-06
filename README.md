# The Quizzinator

## Información

Aplicación de questionario, estilo trivial, donde el usuario debe introducir un nombre para que se le muestren 10 preguntas, en orden secuencial, 
de las cuales se van recogiendo los errores y aciertos sobre las mismas. El usuario solo dispone de una oportunidad para responder cada pregunta. 
Una vez finalizadas las 10 preguntas, se muestrará en pantalla un resumen con las preguntas acertadas, las falladas y el porcentaje de aciertos.

Puedes probar la aplicación en https://dashing-kelpie-381b0b.netlify.app/

## Requisitos

* Node 16.x o superior.
* React 17.x

## Instalación

1. Clonar el proyecto.
2. Ejecutar el comando *npm i* en la carpeta del proyecto.
3. Lanzar la aplicación en modo desarrollo con el comando *npm run dev*
4. Acceder en el navegador web a la URL http://localhost:3000/

## Testing

Ejecutar el comando *npm run test* para lanzar test en consola o *npm run test:ui* para lanzar los tests en interfaz en navegador.

## Notas sobre el desarrollo

*The Quizzinator* es una single page application que ha sido desarrollada en React, utilizando la herramienta de empaquetado ViteJS.
Para ello, se han implementado distintos componentes funcionales, gestionando el estado y el ciclo de vida de cada uno mediante el uso de los hooks *useState* y *useEffect*, y el estado global de la aplicación con *useContext*.

La aplicación está compuesta por 3 páginas principales:
1. *Home:* Pantalla de bienvenida donde se solicita al usuario un nombre mediante un formulario.
2. *Quiz:* Pantalla con las 10 preguntas aleatorias obtenidas por consulta al API https://opentdb.com/ que el usuario debe responder, de una en una, donde también se muestra el progreso del usuario.
3. *Summary:* Pantalla con el resumen del questionario realizado por el usuario, donde se indican las preguntas correctas e incorrectas y el porcentaje de acierto.

Los datos se almacenan en el contexto mediante el uso del hook *useContext*.

Durante el desarrollo se han hecho uso de los siguientes patrones de diseño:
* Module Pattern: Para extrar funcionalidades y hacerlas reutilizables (https://www.patterns.dev/posts/module-pattern/)
* Provider Pattern: Para compartir datos entre componentes (https://www.patterns.dev/posts/provider-pattern/)
* Hooks Pattern: Uso de hooks | https://www.patterns.dev/posts/hooks-pattern/
* Container/presentational Pattern: Enforce separation of concerns by separating the view from the application logic | https://www.patterns.dev/posts/presentational-container-pattern/


## Puntos a mejorar

* Diseño: hacer que sea más atractivo para el usuario.
* Resumen de preguntas y respuestas más detallado.
* Testing, tanto pruebas unitarias como pruebas de integración.
* Añadir otros tipos de respuestas (texto, select).
* Uso de custom hooks para gestionar el contexto y el cuestionario.
* Añadir navegación hacia atrás para revisar las preguntas y respuestas anteriores.
* Accesibilidad.
* Responsive.
* Utilizar styled-components o CSS modules
