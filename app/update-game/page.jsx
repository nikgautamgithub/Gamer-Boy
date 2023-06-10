"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditGamePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    gameName: "",
    game: "",
    tag: "",
  });

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await fetch(`/api/game/${gameId}`);
      const data = await response.json();

      setPost({
        gameName: data.gameName,
        game: data.game,
        tag: data.tag,
      });
    };

    if (gameId) getGameDetails();
  }, [gameId]);

  const updateGame = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!gameId) return alert("Game Id not found!!");

    try {
      //   console.log(post.gameName, post.game, post.tag, "Page.jsx");

      const response = await fetch(`/api/game/${gameId}`, {
        method: "PATCH",
        body: JSON.stringify({
          gameName: post.gameName,
          game: post.game,
          tag: post.tag,
        }),
      });
      //   console.log(response);
      if (response.ok) {
        // console.log("OK!");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateGame}
    />
  );
};

export default EditGamePage;
