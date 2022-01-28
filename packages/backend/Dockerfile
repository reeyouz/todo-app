FROM node:14

WORKDIR /todo-app/backend

COPY package.json .

RUN npm install -g yarn

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]