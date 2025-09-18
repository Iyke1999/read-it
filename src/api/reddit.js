// src/api/reddit.js
const axios = require('axios/dist/node/axios.cjs');

async function fetchSubredditPosts(subreddit) {
  const url = `https://www.reddit.com/r/${subreddit}.json?limit=20`;
  const { data } = await axios.get(url);

  return data.data.children.map((child) => ({
    id: child.data.id,
    title: child.data.title,
    author: child.data.author,
    subreddit: child.data.subreddit,
    ups: child.data.ups,
    comments: child.data.num_comments,
  }));
}

module.exports = { fetchSubredditPosts };
