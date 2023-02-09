# react docker file for mac

FROM node:18.3.0

RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build


EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]

