import { FolderNode, FolderTreeData } from "@/types";
import { Folder, File } from "lucide-react";

function TreeNode({ node }: { node: FolderNode }) {
  return (
    <div className="ml-4">
      <div className="flex items-center gap-2">
      <span>{node.type === "folder" ? <Folder className="w-4 h-4 text-blue-500"/> :  <File className="w-4 h-4 text-grey-500"/>}</span>
        <span>{node.name}</span>
      </div>
      {node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FolderTree({ data }: { data: FolderTreeData }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <p className="text-sm text-gray-500 mb-2">
        Organization: <span className="font-medium">{data.organizationRating}</span>
      </p>
      <TreeNode node={data.root} />
    </div>
  );
}