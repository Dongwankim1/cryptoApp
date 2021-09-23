import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '82b580a59bmsh1c3443ddd1b703ap1e06e6jsnef1702982819'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery : fetchBaseQuery({
        baseUrl
    }),
    endpoints:(builder)=>({
        getCryptos:builder.query({
                getCryptos:builder.query({
                    query:() => createRequest('/exchnages')
                })
        })
    })
})

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '82b580a59bmsh1c3443ddd1b703ap1e06e6jsnef1702982819'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });