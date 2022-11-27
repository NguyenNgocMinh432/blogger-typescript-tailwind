import { discussionGql } from "./gql";

const API_URL = "https://api.github.com/graphql";
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const DISCUSSIONS_CATEGORY_ID = process.env.DISCUSSIONS_CATEGORY_ID;

export const getBlogs = async () => {
	console.log({
		token: GH_ACCESS_TOKEN,
		discussions: DISCUSSIONS_CATEGORY_ID,
	});

	const response = await fetch(API_URL, {
		method: "POST",
		headers: {
			Authorization: `token ${GH_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: discussionGql(DISCUSSIONS_CATEGORY_ID),
		}),
	});
	const res = await response.json();
	console.log("data", res.data.repository.discussions.nodes);
};
