const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://erinpeifer:Hoverv!sits0ur@cluster0.2fdaloq.mongodb.net/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
