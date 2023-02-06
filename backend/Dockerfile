# Pull the Node image from Docker Hub
FROM node:16
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

WORKDIR /usr/src/app


# Copying only package.json
COPY package*.json ./
COPY ./yarn.lock ./

# Install Dependencies
RUN yarn install

# RUN npm add nodemon
RUN yarn add dotenv

# Copy rest of the code to container
COPY . .

EXPOSE 4000

# Run the api 
CMD ["node", "server.js"]


