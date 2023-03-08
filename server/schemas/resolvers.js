const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      // Populate the name when querying for techs
      return await Tech.find({});
    },
    matchups: async (parent, args) => {
      // Populate the tech subdocument when querying for matchups
      return await Matchup.find(args.id);
    }
  },

  Mutation: {
    async createMatchup({ body }, res) {
      const matchup = await Matchup.create(body);
  
      if (!matchup) {
        return res.status(400).json({ message: 'Unable to create matchup' });
      }
  
      res.status(200).json(matchup);
    },
    async createVote(req, res) {
      const vote = await Matchup.findOneAndUpdate(
        { _id: req.body.id },
        { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
        { new: true }
      );
  
      if (!vote) {
        return res.status(400).json({ message: 'Unable to vote on matchup' });
      }
  
      res.status(200).json(vote);
    },
  }
};

module.exports = resolvers;