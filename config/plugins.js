module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "nfp_XakUQz2E71Toqt6j4c9QL2EGwxuqTAcic3ff",
            sites: [
                {
                    name: 'Site 1',
                    id: "3173f8e0-da92-48ff-9383-b8d28e9b1974",
                    buildHook: "https://api.netlify.com/build_hooks/66d9a458b760b5048a5546cf",
                    branch: 'develop' // optional
                }
            ]
        },
    },
});