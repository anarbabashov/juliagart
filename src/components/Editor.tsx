import Editor from "@/components/Editor"

export default function EditorPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">New Post</h1>
      <input
        type="text"
        placeholder="Post title..."
        className="w-full p-2 border rounded mb-4"
      />
      <Editor />
    </div>
  )
}