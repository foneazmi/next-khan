"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("https://pb.khan.my.id/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");
    router.refresh();
  };

  return (
    <form onSubmit={create} className="w-56 bg-gray-900 p-4 rounded-lg">
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-2 text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mt-2 text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      />
      <button
        type="submit"
        className="py-2.5  px-8 bg-gray-700 mt-2 rounded-full"
      >
        Create note
      </button>
    </form>
  );
}
