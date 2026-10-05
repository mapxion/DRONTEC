# Drontec en EasyPanel

Este ZIP incluye el Dockerfile en la raíz y los archivos de la web en web/.

1. Crea un proyecto nuevo llamado drontec.
2. Dentro del proyecto, crea un servicio de tipo App llamado web.
3. En Fuente, selecciona Subir/Upload y sube Drontec_EasyPanel.zip.
4. Como método de construcción selecciona Dockerfile; su ruta es Dockerfile y el contexto es la raíz del proyecto.
5. Implementa la aplicación.
6. En Dominios, configura el dominio de prueba generado por EasyPanel con destino al puerto HTTP 80 del servicio.
7. Comprueba la web en el dominio de prueba antes de cambiar drontec.es.

La aplicación escucha en el puerto interno 80. No necesita publicar ese puerto directamente en el VPS ni instalar otro Nginx en el servidor: EasyPanel enruta el tráfico a la aplicación. EasyPanel gestiona el HTTPS a través de su proxy.

No necesita variables de entorno, volúmenes ni una base de datos. Los cambios de contenido se aplican subiendo un paquete actualizado y volviendo a implementar. Si prefieres GitHub, sube estos mismos archivos a la raíz del repositorio DRONTEC y configura ese repositorio como fuente, manteniendo Dockerfile como método de construcción.

No se ha accedido al panel ni modificado el VPS. La configuración de drontec.es y www.drontec.es y el cambio de DNS se harán después de comprobar el dominio de prueba. La IP y los registros de correo deben revisarse en ese paso.
