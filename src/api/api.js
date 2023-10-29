
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }), 
  tagTypes:['user'],
  // this end point is only for get the data from api
  endpoints: (builder) => ({
    users: builder.query({
      query: () => 'users',
      providesTags:['user']
    }),   
    // this end point is basicaly for adding the data (mutation)
    addUser: builder.mutation({
      query: (user) => {
     console.log(user,'userbuilder')
     return{
      url: 'users',
      method: 'POST',
      body: user,
     }
      },
      invalidatesTags:['user']
    }),
// this end point is basicaly for editing the data (mutation)
    editUser: builder.mutation({
      query: (user) => { 
        console.log('inside api console' , user)   
       return{
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
       }
      },
      invalidatesTags:['user']
    }),
    // this end point is basicaly for delete the data (mutation)
    deleteUser: builder.mutation({
      query: (id) => {
       console.log('delete id', id)
      return{
        url: `users/${id}`,
        method: 'DELETE',
      }
      },
      invalidatesTags:['user']
    }),
  }),
});

export const { useUsersQuery, useAddUserMutation, useEditUserMutation, useDeleteUserMutation } = api;

export default api;
