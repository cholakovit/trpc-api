import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random"; // Adjust the import path
import { PingRequet } from './proto/randomPackage/PingRequet'
import { PongResponse } from './proto/randomPackage/PongResponse'


const packageDef = protoLoader.loadSync(path.resolve(__dirname, "./proto/random.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const client = new grpcObj.randomPackage.Random(
  "0.0.0.0:9000",
  grpc.credentials.createInsecure()
);

const deadline: Date = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

client.waitForReady(deadline, (err: Error | undefined) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  const request: PingRequet = { message: "Ping" }; // Use the generated request type
  client.PingPong(request, (err: grpc.ServerErrorResponse | null, response: PongResponse | undefined) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(response);
  });
}
