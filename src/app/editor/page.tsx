"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import Underline from "@tiptap/extension-underline"

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>Your story begins here...</p>",
  })

  return (
    <div>
      <div className="border p-2 rounded mb-2">
        <EditorContent editor={editor} />
      </div>
      <pre className="text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap">
        {JSON.stringify(editor?.getJSON(), null, 2)}
      </pre>
    </div>
  )
}

export default Editor