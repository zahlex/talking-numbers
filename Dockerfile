# syntax=docker/dockerfile:1

# Build Backend
FROM golang:latest AS backend-builder
WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./
COPY api ./api

RUN go build -ldflags "-linkmode external -extldflags -static" -a -o ./talking-numbers

# Build Frontend
FROM node:latest AS frontend-builder
WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
RUN npm install

COPY src ./src

RUN npm run build

# Build Image
FROM alpine:latest
WORKDIR /app

ENV GOOGLE_APPLICATION_CREDENTIALS=/app/credentials.json

EXPOSE 8080

COPY --from=backend-builder /app/talking-numbers ./talking-numbers
COPY --from=frontend-builder /app/dist ./dist

ENTRYPOINT ["./talking-numbers"]