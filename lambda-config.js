require('dotenv').load({silent: true});

module.exports = {
  region: 'ap-northeast-1',
  handler: 'index.handler',
  role: process.env.ROLE,
  functionName: 'api_v1_sqlite',
  timeout: 10,
  memorySize: 128,
  runtime: 'nodejs4.3'
  // eventSource: {
  //  EventSourceArn: <event source such as kinesis ARN>,
  //  BatchSize: 200,
  //  StartingPosition: "TRIM_HORIZON"
  //}
}
