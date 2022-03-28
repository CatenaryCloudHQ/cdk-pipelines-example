# Cdk Pipelines with accounts setup

This is CDK learning project that teaches how to setup AWS accounts for CDK Pipelines from ground up.

# AWS Organizations

We assume one existing aws account with admin permissions. We are going to setup following structure.

There are three organization units (ou):
1. Shared OU for CICD account with Codepipeline to deploy applications in target accounts
2. ApplicationX OU for accounts to develop, test and deploy applicationX

```mermaid

flowchart TB
    subgraph root
        ma["master account"]
    end

    subgraph sharedou["Shared OU"]
        cicd["cicd account"]
    end

    subgraph appx["ApplicationX OU"]
        dev["AppX dev account"]
        prod["AppX prod account"]
    end

    ma --> sharedou

    cicd -->|trust| dev

    cicd -->|trust| prod
```

`npm install -g aws-organization-formation`