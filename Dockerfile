FROM node:20-slim AS dev

RUN apt update && apt install -y openssl procps

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]