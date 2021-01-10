# Stage 1 build dist files.
FROM node:10.23.1-alpine3.11 as build

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add git

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build



FROM nginx:1.18.0-alpine
USER root

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/. .

# CMD [ "/bin/ash" ]

