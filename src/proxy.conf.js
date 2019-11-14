const PROXY_CONFIG = [
  {
      context: [
          '/storageUsage',
          '/auth',
          '/runs',
          '/analysisFiles',
          '/searchSamples',
      ],

      target:"https://rnd.accutest.kr:10443",
      secure: false
  }
];

module.exports = PROXY_CONFIG;