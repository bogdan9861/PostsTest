import React, { useCallback, useEffect, useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import Service from "../../service";
import Header from "../../components/Header/Header";

import useDebounce from "../../hooks/useDebounce";

import "./Main.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const defferedSearch = useDebounce(search, 500);

  const { getPosts, loading, error } = Service();

  useEffect(() => {
    const filterPostAsync = async () => {
      const posts = await getPosts();

      const filteredPosts = posts.filter((post) =>
        post?.title?.includes(defferedSearch)
      );

      setPosts([...filteredPosts]);
    };

    filterPostAsync();
  }, [defferedSearch]);

  const getData = () => {
    getPosts()
      .then((res) => {
        setPosts([...res]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <Header setSearch={setSearch} />
        <PostsList posts={posts} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Main;
