# Build step
# - copy package.json --> npm install
# - copy all files from current dir to /app on container
# - run npm build --> build is available in dist folder 
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# Serve with Nginx
# -copy build to ngnix folder where it serve from
# - over write ngnix conf file with custom 
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]