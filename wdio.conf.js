exports.config = {
    framework: 'cucumber', 
    cucumberOpts: {
        require: ['./test/features/step-definitions/**/*.js'],
      backtrace: false,
      requireModule: [],
      dryRun: false,
      failFast: false,
      snippets: true,
      source: true,
      profile: [],
      strict: true,
      tagExpression: '', // можеш додавати теги для запуску певних тестів
      timeout: 60000,
      ignoreUndefinedDefinitions: false
    },
    specs: ['./test/features/**/*.feature'],
    capabilities: [{
        browserName: 'chrome',
    }],
  };