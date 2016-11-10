```
docker build -t azat-co/node-test-5 .
docker run -d --name myMongoDB mongo
docker run -d --link=myMongoDB:mongodb -p 3000:3000 -v $(pwd):/usr/src/app azat-co/node-test-5
```

open on <http://localhost:3000/>


Useful commands:

```
docker ps
docker ps -a
docker stop {ID}
docker images
docker rmi {ID}
docker rm {ID}
```
