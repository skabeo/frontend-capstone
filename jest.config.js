module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Use Babel for transforming JSX/JS files
      },
      testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^axios$': require.resolve('axios'),
    },
  };
  