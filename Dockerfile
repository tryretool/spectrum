FROM node:10.13

RUN apt-get update && apt-get install -y curl vim

WORKDIR /spectrum

# first copy only the files necessary to install deps, so docker can cache it
RUN mkdir api athena hyperion hermes mercury vulcan shared
COPY ./package.json /spectrum
COPY ./yarn.lock /spectrum
COPY ./api/package.json /spectrum/api
COPY ./api/yarn.lock /spectrum/api
COPY ./athena/package.json /spectrum/athena
COPY ./athena/yarn.lock /spectrum/athena
COPY ./hermes/package.json /spectrum/hermes
COPY ./hermes/yarn.lock /spectrum/hermes
COPY ./mercury/package.json /spectrum/mercury
COPY ./mercury/yarn.lock /spectrum/mercury
COPY ./vulcan/package.json /spectrum/vulcan
COPY ./vulcan/yarn.lock /spectrum/vulcan
COPY ./shared/install-dependencies.js /spectrum/shared/install-dependencies.js

# install dependencies
RUN node shared/install-dependencies.js

# copy the rest of the source code
COPY . /spectrum

ENV NODE_ENV production
# TODO: hmm should unhardcode this
ENV RELATIVE_ROOT /community
ENV PUBLIC_URL /community

RUN npm run build:api
RUN npm run build:athena
RUN npm run build:hyperion
RUN npm run build:hermes
RUN npm run build:mercury
RUN npm run build:vulcan