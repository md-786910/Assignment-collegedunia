FROM node:alpine3.19
WORKDIR /usr
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
