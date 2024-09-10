/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  deletePost?: Maybe<Post>;
  publishPost?: Maybe<Post>;
  signUpUser: User;
};


export type MutationCreateDraftArgs = {
  authorEmail: Scalars['String']['input'];
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
};


export type MutationPublishPostArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignUpUserArgs = {
  data: UserCreateInput;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
};

export type PostCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllPosts: Array<Post>;
  getFilteredPosts: Array<Post>;
  getPostById?: Maybe<Post>;
  getPublishedPosts: Array<Post>;
};


export type QueryGetFilteredPostsArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type All_PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type All_PostsQuery = { __typename?: 'Query', getAllPosts: Array<{ __typename?: 'Post', id: number, title: string }> };


export const All_PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_POSTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<All_PostsQuery, All_PostsQueryVariables>;