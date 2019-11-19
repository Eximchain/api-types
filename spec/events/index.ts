// This line takes all of the exports from that
// file and wraps them into a single namespace.
// If we didn't do this namespace here,
// then a consumer would have to do it in order
// to get a convenient namespace.
import * as Events from './event-types';

// These lines directly surface all of its non-default
// exports from right here, so that users can just
// grab one item from there, e.g.:
//
// import { APIGatewayEvent } from 'api-types/spec/events'
//
export * from './event-types';

// This line exports the other file's namespace by default,
// so that consumers can grab all of its exports under one
// convenient name.
//
// import User from 'dappbot-types/spec/responses';
export default Events;