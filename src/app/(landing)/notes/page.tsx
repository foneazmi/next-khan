import Link from "next/link";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "https://pb.khan.my.id/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <main className="flex flex-col p-8">
      <CreateNote />

      <h1 className="mt-8 mb-4">Notes</h1>
      <div className="flex flex-wrap gap-2">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </main>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="flex flex-col w-56 bg-gray-900 p-4 rounded-lg">
        <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          {title}
        </h1>
        <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          {content}
        </h1>
        <h1 className="truncate overflow-ellipsis mt-2 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          {created}
        </h1>
      </div>
    </Link>
  );
}
