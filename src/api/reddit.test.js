// src/api/reddit.test.js
const axios = require('axios/dist/node/axios.cjs');
const { fetchSubredditPosts } = require('./reddit');

// Mock axios
jest.mock('axios/dist/node/axios.cjs', () => ({
  get: jest.fn(), // 👈 explicitly mock .get
}));


describe('fetchSubredditPosts', () => {
  it('fetches and transforms subreddit posts', async () => {
    axios.get.mockResolvedValue({
      data: {
        data: {
          children: [
            {
              data: {
                id: 'abc123',
                title: 'Test Post',
                author: 'testuser',
                subreddit: 'reactjs',
                ups: 42,
                num_comments: 7,
              },
            },
          ],
        },
      },
    });

    const posts = await fetchSubredditPosts('reactjs');

    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      id: 'abc123',
      title: 'Test Post',
      author: 'testuser',
      subreddit: 'reactjs',
      ups: 42,
      comments: 7,
    });
  });
});
