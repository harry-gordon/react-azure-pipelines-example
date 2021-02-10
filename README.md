# React Azure Pipelines Example

This repo is a demonstration of a basic React app that is configured to build in an Azure Pipeline (see the `azure-pipelines.yml`). I mostly made this for demonstration/testing purposes and the YAML only really does the following:

1. Install Node
2. Run `npm install` and `npm run build`
3. Copy the build output to the artifact directory
4. Publish the build artifact so we can use it in a Release Pipeline
