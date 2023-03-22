import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar(
    { "/": [
            "",
            {
                text: "docs",
                prefix: "docs/",
                link: "docs/introduction/overview",
                children: [
                    "introduction/",
                    "get-started.md",
                    "concept/",
                    "greenfield-blockchain/",
                    "storage-provider/",
                    "dapp/",
                    "api-sdk/",
                    "resources.md",
                    "release-note.md",
                    "faq/",
                ],
            },
        ],
        "/docs/": "structure",
    }
);
