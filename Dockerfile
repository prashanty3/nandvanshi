# Use an official Nginx image
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy website files to Nginx public folder
COPY . /usr/share/nginx/html

# Expose default Nginx port
EXPOSE 80
