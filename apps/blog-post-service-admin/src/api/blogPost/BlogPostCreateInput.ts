import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BlogPostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
