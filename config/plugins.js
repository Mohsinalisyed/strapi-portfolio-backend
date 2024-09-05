module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "<netlify-access-token>",
            sites: [
                {
                    name: 'Site 1',
                    id: "3173f8e0-da92-48ff-9383-b8d28e9b1974",
                    buildHook: "https://api.netlify.com/build_hooks/66d999cd6f15571f60d7e50a",
                    branch: 'develop' // optional
                }
            ]
        },
    },
});