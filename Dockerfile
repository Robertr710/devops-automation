# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
