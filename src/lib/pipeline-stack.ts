import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { MyPipelineAppStage } from './my-pipeline-app-stage';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      crossAccountKeys: true,
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('CatenaryCloudHQ/cdk-pipelines-example', 'main', {
          authentication: cdk.SecretValue.secretsManager('github-token'),
        }),
        commands: ['yarn install --frozen-lockfile', 'yarn build', 'npx cdk synth'],
      }),
    });

    pipeline.addStage(new MyPipelineAppStage(this, 'dev', {
      env: { account: '793106133212' },
    }));

  }
}