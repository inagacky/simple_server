FROM node:13.1.0-alpine

ARG WORKSPACE=/app

COPY app $WORKSPACE

WORKDIR $WORKSPACE
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
