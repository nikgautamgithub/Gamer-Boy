"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/form";

const AddGamePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    gameName: "",
    game: "",
    tag: "",
  });

  const addGame = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      //   console.log(post.gameName, post.game, post.tag, "Page.jsx");

      const response = await fetch("/api/game/new", {
        method: "POST",
        body: JSON.stringify({
          gameName: post.gameName,
          game: post.game,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      // console.log(response);
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
      type="Add"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={addGame}
    />
  );
};

export default AddGamePage;
