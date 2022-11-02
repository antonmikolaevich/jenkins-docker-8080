FROM node
WORKDIR /api-project
COPY package.json ./
RUN npm set-script prepare '' && npm install && npm install -g mocha
COPY . .
EXPOSE 8080
CMD npm run test --reporter mocha-junit-reporter --reporter-options mochaFile=./reports/report.xml