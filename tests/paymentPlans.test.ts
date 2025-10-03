import { test, expect, request } from "@playwright/test";
import api from '../api.json';

test.describe("API-тесты на получение тарифов", async () => {
    test("[positive] получить активные тарифы", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.payment_plans}`,
            {
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtb2JpbGVfYWRtaW4iLCJlbXBsb3llZV9pZCI6MTAyMTQsImV4cCI6MTc1OTU3MDc3OCwiaWF0IjoxNzU5NDg0Mzc4LCJpc3MiOiJvYXV0aC0wLjEuMC0wLjEuMSIsImppZCI6Ijc5MDIzMTU1MjMzQGNoYXQtdGVzdC5kZHhmaXRuZXNzLnJ1IiwianRpIjoiNTQ4NTEwYjUtYTA0OS00OTFhLTg1YTMtODM0ZTU0NWYyZDcwIiwibmJmIjoxNzU5NDg0Mzc4LCJwZXJtaXNzaW9ucyI6W10sInJvb21famlkIjoiNzkwMjMxNTUyMzNAY29uZmVyZW5jZS5jaGF0LXRlc3QuZGR4Zml0bmVzcy5ydSIsInN1YiI6InBhc3N3b3JkIiwidXNlcl9pZCI6Mjc3Mzc4N30.6wYSssMLcqfLz-WSbPguYMApBeJDm8LZvr0k3qlJn8c"
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