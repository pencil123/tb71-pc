FROM nginx:1.15.8
COPY build /usr/share/nginx/html/tb
COPY pc-react.conf /etc/nginx/conf.d