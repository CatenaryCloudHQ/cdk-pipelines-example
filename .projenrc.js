const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({

  author: 'Catenary.Cloud',
  authorAddress: 'hi@catenary.cloud',
  defaultReleaseBranch: 'main',
  description: 'CDK pipeline with cicd, dev and prod accounts bootstrap',
  cdkVersion: '2.20.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-piepinees-example',
  buildWorkflow: false,
  rebuildBot: false,
  releaseWorkflow: false,
  mergify: false,
  pullRequestTemplate: false,
  projenUpgrade: false,
  workflows: false,
  github: false,
  license: false,
  staleBranches: false,
});

project.synth();


