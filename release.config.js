module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:StewardBot/application-handler.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
