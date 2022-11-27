export const discussionGql = (ghDiscussionCategoryId: string | undefined) => {
	return `{
        repository(owner: "NguyenNgocMinh432", name: "DevBlog") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
                nodes {
                    title
                    url
                    number
                    bodyHTML
                    bodyText
                    createdAt
                    lastEditedAt
                    author {
                        login
                        url
                        avatarUrl
                    }
                    labels(first: 100) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }`;
};
