FROM node:10

COPY . /home/node/app/

WORKDIR /home/node/app/

RUN npm i
RUN npm run build

CMD [ "node", "." ]
