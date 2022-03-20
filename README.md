# The Quizzinator

## Información

'The Quizzinator' es una simple aplicación de preguntas y respuestas, estilo trivial. El usuario introduce su nombre y se le muestran 10 preguntas secuenciales, de las cuales se van recogiendo los errores y aciertos sobre las mismas. El usuario solo dispone de una oportunidad para responder la pregunta. Una vez finalizadas las 10 preguntas, se muestra en pantalla un resumen sobre el cuestionario con las preguntas acertadas, las falladas y el porcentaje de aciertos.

## Requisitos

* Node 16.x o superior.

## Instalación

1. Clonar el proyecto.
2. Ejecutar el comando *npm i* en la carpeta del proyecto.
3. Lanzar la aplicación en modo desarrollo con el comando *npm run dev*
4. Acceder en el navegador web a la URL http://localhost:3000/

## Datos sobre el desarrollo

La aplicación se ha desarrollado utilizando la herramienta de empaquetamiento ViteJS, usando el template de ReactJS. Al inicio, se solicita al usuario un nombre mediante un simple formulario, que se almacena en el Context de React mediante el uso de hooks. A continuación, haciendo uso del API <API_URL>, se solicitan 10 preguntas aleatorias. Esta petición se realiza mediante la librería Axios. Las preguntas se muestran al usuario de una en una, hasta que el usuario las ha completado todas. Toda esta información es almacenada en el contexto de la aplicación, y se va actualizando con cada acción del usuario.

## Puntos a mejorar
