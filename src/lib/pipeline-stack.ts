import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('CatenaryCloudHQ/cdk-pipelines-example', 'main', {
          authentication: cdk.SecretValue.secretsManager('github-token'),
        }),
        commands: ['yarn install --frozen-lockfile', 'yarn build', 'npx cdk synth'],
      }),
    });
  }
}