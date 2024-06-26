import { omit, pick, uniqBy } from "lodash";
import * as repository from "../../repositories/post/post.repository";
import * as signRepository from "../../repositories/sign/sign.repository";
import * as commentRepository from "../../repositories/comment/comment.repository";
import {
  createDefaultPost,
  createDefaultReaction,
  createDefaultSaved,
  createDefaultComment,
} from "../../helpers/create-default-entities";
import {
  Post,
  CreatePostParamsType,
  DeletePostParamsType,
  EditPostParamsType,
  ListsPostsParamsType,
  TogglePostReactionParamsType,
  ToggleSavePostParamsType,
  CreateCommentParamsType,
} from "./types";

async function listPosts(data: ListsPostsParamsType) {
  const { page, user, ...params } = data;
  const limit = page * data.limit;
  const newData = { ...params, offset: 0, limit };

  if (data.context !== "home") return repository.listPosts(newData);

  const following = await signRepository.findFollowing(user);
  const users = (following ?? []).map((user) => user.id);

  users.push(user);

  const loggedUser = await signRepository.findUserById(user);
  const topics = (loggedUser?.topics ?? []).map((topic) => topic.id ?? "");

  newData.where.users = users;

  const posts = await repository.listPosts(newData);
  const postsByTopics = await repository.listPosts({
    ...newData,
    where: { locale: "", users: [], topics },
  });

  return uniqBy((posts ?? []).concat(postsByTopics ?? []), "id");
}

async function findPostById(id: string) {
  return repository.findPostById(id);
}

async function createPost(data: CreatePostParamsType) {
  const newPost = createDefaultPost(data);
  await repository.createPost(newPost);
}

async function createPostComment(data: CreateCommentParamsType) {
  const newPost = createDefaultComment(data);
  await commentRepository.createComment(newPost);
}

async function updatePost(data: EditPostParamsType) {
  const post = await repository.findUserPost({ user: data.user, post: data.id });

  if (!post) throw new Error("Post not found!");

  const newPost = pick(createDefaultPost({ ...omit(post, "updatedAt"), ...data }), [
    "content",
    "locale",
    "topics",
    "links",
    "updatedAt",
  ]) as Post;

  await repository.updatePost(data.id, newPost);
}

async function togglePostReaction(data: TogglePostReactionParamsType) {
  const { value, ...reaction } = data;
  const newReaction = createDefaultReaction(reaction);

  if (value) return repository.reactPost(newReaction);

  return repository.deletePostReaction(newReaction);
}

async function toggleSavePost(data: ToggleSavePostParamsType) {
  const { value, ...saved } = data;
  const newSaved = createDefaultSaved(saved);

  if (value) return repository.savePost(newSaved);

  return repository.deleteSavedPost(newSaved);
}

async function deletePost(data: DeletePostParamsType) {
  const post = await repository.findUserPost(data);

  if (!post) throw new Error("Post not found!");

  return repository.deletePost(data.post);
}

export {
  listPosts,
  findPostById,
  createPost,
  createPostComment,
  updatePost,
  togglePostReaction,
  toggleSavePost,
  deletePost,
};
