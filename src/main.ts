import { App, Aws } from "aws-cdk-lib";
import { MyPipelineStack } from "./lib/pipeline-stack";

const app = new App();
console.log(Aws.REGION, Aws.ACCOUNT_ID);

new MyPipelineStack(app, "MyPipelineStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});

app.synth();
