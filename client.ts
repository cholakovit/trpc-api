import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, "./proto/random.proto"));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const client = new grpcObj.randomPackage.Random(
  `0.0.0.0:9000`,
  grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});
function onClientReady() {
  client.PingPong({ message: "Ping" }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  });
}
