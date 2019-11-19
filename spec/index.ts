import ResponseTypes from './responses';
import ValidatorTypes from './validators';
import EventTypes from './events';
import ChainTypes from './chains';

export import Response = ResponseTypes;
export import Validate = ValidatorTypes;
export import Event = EventTypes;
export import Chain = ChainTypes;

export namespace ApiTypes {
  export import Response = ResponseTypes;
  export import Validate = ValidatorTypes;
  export import Event = EventTypes;
  export import Chain = ChainTypes;
}

export default ApiTypes;