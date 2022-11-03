FROM node
WORKDIR /api-project
COPY package.json ./
RUN npm set-script prepare '' && npm install && npm install -g mocha
VOLUME /reports
COPY . .
EXPOSE 8080
CMD npm run test