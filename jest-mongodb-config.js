export default {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: 'jest'
      },
      binary: {
        version: '8.9.5', // Version of MongoDB
        skipMD5: true
      },
      autoStart: false
    }
  };