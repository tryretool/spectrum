FROM node:10.13

WORKDIR /spectrum

COPY . /spectrum

RUN node shared/install-dependencies.js

ENV NODE_ENV production

RUN npm run build:api
RUN npm run build:athena
RUN npm run build:hyperion
RUN npm run build:hermes
RUN npm run build:mercury
RUN npm run build:vulcan