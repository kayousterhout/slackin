const { createDeployment, Machine } = require('@quilt/quilt');
const slackin = require('./slackin');

// From the domain of your login page (i.e. https://YOUR_SLACK_TEAM.slack.com).
const slackTeam = 'YOUR_SLACK_TEAM';

// Can be generated by admins at https://api.slack.com/web. See more details at
// https://github.com/rauchg/slackin.
const slackToken = 'YOUR_SLACK_TOKEN';

const slackinService = slackin.New(slackTeam, slackToken);

const deployment = createDeployment();
const machine = new Machine({ provider: 'Amazon', size: 't2.micro' });

deployment.deploy(machine.asMaster());
deployment.deploy(machine.asWorker());
deployment.deploy(slackinService);
