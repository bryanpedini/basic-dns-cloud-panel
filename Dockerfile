FROM nginx:1.18.0-alpine

COPY app /app

RUN sed -i 's/root.*/root \/app;/' /etc/nginx/conf.d/default.conf
