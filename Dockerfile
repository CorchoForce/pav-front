FROM node:16.1.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL=http://localhost:8080

COPY package.json ./
RUN npm i

COPY . ./

CMD ["npm", "start"]
