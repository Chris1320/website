export interface ToolIcon {
    light: string;
    dark: string;
}

export interface Tool {
    name: string;
    icon: ToolIcon;
}

export interface ToolkitCategory {
    name: string;
    tools: Tool[];
}
