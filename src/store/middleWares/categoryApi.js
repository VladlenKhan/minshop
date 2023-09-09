import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
	reducerPath: "categoryApi",
	baseQuery: fetchBaseQuery({
		fetchBaseQuery: "https://api.minzifashop.com/v1/",
	}),
	endpoints: (build) => ({
		getAllCategories: build.query({
			query: () => "categories?page=1&page_size=100",
		}),
	}),
});

export const { useGetAllCategoriesQuery } = categoryApi;
