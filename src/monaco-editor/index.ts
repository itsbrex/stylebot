export { default as MonacoEditor } from './MonacoEditor.vue';
export * from './monaco-editor.DS_Store';
 type: 'stylebotMonacoIframeCssUpdated';
  css: string;export * from './monaco-editor.DS_Store';
 type: 'stylebotMonacoIframeLoaded';
};

export type IframeMessage = IframeCssUpdatedMessage | IframeLoadedMessage;

export type ParentUpdateCssMessage = {
  type: 'stylebotCssUpdate';
  css: string;
  selector?: string;
};
