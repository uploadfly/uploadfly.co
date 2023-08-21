import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const ChangelogPost = defineDocumentType(() => ({
  name: "ChangelogPost",
  filePathPattern: `**/changelog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    tag: {
      type: "string",
    },
    summary: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (changelogPost) => `/${changelogPost._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ChangelogPost],
});
