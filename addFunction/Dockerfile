# Use the official Node.js 14 image as a parent image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the content of the /add directory into the /app directory in the container
COPY . /app

# Make port 8080 available outside this container


# Run the web service on container startup.
CMD [ "node", "index.js" ]
