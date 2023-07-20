FROM node:18-alpine as build

RUN apk add python3 make g++
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG nodeEnv=production
ENV NODE_ENV $nodeEnv
RUN npm run build


FROM node:18-alpine
ENV NODE_ENV production
RUN adduser app -h /app -D
USER app
WORKDIR /app
COPY --from=build --chown=app /app /app
CMD ["node", "./dist/server.js"]
