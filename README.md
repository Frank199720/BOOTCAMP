# BOOTCAMP
Full Stack -> API NODE MONGO TYPESCRIPT 
#DEPENDENCIAS INSTALADAS
-dotenv : Sirve para manejar las variables de entorno señaladas en el archivo .env
-express : framework de NodeJs
-@types/express: posee el tipado necesario para TypeScript referente a express
-@types/jest : posee el tipado necesario para Jest
-@typescript/node : Posee el tipado para la aplicación de Node 
@typescript-eslint/eslint-plugin , @typescript-eslint/parser: tipado para configuración de eslint 
concurrently : permite ejecutar comandos de manera concurrente dos o más comandos
eslint : permite configurar reglas de codificación para adecuarse a las mejores practicas posibles
jest : sirve para realizar pruebas unitarias del código escrito así como también pruebas a peticiones
nodemon : permite observar los cambios mientras se desarrolla la aplicación , reinicia el servidor al observar cambios en los archivos señalados
supertest : permite testear las peticiones al API
ts-jest : permite usar jest en archivos escritos con typescript y no ejecutarlo en el código compilado
ts-node : permite correr archivos typescript de manera directa
typescript : lenguaje de programación fuertemente tipado , basado en JavaScript , sirve para tener un código tipado y permite detectar errores al momento de desarrollo
webpack : permite empaquetar nuestra aplicación y reducir su tamaño , siendo más ligera para su alojamiento
webpack-cli : permite ejecutar comandos de webpack desde la consola
webpack-node-externals : permite excluir módulos de manera sencilla
webpack-shell-plugin : permite ejecutar comandos de consola antes o después de las compilaciones del webpack
serve : sirve contenido estático

#NPM SCRIPTS 
-build : realiza la transformación del código en ts hacía javascript
-start : ejecuta el codigo transformado en js
-dev : permite ejecutar el servidor atendiendo a los cambios que se estén realizando , tiene el uso de la dependencia concurrently , la cual permite en este caso la ejecución de 
tsc watch (observa los cambios) . y nodemonn , que reinicia el servidor ante los mismos.
-test: ejecuta las pruebas señaladas en nuestra carpeta __tests__
-serve : coverage : permite ejecutar el test y a través de npx serve servir el contenido estático ubicado en la carpeta coverage

#ENV VARIABLES
-PORT : indica el puerto en donde correrá tu aplicación
