const express = require('express');
const router = express.Router();
const { getAllPullRequests } = require('../controllers/pullRequestController');

router.get('/pull-requests', getAllPullRequests);

module.exports = router;
