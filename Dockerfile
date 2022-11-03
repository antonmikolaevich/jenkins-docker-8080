FROM node
RUN mkdir -p /api-project
WORKDIR /api-project
COPY package.json /api-project/
COPY package-lock.json /api-project/
RUN npm set-script prepare '' && npm install && npm install -g mocha
COPY . /api-project/
EXPOSE 8080
CMD npm run test
VOLUME [ "/data" ]