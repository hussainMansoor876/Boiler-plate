const mongoose = require('mongoose');
mongoose.connect('',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        replicaSet: 'atlas-glwhxr-shard-0',
        authSource: 'admin',
        retryWrites: true,
        w: 'majority'
    });

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
module.exports = mongoose