export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_KEY,
  
    specs: [
      '../test/specs/*.js'
    ],
  
  capabilities: [
    {
      'bstack:options': {
        deviceName: 'iPhone 15',
        platformVersion: '17',
        platformName: 'ios',
      }
    },
    {
      'bstack:options': {
        deviceName: 'iPhone 16 Pro',
        platformVersion: '18',
        platformName: 'ios',
      }
    }
  ],
  
    services: [
      ['browserstack', {
        app: 'bs://10eafdffa7e40cd680f459aae54381f0394f8669',
        browserstackLocal: true,
        automationName: 'XCUITest',
      }]
    ],
  
    hostname: 'hub.browserstack.com',
    path: '/wd/hub'
  };
  