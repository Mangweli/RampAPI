'use strict'

export const setLogs = (data, logs) => {
    return new logs( {
        time: new Date(),
        file: data.file,
        info: data.info,
        type: data.type
    }).save();
};