"use client";

import { EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import EditorCanvasCardSingle from "./editor-canvas-card-signale";
import { ResizablePanelGroup } from "@/components/ui/resizable";

type Props = {};

const initialNodes: EditorNodeType[] = [];

const initialEdges: { id: string; source: string; target: string }[] = [];

function EditorCanvas({}: Props) {
  const { dispatch, state } = useEditor();

  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      AI: EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      "Google Drive": EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      "Custom Webhook": EditorCanvasCardSingle,
      "Google Calendar": EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
    }),
    []
  );

  return <ResizablePanelGroup>direction = "horizontal" c</ResizablePanelGroup>;
}

export default EditorCanvas;
