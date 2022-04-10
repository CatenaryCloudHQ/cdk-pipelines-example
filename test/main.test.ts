import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { MyPipelineStack } from "../src/lib/pipeline-stack";

test("Snapshot", () => {
  const app = new App();
  const stack = new MyPipelineStack(app, "MyPipelineStack", {
    env: { account: "123123123123", region: "us-east-1" },
  });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
