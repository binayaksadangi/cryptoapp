//logic to fetch the data from api
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const headers ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4e5aa1b08bmsh16e51a4a6d35bb9p1e3e85jsn7dabd9476361'
}

const baseUrl ='https://coinranking1.p.rapidapi.com/';

const createRequest =(url) => ({url,headers:headers});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
         getCryptos: builder.query({
             query: ()=> createRequest('/coins')
         })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi;