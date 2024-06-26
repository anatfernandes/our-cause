import { Query, QueryValue } from "fauna";
import { Post, Reaction, ReactionType, Saved } from "../../models";

type ListPostsSortByType = "date" | "like";
type ListPostsSortDirectionType = "asc" | "desc";

type ListsPostsSortParamsType = {
  by: ListPostsSortByType;
  direction: ListPostsSortDirectionType;
};

type ListsPostsWhereParamsType = {
  locale: string;
  users: string[];
  topics: string[];
};

type ListsPostsParamsType = {
  limit: number;
  offset: number;
  sort: ListsPostsSortParamsType;
  where: ListsPostsWhereParamsType;
};

type FindUserPostParamsType = {
  user: string;
  post: string;
};

type ListPostsResultType = { data: Post[] | null };

type FindUserPostResultType = { data: Post[] | null };

type CreatePostParamsType = Omit<Post, "id">;

type UpdatePostParamsType = Omit<Post, "id" | "owner" | "createdAt">;

type ReactPostParamsType = Omit<Reaction, "id">;

type SavePostParamsType = Omit<Saved, "id">;

type DeletePostReactionParamsType = {
  user: string;
  post: string;
  type: ReactionType;
};

type DeleteSavedPostParamsType = {
  user: string;
  post: string;
};

type QueryType = QueryValue | Query;

export type {
  FindUserPostParamsType,
  FindUserPostResultType,
  ListPostsSortByType,
  ListPostsSortDirectionType,
  ListsPostsSortParamsType,
  ListsPostsWhereParamsType,
  ListsPostsParamsType,
  ListPostsResultType,
  CreatePostParamsType,
  UpdatePostParamsType,
  ReactPostParamsType,
  SavePostParamsType,
  DeletePostReactionParamsType,
  DeleteSavedPostParamsType,
  QueryType,
};
