import {test as uiTest} from './ui.fixture'
import { BaseClient } from '@api/clients/base.client'

type APIFixtures = {
    apiClient:BaseClient
}

export const test = uiTest.extend<APIFixtures>({
    apiClient:async({request},use)=>{
        const apiClient = new BaseClient(request);
        await use(apiClient)
    }
})