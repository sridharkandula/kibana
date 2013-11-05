/**
 * These is the app's configuration, If you need to configure
 * the default dashboard, please see dashboards/default
 */
define(['settings'],
function (Settings) {
  "use strict";

  return new Settings({

    //Specify all the instances of elasticsearch servers. This will be displayed in dashboard configuration. 
    //Please note that issue of cross domain origin request. To address that you can use apache proxy pass
    //For example, if i want es2 instance i can setup something like this:
    //ProxyPassMatch ^(/es2)(/_aliases|.*/_search|.*/_mapping)$ http://192.168.1.2/$2
    //and in the following config i can add http://mydomain/es2
    elasticsearch_servers: ["https://log.verse.in", "https://log.verse.in/airtel-tanzania", "https://log.verse.in/airtel-ghana", "https://log.verse.in/airtel-gabon"],
    
    /**
     * URL to your elasticsearch server. You almost certainly don't
     * want 'http://localhost:9200' here. Even if Kibana and ES are on
     * the same host
     *
     * By default this will attempt to reach ES at the same host you have
     * elasticsearch installed on. You probably want to set it to the FQDN of your
     * elasticsearch host
     * @type {String}
     */
    elasticsearch:    "https://log.verse.in",

    /**
     * The default ES index to use for storing Kibana specific object
     * such as stored dashboards
     * @type {String}
     */
    kibana_index: "kibana-int",

    /**
     * Panel modules available. Panels will only be loaded when they are defined in the
     * dashboard, but this list is used in the "add panel" interface.
     * @type {Array}
     */
    panel_names: [
      'histogram',
      'map',
      'pie',
      'table',
      'filtering',
      'timepicker',
      'text',
      'fields',
      'hits',
      'dashcontrol',
      'column',
      'derivequeries',
      'trends',
      'bettermap',
      'query',
      'terms',
      'sparklines'
    ],
    timezone_path: "tz",
    //specify what all zone files to load by default eg. ['asia', 'africa']
    default_zone_file: ['asia', 'africa'],
  });
});
