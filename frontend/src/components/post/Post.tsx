"use client";

import { useQuery } from "@apollo/client";
import { gql } from "../../../apollo/__generated__/client";

const ALL_POSTS = gql(`query ALL_POSTS {
  getAllPosts {
    id
    title
  }
}`);

const Post = () => {
  const { data, loading, error } = useQuery(ALL_POSTS);
  if (loading) {
    return <div>読み込み中</div>;
  }
  if (error) {
    return <div>エラーが発生しました</div>;
  }
  return (
    <div>
      <ul>
        {data &&
          data.getAllPosts.map((v, i) => (
            <>
              <li key={String(i)}>{v.id}</li>
              <li key={String(i)}>{v.title}</li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default Post;
