exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.poferries.com/en/portal',
      browser: 'chrome',
      restart: false,
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    stepByStepReport: {
      enabled: true
    }
    /*
    tryTo: {
      enabled: true
    }
    */
  },
  tests: './*.js',
  name: 'POTest'
}