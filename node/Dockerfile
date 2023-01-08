FROM node:18.12.1
RUN /bin/sh -c "npm create -y vite@4.0.0 app -- --template vue"
RUN /bin/sh -c "cd /app  &&\
                npm install &&\
                npm install -D tailwindcss postcss autoprefixer &&\
                npx tailwindcss init"