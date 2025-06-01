## Use official Node image
#FROM node:18-alpine
#
## Set working directory
#WORKDIR /app
#
## Copy package files first (for better cache)
#COPY package*.json ./
#
#RUN npm install -g @nestjs/cli
#
## Install dependencies
#RUN npm install --omit=dev
#
## Copy rest of the app
#COPY . .
#
## Build the app
#RUN npm run build
#
## Expose port
#EXPOSE 3000
#
## Start the app
#CMD ["node", "dist/main.js"]


# Use Node official image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Install Nest CLI globally (optional, for running commands)
RUN npm install -g @nestjs/cli

# Expose the port your Nest app runs on (default 3000)
EXPOSE 3000

# Run in development mode with hot reload
CMD ["npm", "run", "start:dev"]


#   docker build -t nestjs-app .

#   docker run -d -p 3000:3000 --name nestjs-container nestjs-app

#   kubectl apply -f deployment.yaml