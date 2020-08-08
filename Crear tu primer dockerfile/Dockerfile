FROM node:14.5.0-alpine3.12
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY app/ ./
USER node
RUN npm install
EXPOSE 8080
CMD ["node", "app"]
