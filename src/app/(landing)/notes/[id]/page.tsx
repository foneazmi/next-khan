"use client";

import { useRouter } from "next/navigation";

async function getNote(noteId: string) {
  const res = await fetch(
    `https://pb.khan.my.id/api/collections/notes/records/${noteId}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const router = useRouter();

  const note = await getNote(params.id);
  const { id, title, content, created } = note || {};

  const deleteNote = async () => {
    try {
      await fetch(`https://pb.khan.my.id/api/collections/notes/records/${id}`, {
        method: "DELETE",
      });
      router.back();
      router.refresh();
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="w-56 bg-gray-900 p-4 rounded-lg m-8">
      <h1>notes/{id}</h1>
      <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
        {title}
      </h1>
      <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
        {content}
      </h1>
      <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
        {created}
      </h1>

      <button
        onClick={deleteNote}
        className="py-2.5  px-8 bg-gray-700 mt-2 rounded-full"
      >
        Delete note
      </button>
    </div>
  );
}
