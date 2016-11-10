
```
docker build -t azat-co/node-test-5 .
docker run -d --name myMongoDB mongo
docker run -d --link=myMongoDB:mongodb -p 3000:3000 azat-co/node-test-5
```

open on <http://localhost:3000/>
