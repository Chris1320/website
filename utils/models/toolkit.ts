export interface Tool {
    name: string;
    icon: string; // icon name
    description: string;
}

export interface ToolkitCategory {
    name: string;
    description: string;
    tools: Tool[];
}
