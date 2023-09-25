import { generateModelsAsync, textHelper } from '@kontent-ai/model-generator'
import { rmSync, mkdirSync } from 'fs'

import * as dotenv from 'dotenv'
dotenv.config()

const runAsync = async () => {
  rmSync('./src/models', { force: true, recursive: true })
  mkdirSync('./src/models')

  // change working directory to models
  process.chdir('./src/models')

  await generateModelsAsync({
    sdkType: 'delivery',
    apiKey: process.env.KONTENT_MANAGEMENT_API_KEY ?? '',
    environmentId: process.env.KONTENT_ENVIRONMENT_ID ?? '',
    addTimestamp: false,
    isEnterpriseSubscription: false,
    addEnvironmentInfo:false
  })
}

// Self-invocation async function
;(async () => {
  await runAsync()
})().catch(err => {
  console.error(err)
  throw err
})