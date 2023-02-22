FROM node:18.12-alpine
RUN /bin/sh -c "npm create -y vite@4.0.0 app -- --template vue"
#RUN /bin/sh -c "cd /app  &&\
#                npm install -D tailwindcss postcss autoprefixer &&\
#                npm install vue-router@4.1.6 &&\
#                npm install vuex@4.1.0 &&\
#                npm install @formkit/auto-animate@1.0.0-beta.5 &&\
#                npm install @vuelidate/core@2.0.0  \
#                npm install @vuelidate/validators@2.0.0 &&\
#                npm install -D jest@29.4.1 &&\
#                npm install &&\
#                npx tailwindcss init"
RUN /bin/sh -c "cd /app && npm install -D tailwindcss postcss autoprefixer"
RUN /bin/sh -c "cd /app && npm install vue-router@4.1.6"
RUN /bin/sh -c "cd /app && npm install vuex@4.1.0"
RUN /bin/sh -c "cd /app && npm install @formkit/auto-animate@1.0.0-beta.5"
RUN /bin/sh -c "cd /app && npm install @vuelidate/core@2.0.0"
RUN /bin/sh -c "cd /app && npm install @vuelidate/validators@2.0.0"
RUN /bin/sh -c "cd /app && npm install -D jest@29.4.1"
RUN /bin/sh -c "cd /app && npm install"
RUN /bin/sh -c "cd /app && npx tailwindcss init"