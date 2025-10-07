import { test, expect, request } from "@playwright/test";
import api from '../api.json';

test.describe("API-тесты на получение тарифов", async () => {
    test("[positive] получить активные тарифы", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.payment_plans}`,
            {
                headers: {
                    'Authorization': api.tokens.test,
                },
                params: {
                    session_id: "1212",
                    request_id: "2121",
                    "request_source": "web_app"
                }
            }
        );

        expect(response.status()).toEqual(200);
    });
})