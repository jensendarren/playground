# Use the nodejs v14x image as a base
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Install knex for running database migrations
RUN npm install --global --unsafe-perm knex

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]