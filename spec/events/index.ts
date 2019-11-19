// This line takes all of the exports from that
// file and wraps them into a single namespace.
// If we didn't do this namespace here,
// then a consumer would have to do it in order
// to get a convenient namespace.
import * as APIGatewayTypes from './api-gateway-event-type';
import * as CodePipelineTypes from './codepipeline-event-type';
import * as SQSTypes from './sqs-event-type';
export namespace Events {
    export import APIGateway = APIGatewayTypes;
    export import CodePipeline = CodePipelineTypes;
    export import SQS = SQSTypes;
}

// These lines directly surface all of its non-default
// exports from right here, so that users can just
// grab one item from there, e.g.:
//
// import { APIGatewayEvent } from 'api-types/spec/events'
//
export * from './api-gateway-event-type';
export * from './codepipeline-event-type';
export * from './sqs-event-type';

// This line exports the other file's namespace by default,
// so that consumers can grab all of its exports under one
// convenient name.
//
// import User from 'dappbot-types/spec/responses';
export default Events;