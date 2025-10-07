import { test, expect, request } from "@playwright/test";
import api from '../api.json';
 
test.describe("API-тесты на получения списка клубов", async () => {
    test("[positive] получить список клубов", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.clubs}`,
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

    test("[negative] получить список клубов без обязательного параметра", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.clubs}`,
            {
                headers: {
                    'Authorization': api.tokens.test,
                },
                params: {
                    session_id: "1212",
                    request_id: "",
                    request_source: "web_app",
                },
             }
        );

        expect(response.status()).toBe(400);
    });
});