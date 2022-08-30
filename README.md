
# Clima-app

Webapp de clima creada por Mariano Conte en base al challenge de Personal Pay.
La misma al entrar le dice al usuario el clima de localidad desde la que se accede y la de los 5 días siguientes. Al hacer click en los pronósticos de los días siguientes muestra la información más detalladamente.
También se puede ver el clima de otras ciudades como Lima, Brasilia, Montevideo, Santiago de Chile o Bogotá.



## Tech Stack

React, Redux, Redux-saga, TailwindCSS, Axios y Jest



## Environment Variables

Para correr el proyecto primero agregar la api key de https://openweathermap.org/api en un archivo .env en la variable VITE_WEATHER_API_KEY en la carpeta raíz del proyecto

Ejemplo:

`VITE_WEATHER_API_KEY = weatherapikey`


## Local Deployment

Clonar el proyecto

```bash
  git clone https://github.com/MarianoConte/app-clima.git
```

Ir al directorio

```bash
  cd app-clima
```

Instalar dependencias

```bash
  npm install
```

Correr el proyecto

```bash
  npm run start
```


## Running Tests

Para correr los tests. Los mismos se encuentran dentro de la carpeta `__tests__`

```bash
  npm run test
```

Ver coverage report

```bash
  npm run test:coverage
```
## Deployment

Para correr el proyecto:

```bash
  npm run deploy
```

El mismo se encuentra disponible en http://marianoconte.me (Controlar acceder por http y no por https ya que sino la api para obtener la localización por ip no funciona)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mariano-conte/)
