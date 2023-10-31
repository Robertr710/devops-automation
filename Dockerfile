# Stage 1: Build the application
FROM node:latest as builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a lightweight image with serve
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install serve globally
RUN npm install -g serve

# Copy the build artifacts from the builder stage to this stage
COPY --from=builder /usr/src/app/build ./build

# Expose the port for serving the application (typically port 80 for HTTP)
EXPOSE 80

# Command to serve the build folder using serve
CMD ["serve", "-s", "build", "-l", "80"]
