FROM nginx:stable-alpine
COPY web/ /usr/share/nginx/html/
COPY easypanel/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
