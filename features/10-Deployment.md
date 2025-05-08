Folder Structure Before Dockerization
```
my-vite-app/
│── src/          # Your Vite app source code
│── public/       # Static assets (favicons, images, etc.)
│── package.json  # Dependencies & scripts
│── vite.config.js # Vite configuration
│── nginx.conf    # Nginx configuration file (created earlier)
│── Dockerfile    # The Dockerfile for containerization
│── dist/         # Gets created after running `npm run build`
```

Docker file
```
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
```
create an nginx.conf file that will over write the nginx in ur container
```
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri /index.html =404;
    }
}
```
this try_files $uri , means for url ( here / ) check in /usr/share/nginx/html/ itself ; if it was /about  try_files $uri  will check in /usr/share/nginx/html/about

[⬅ Previous: routing ](./09-routing.md) | [Next:  xoxo ➡]()