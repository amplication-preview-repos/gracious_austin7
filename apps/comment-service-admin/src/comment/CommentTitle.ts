import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "blogPost";

export const CommentTitle = (record: TComment): string => {
  return record.blogPost?.toString() || String(record.id);
};
