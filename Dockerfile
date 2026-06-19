
# # FROM node:20-alpine AS builder
# # WORKDIR /app
# # COPY package*.json ./
# # RUN npm ci
# # COPY . .
# # RUN npm run build

# # # === STAGE 2: Serve the app with Nginx ===
# # FROM nginx:1.27-alpine
# # COPY --from=builder /app/dist /usr/share/nginx/html
# # EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]

# # === STAGE 1: Compile the React Vite Application ===
# FROM node:20-alpine AS builder
# WORKDIR /app

# # Copy dependency configs first to leverage Docker layer caching
# COPY package*.json ./
# RUN npm ci

# # Copy the rest of your React code and compile it
# COPY . .
# RUN npm run build

# # === STAGE 2: Serve the Static Assets via Nginx ===
# FROM nginx:1.27-alpine

# # Copy our custom Nginx config rule over the default one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy the compiled static folder from the builder stage into Nginx
# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# === STAGE 1: Compile the React Vite Application ===
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# === STAGE 2: Serve the Static Assets via Nginx ===
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]