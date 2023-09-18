import path from "path";
import { Server, ServerCredentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import { RandomHandlers } from "./proto/randomPackage/Random";

interface MainFunction {
  (): void;
}

const main: MainFunction = () => {
  const server: Server = getServer();
  server.bindAsync(
    "0.0.0.0:9000",
    ServerCredentials.createInsecure(),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Your server started on port 9000");
      server.start();
    }
  );
};

interface GetServerFunction {
  (): Server;
}

const getServer: GetServerFunction = () => {
  const server: Server = new Server();
  const packageDef: any = loadSync(
    path.resolve(__dirname, "./proto/random.proto")
  );
  const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
  const randomPackage = grpcObj.randomPackage;

  server.addService(randomPackage.Random.service, {
    PingPong: (call, callback) => {
      console.log(call.request);
      callback(null, { message: "Pong" });
    },
  } as RandomHandlers);

  return server;
};

main();
