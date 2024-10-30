const mongoose = require('mongoose');

const pullRequestSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    author: String,
    status: String,
    url: String,
    created_at: Date,
    updated_at: Date,
    repository: String,
    branch: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('PullRequest', pullRequestSchema);
