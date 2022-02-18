import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.pray.zone/v2/times' }),
    endpoints: (builder) => ({
        getPrayTime: builder.query({
            query: () => `today.json?city=sulaymaniyah&school=2&timeformat=1`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPrayTimeQuery } = appApi