FROM node:18.12-alpine
RUN /bin/sh -c "npm create -y vite@4.0.0 app -- --template vue"
RUN /bin/sh -c "cd /app  &&\
                npm install -D tailwindcss postcss autoprefixer &&\
                npm install vue-router@4.1.6 &&\
                npm install vuex@4.1.0 &&\
                npm install @formkit/auto-animate@1.0.0-beta.5 &&\
                npm install -D vuelidate@0.7.7 &&\
                npm install &&\
                npx tailwindcss init"