#se the latest LTS version 16 for node as the base image 
#to build the container from.
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# ignores those local files and folder and won't copy them into your Docker image 
# to prevent overwriting your installed modules in your image.
COPY . .

# To build your Nest application copy all of your source files (exceptions in .dockerignore) 
# into the Docker image.
RUN npm run build

# The second stage in the multi-stage build and is used to run your application.
FROM node:18

# Copy from your builder image only files and folders required to run the Nest app.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3030
CMD [ "npm", "run", "start:prod" ]


