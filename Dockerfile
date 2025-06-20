# Universal Dockerfile for both development and production
FROM node:18-alpine as base

# Set working directory
WORKDIR /app

# Install dependencies for better file watching (dev only)
RUN apk add --no-cache inotify-tools

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Development stage
FROM base as development
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
ENV WDS_SOCKET_HOST=localhost
ENV WDS_SOCKET_PORT=3000
ENV FAST_REFRESH=true
EXPOSE 3000
CMD ["npm", "start"]

# Build stage for production
FROM base as build
ENV NODE_ENV=production
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine as production
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo '<!DOCTYPE html><html><body>OK</body></html>' > /usr/share/nginx/html/health
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Default to development
FROM development as default 