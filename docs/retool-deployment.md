# Retool production deploy

## Install Docker & Docker Compose

there are nice helper scripts in https://github.com/tryretool/retool-onpremise

## Deploy

1. create a dummy cacert file: `touch cacert`
2. create docker.env from template: `cp docker.env.template docker.env`
3. build a production docker image: `docker build -t retool-spectrum ./`
4. run all the containers: `docker-compose up -d`
5. run migrations if necessary. `docker exec -it <the-api-container> bash`, and run `npm run db:migrate`

if everything worked, `curl localhost` should return something reasonable
