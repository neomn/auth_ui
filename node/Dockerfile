FROM node:18.12-alpine
WORKDIR /app
RUN /bin/sh -c "npm i vite@4.0.0 &&\
                  npm create vite@4.0.0 app -- --template vue &&\
                  npm install"