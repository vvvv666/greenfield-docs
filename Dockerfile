FROM nginx:latest

COPY ./src/.vuepress/dist /usr/share/nginx/html