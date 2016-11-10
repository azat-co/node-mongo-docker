FROM node:argon


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# For production image uncomment copy and don't use volume
#COPY . /usr/src/app


EXPOSE 3000

CMD [ "npm", "start" ]
