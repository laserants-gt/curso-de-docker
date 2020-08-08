FROM node:14.5.0-alpine3.12 as build
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY app/ ./
USER node
RUN npm install
RUN npm test


FROM node:14.5.0-alpine3.12 as runtime
WORKDIR /home/node/app
COPY --from=build  /home/node/app ./
EXPOSE 8080
CMD ["node", "app"]
