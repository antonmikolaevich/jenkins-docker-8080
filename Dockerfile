FROM node
WORKDIR /api-project
COPY package.json ./
RUN npm set-script prepare '' && npm install && npm install -g mocha
COPY . .
EXPOSE 8080
VOLUME /reports
CMD npm run test