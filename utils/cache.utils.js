'use strict'

import NodeCache from "node-cache";

//Set cache expiry time and eport module
export default new NodeCache({ stdTTL: 21600 });