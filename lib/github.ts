import axios from "axios";

export const getGithubFeaturedItems = async () => {
  const { data } = await axios.post<{
    data: {
      user: {
        pinnedItems: {
          nodes: {
            url: string;
            description: string;
            nameWithOwner: string;
          }[];
        };
      };
    };
  }>(
    "https://api.github.com/graphql",
    {
      query: `{
                      user(login: "tontan2545") {
                          pinnedItems(first: 6, types: REPOSITORY) {
                              nodes {
                                  ... on Repository {
                                      url
                                      description
                                      nameWithOwner
                                  }
                              }
                          }
                      }
                  }`,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return data?.data?.user?.pinnedItems?.nodes ?? [];
};
