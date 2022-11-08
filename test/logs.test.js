import mongoose from 'mongoose';
import logModel from '../app/models/log.model';

const errorLogs = {
    time: new Date('2022-11-08'),
    file: 'file',
    info: 'info',
    type: 'type',
}

describe('Add Error logs record', () => {

    // Connect to the MongoDB Memory Server
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save fulfil order successfully', async () => {
        const logs = new logModel(errorLogs);
        const savedlogs = await logs.save();

        expect(savedlogs._id).toBeDefined();
        expect(savedlogs.time).toBe(errorLogs.time);
        expect(savedlogs.file).toBe(errorLogs.file);
        expect(savedlogs.info).toBe(errorLogs.info);
        expect(savedlogs.type).toBe(errorLogs.type);
    });

    // Testing Schema
    it('Logs added successfully with undefined schema fields as undefined', async () => {
        const logsWithUndefinedField = new logModel({ ...errorLogs, filenumber: 'filenumber' });
        const savedLogsWithUndefinedField = await logsWithUndefinedField.save();
        expect(savedLogsWithUndefinedField._id).toBeDefined();
        expect(savedLogsWithUndefinedField.filenumber).toBeUndefined();
    });

})