FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package*.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Start Node server
CMD [ "npm", "start" ]