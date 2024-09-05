module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "<netlify-access-token>",
            sites: [
                {
                    name: 'Site 1',
                    id: "696e1071-b0f3-42c6-b04b-44d987e7fe7e",
                    buildHook: "https://syedhassanraza.netlify.app/build_hooks/<hook_id>",
                    branch: 'develop' // optional
                }
            ]
        },
    },
});