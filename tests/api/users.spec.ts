import {test,expect, request} from '@playwright/test'
import { BaseClient } from '@api/clients/base.client';
import {env} from '@config/env';
const BASE_URL = env.BASE_URL;

test.describe('Users API',()=>{
    test('Get/usersn returns a list of Users',async({request})=>{
        const client = new BaseClient(request);
        const res = await client.get(`${BASE_URL}/users`)

        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(Array.isArray(body)).toBe(true)
        expect(body.length).toBeGreaterThan(0);
    }) 
    test('Get/users/:id returns a single user',async({request})=>{
        const client =  new BaseClient(request);
        const res = await client.get(`${BASE_URL}/users/1`);
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('email');
    })

    test('Post/users creates new user',async({request})=>{
        const client = new BaseClient(request);
        const res = await client.post(`${BASE_URL}/users`,{
            name : 'John Doe',
            email :'john.doe@example.com',
        });
        expect(res.status()).toBe(201)
        const body = await res.json();
        expect(body.name).toBe('John Doe')
        expect(body).toHaveProperty('id');
        })

})