FROM nginx:1.19.5

COPY app /app

RUN sed -i 's/root.*/root \/app;/' /etc/nginx/conf.d/default.conf
