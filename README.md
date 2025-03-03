# Proyecto desarrollado como desafío técnico

El siguiente proyecto simula solo una parte de un E-commerce, al ingresar a la primer pantalla, se mostrará algunos productos con información necesaria para incentivar al usuario a ver el detalle de los productos ofrecidos. En esta misma pantalla se podrá buscar mediante un campo de filtro por el nombre o el SKU del producto. A su vez podrá scrollear hacia abajo, teniendo la posiblidad de obtener más productos, mediante un scroll infinito el cual irá mostrando de a 10 productos a la vez, por cada página que se vaya cargando. Luego, desde el botón "Ver detalles" se mostrará una nueva pantalla donde se mostrarán más detalles del producto que desea ver.

La finalidad de este proyecto es la de demostrar mis conocimientos.

## Deploy

El proyecto está deployado en Vercel, en la siguiente url

[Vercel]()

## Proceso de instalación

Clonamos el repositorio

```bash
git clone https://github.com/GastonCarg/technical-challenge.git
```

Nos desplazamos a la carpeta del proyecto

```bash
cd technical-challenge
```

Instalamos las librerías necesarias para levantar el proyecto

```bash
npm install
```

Iniciamos el proyecto

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) con un navegador web y podrá ver el resultado.

## Librerías y/o herramientas utilizadas

1. Next.js v15.2.0
2. Tanstack/react-query v5.66.11
3. React-infinite-scroll-component v6.1.0
4. Tailwindcss v4
5. Eslint v9,
6. Eslint/eslintrc v3
7. Typescript v5
8. Prettier 3.5.2
9. Eslint-config-prettier v10.0.2
10. Eslint-config-next v15.2.0

## Herramientas y/o librerías que hubiese utilizado

Además de las librerías y/o herramientas que utilicé, hubiese utilizado estas herramientas

1. Jest - Lo hubiese utilizado para probar la SPA de la forma en la que puede interactuar un usuario, obteniendo los resultados esperados
2. i18n - Lo hubiese utilizado para manejar el idioma de los textos, dependiendo de dónde sea el usuario.
