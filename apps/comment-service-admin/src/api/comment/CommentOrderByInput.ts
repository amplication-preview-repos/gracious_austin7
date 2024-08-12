import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  blogPost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
