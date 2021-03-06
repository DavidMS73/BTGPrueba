# Prueba BTG

A continuación se presentan las principales características y funciones de la aplicación. Al final se encontrará un demo de cómo funciona la aplicación. Como paso inicial será descargar el repositorio para ejecutar la aplicación.

## Back-end

Está desarrollado en SpringBoot a partir del archivo generado en Spring Initializr.  Para ejecutar el back lo ideal es ejecutarlo desde IntelliJ IDEA, el cual se encarga de hacer el build y ejecutar la aplicación de una vez en el puerto **5000**, por lo que se debería importar el proyecto desde la ruta *[pqrappback](https://github.com/DavidMS73/BTGPrueba/tree/main/pqrappback "pqrappback")*.

Está organizado principalmente en:
 - Controllers: encargado del REST de la aplicación.
 - Logic: encargado de la lógica del reclamo, es decir, que sólo se puede agregar un reclamo si la solicitud de petición o queja fue realizada hace 5 días o más o si el área administrativa ya dio respuesta.
 - Models: encargado de mantener los atributos que se mapearán a la base de datos, se creó un modelo especial resultado de unir las colecciones de reclamo con peticiones/quejas.
 - Repositories: encargado de tener la interfaz para realizar las consultas a la base de datos de Mongo.
 - RepositoriesImpl: encargado de tener la clase para realizar el lookup (JOIN en SQL) entre la base de datos de reclamo con peticiones/quejas.

### Base de datos
Se creó una base de datos en MongoDB Atlas, el cual es un servicio en la nube ofrecido por Mongo para crear bases de datos. Las variables de configuración a la base de datos se dejaron quemadas por facilidad de ejecutar la aplicación desde otro lugar, sin embargo esto no debería realizarse en producción, como solución podría ponerse por medio de variables de ambiente.
En caso de querer acceder a la base de datos para conocer todos los datos que hay actualmente se puede realizar por medio de _MongoDB Compass_ el cual es un GUI para explorar, analizar e interactuar con el contenido almacenado en una base de datos de MongoDB sin conocer ni utilizar consultas o por medio del API REST creado. La url de para realizar la conexión puede encontrarse en el archivo *application.properties*, bajo la carpeta resources.

Las colecciones creadas son:
 - counter: encargado de mantener un control sobre el número de radicado, el cual debe ser único.
 - peticion: mantiene todas las peticiones realizadas por el usuario. 
 - queja: mantiene todas las quejas realizadas por el usuario.
 - reclamo: mantiene todos los reclamos realizados por el usuario y los relaciona con la petición o queja correspondiente.

Se decidió el anterior diseño básico de la base de datos teniendo en cuenta que es un único usuario final.

Es necesario aclarar que el back por defecto añade la fecha de creación de la PQR y el atributo *areaAdminDioRta* como *false*.

## Front-end

Está desarrollado en Angular 12.  Para ejecutar el front se deben ejecutar los siguientes comandos una vez se esté dentro de la carpeta *[angular-pqrappfront](https://github.com/DavidMS73/BTGPrueba/tree/main/angular-pqrappfront "angular-pqrappfront")*.

 1. `npm install`: instala las dependencias necesarias para ejecutar el proyecto.
 2. `ng serve --open`: despliega un servidor sobre el puerto **4200** y abre una pestaña del navegador para visualizar la aplicación.

Para el front-end se usó Bootstrap el cual es una biblioteca multiplataforma para facilitar la creación de aplicaciones web. Por defecto al ingresar a la aplicación siempre se dirigirá directamente a las peticiones que tiene el usuario. Se creó una interfaz que fuera lo mas sencilla posible y cumpliera con los requerimientos solicitados.

Es necesario aclarar que las verificaciones de título requerido y detalle son únicamente obligatorias en el front, el back no verifica estos campos.

Por otra parte, en caso de que únicamente se consuma el API REST, la validación de que un reclamo sí pueda realizarse se realiza en el back. Además, como se muestra en el front únicamente se muestra la lista de opciones con las peticiones o quejas sobre las que es posible realizar un reclamo.

## API REST
Las rutas habilitadas de las principales colecciones son:

### Peticiones
 - POST: http://localhost:5000/api/v1/peticion
 - GET todos: http://localhost:5000/pqr/api/v1/peticion
 - GET uno: http://localhost:5000/api/v1/peticion/:id, donde id corresponde al id de la petición
 - PUT: http://localhost:5000/api/v1/peticion/:id, donde id corresponde al id de la petición

### Quejas
 - POST: http://localhost:5000/api/v1/queja
 - GET todos: http://localhost:5000/pqr/api/v1/queja
 - GET uno: http://localhost:5000/api/v1/queja/:id, donde id corresponde al id de la petición
 - PUT: http://localhost:5000/api/v1/queja/:id, donde id corresponde al id de la petición


### Reclamos
 - POST: http://localhost:5000/api/v1/reclamo
 - GET todos: http://localhost:5000/pqr/api/v1/reclamo
 - GET uno: http://localhost:5000/api/v1/reclamo/:id, donde id corresponde al id de la petición
 - PUT: http://localhost:5000/api/v1/reclamo/:id, donde id corresponde al id de la petición

Es así que algunas mejoras que se pueden hacer son: habilitar la carga de archivos para PQR, habilitar la ruta para eliminar datos de las colecciones (DELETE), crear las variables de ambiente respectivas para mantener la seguridad de la aplicación, mejorar diseño y opciones de la interfaz, entre muchas otras más.

## Demo
### Peticiones
![Peticiones](https://github.com/DavidMS73/BTGPrueba/blob/main/videos/peticiones.gif)

### Quejas
![Peticiones](https://github.com/DavidMS73/BTGPrueba/blob/main/videos/quejas.gif)

### Reclamos
![Peticiones](https://github.com/DavidMS73/BTGPrueba/blob/main/videos/reclamos.gif)
