FROM node
WORKDIR /api-project
COPY package.json ./
RUN npm set-script prepare '' && npm install && npm install -g mocha
RUN mkdir /reports
COPY . .
EXPOSE 8080
CMD npm run test
VOLUME /reports/report.xml