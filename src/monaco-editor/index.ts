export { default as MonacoEditor } from './MonacoEditor.vue';

 type: 'stylebotMonacoIframeCssUpdated';
  css: string;
 type: 'stylebotMonacoIframeLoaded';
};

export type IframeMessage = IframeCssUpdatedMessage | IframeLoadedMessage;

export type ParentUpdateCssMessage = {
  type: 'stylebotCssUpdate';
  css: string;
  selector?: string;
};
