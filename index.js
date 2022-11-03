import express from "express";
import { ApolloServer } from "apollo-server-express";
import { bodyParserGraphQL } from "body-parser-graphql";
import compression from "compression";
import resolvers from "./src/graphQL/resolver.js";
import fs from "fs";

// Node file system을 사용하여 gql schema 가져옴
const typeDefs = fs.readFileSync("src/graphQL/schema.graphql", {
  encoding: "utf-8",
});

const port = 8000;
const app = express();

app.use(bodyParserGraphQL());
app.use(compression());

// ApolloServer 생성
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // 스키마 검사 활성화 default: true
  playground: true, // playgorund 활성화 default: true
});

server.start().then(res => {
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.listen({ port }, () => 
    console.log(`🎸  Server ready at: http://localhost:${port}`)
  );  
});
