const PullRequest = require('../models/PullRequest');

const getAllPullRequests = async (req, res) => {
  try {
    const pullRequests = await PullRequest.find().sort({ created_at: -1 });
    res.status(200).json(pullRequests);
  } catch (error) {
    console.error('Error fetching pull requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllPullRequests,
};
