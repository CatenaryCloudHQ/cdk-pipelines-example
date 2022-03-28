import { App } from 'aws-cdk-lib';
import { MyPipelineStack } from './lib/pipeline-stack';

const app = new App();

new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    region: 'us-east-1',
  },
});

app.synth();
