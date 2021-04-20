FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm i

COPY . ./

CMD ["npm", "start"]