// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequet as _randomPackage_PingRequet, PingRequet__Output as _randomPackage_PingRequet__Output } from '../randomPackage/PingRequet';
import type { PongResponse as _randomPackage_PongResponse, PongResponse__Output as _randomPackage_PongResponse__Output } from '../randomPackage/PongResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_PingRequet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequet, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequet, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequet, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequet, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequet, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequet, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequet__Output, _randomPackage_PongResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequet, _randomPackage_PongResponse, _randomPackage_PingRequet__Output, _randomPackage_PongResponse__Output>
}
