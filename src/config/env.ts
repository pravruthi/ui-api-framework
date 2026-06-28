import * as dotenv from 'dotenv';
import{z} from 'zod';

const ENV = process.env.Test_ENV || 'dev';
dotenv.config({path:`.env.${ENV}`});

const EnvSchema = z.object({
    BASE_URL: z.string().url(),
    UI_BASE_URL: z.string().url(),
})
export const env = EnvSchema.parse(process.env)