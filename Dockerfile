# Use the latest node version
FROM node:latest

# Create the relevant directories
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy files and install packagaes
COPY package.json /usr/src/bot
RUN npm install

# Copy the bot files to working directory
COPY . /usr/src/bot

# Start the bot
CMD ["node", "index.js"]