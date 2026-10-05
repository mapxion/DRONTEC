# Drontec — primera versión para VPS

Web estática en castellano, sin WordPress, PHP, bases de datos ni dependencias externas. HTML, CSS y JavaScript editables. Diseño claro, seis servicios, fichas de detalle, preguntas frecuentes y contacto por correo y teléfono.

## Revisar la web

Abre `web/index.html` en un navegador. Los botones de contacto abren el programa de correo; no existe un formulario que envíe mensajes desde el servidor. Todo el contenido, las imágenes y los estilos funcionan sin conexión. Solo los enlaces a otras webs y las acciones de contacto requieren las aplicaciones correspondientes.

## Subir al VPS

Publica únicamente el contenido de `web/` dentro de la carpeta pública del dominio. `servidor/` contiene una configuración HTTP de ejemplo para Nginx. No la apliques sin revisar la configuración existente: se debe integrar con el servidor del VPS, mantener los otros dominios y completar HTTPS.

El dominio sigue en su hosting actual. No se ha accedido al VPS ni se han cambiado DNS. El siguiente paso necesita conocer el sistema operativo y el panel del VPS, si tiene uno. Antes del cambio de DNS, revisaremos la web en el servidor y configuraremos HTTPS para drontec.es y www.drontec.es. Los registros de correo deben conservarse.

## Editar

- `web/index.html`: textos de portada, secciones y contacto.
- `web/styles.css`: aspecto visual y adaptación a móviles.
- `web/app.js`: textos de las fichas y comportamiento del menú.
- `web/assets/portada.jpg`: fotografía de portada. Sustituir por una fotografía propia si se desea; actualizar el crédito y `LICENSE-IMAGEN.txt` al hacerlo.
- `web/robots.txt` y `web/sitemap.xml`: rastreo del dominio.

## Datos de esta propuesta

Se presenta Drontec como división de Intelsi según la elección del usuario. Correo, teléfono y ubicación proceden de la web pública indexada: info@drontec.es, +34 634 117 649, Rellinars (Barcelona). Se usa una marca tipográfica provisional, no el logo original. No se han añadido testimonios, cifras de clientes ni certificaciones no comprobadas.

La fotografía es de Tim Hoggarth, con licencia CC BY-SA 2.0; sus créditos y condiciones se incluyen en la web y en `LICENSE-IMAGEN.txt`. La propuesta necesita completar los textos legales con los datos corporativos definitivos antes de su publicación. No incluye analítica, cookies propias ni almacenamiento local.

El SEO inicial incluye título, descripción, idioma, enlace canónico, robots y sitemap. No garantiza posicionamiento ni reproduce las URLs de la web anterior: al preparar el cambio de servidor habrá que revisar sus rutas y redirecciones.
