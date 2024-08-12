import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  blogPost?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
