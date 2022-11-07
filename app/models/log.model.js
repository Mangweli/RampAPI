'use strict'

import  mongoose, { Schema } from 'mongoose';

const RampLogSchema = new Schema( {
    time: Date,
    file: String,
    info: {
        type: Schema.Types.Mixed
    },
    type: String
}, {collection: 'logs'});

export default mongoose.model("RampLogs", RampLogSchema);

