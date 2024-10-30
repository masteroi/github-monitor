const express = require('express');
const router = express.Router();
const { verifyGithubWebhook } = require('../controllers/webhookController');
const PullRequest = require('../models/PullRequest');

router.post('/webhook', verifyGithubWebhook, async (req, res) => {
  try {
    const event = req.headers['x-github-event'];

    if (event === 'pull_request') {
      const { action, pull_request, repository } = req.body;

      const pullRequestData = {
        id: pull_request.id,
        title: pull_request.title,
        description: pull_request.body,
        author: pull_request.user.login,
        status: pull_request.state,
        url: pull_request.html_url,
        created_at: pull_request.created_at,
        updated_at: pull_request.updated_at,
        repository: repository.full_name,
        branch: pull_request.head.ref,
      };

      await PullRequest.findOneAndUpdate(
        { id: pullRequestData.id },
        pullRequestData,
        { upsert: true, new: true }
      );

      console.log(`Processed ${action} event for PR #${pull_request.number}`);
    }

    res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
