FROM node:18.12-alpine
RUN /bin/sh -c "npm create -y vite@4.0.0 app -- --template vue"
WORKDIR /app
RUN /bin/sh -c "npm install &&\
                npm install -D tailwindcss postcss autoprefixer &&\
                npx tailwindcss init"