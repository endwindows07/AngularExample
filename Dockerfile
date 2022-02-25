# FROM node:14-alpine
# WORKDIR /usr/src/app
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn install
# COPY . .
# RUN npm install -g @angular/cli
# RUN ng build
# RUN npm i -g serve
# EXPOSE 5000
# CMD [ "serve", "-S" , "dist/my-app-angular"]


# FROM docker/whalesay:latest
# LABEL Name=work Version=0.0.0
# RUN apt-get -y update && apt-get install -y fortunes
# CMD /usr/games/fortune -a | cowsay


#stage build
FROM xiarugu/angular-cli:12 as Learn-Build
WORKDIR /app
COPY . ./
RUN npm install --no-audit --silent
RUN ng build --prod  --output-path out

FROM nginx:stable-alpine
WORKDIR /var/www

COPY --from=Learn-Build /app/out .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


# #stage build
# FROM teracy/angular-cli:8.3 as Learn-Build
# WORKDIR /app
# COPY . ./
# RUN ng build --prod  --output-path out


# FROM nginx:stable-alpine
# WORKDIR /var/www

# COPY out .
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

