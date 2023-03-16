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
                    "greenfield-blockchain/",
                    "storage-provider/",
                    "dapp/",
                    "api-sdk/",
                    "release-note.md",
                    "question-answer/",
                ],
            },
        ],
        "/docs/": "structure",
    }
);
