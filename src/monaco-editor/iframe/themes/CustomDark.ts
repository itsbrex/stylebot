export default {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: 'F8F8F8', background: '1E1E1E' },
    { token: 'invalid', foreground: 'FF0000' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '9CDCFE' },
    { token: 'variable.predefined', foreground: 'FF00FF' },
    { token: 'constant', foreground: '569CD6' },
    { token: 'comment', foreground: '6A9955' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'number.hex', foreground: '5A9BCF' },
    { token: 'regexp', foreground: 'D16969' },
    { token: 'annotation', foreground: 'D4D4D4' },
    { token: 'type', foreground: '3DC9B0' },

    { token: 'delimiter', foreground: 'F8F8F8' },
    { token: 'delimiter.html', foreground: 'F8F8F8' },
    { token: 'delimiter.xml', foreground: 'F8F8F8' },

    { token: 'tag', foreground: '569CD6' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: 'CFCFCF' },
    { token: 'metatag', foreground: 'CE9178' },
    { token: 'metatag.content.html', foreground: '9CDCFE' },
    { token: 'metatag.html', foreground: 'D4D4D4' },
    { token: 'metatag.xml', foreground: 'D4D4D4' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '9CDCFE' },
    { token: 'string.key.json', foreground: 'CE9178' },
    { token: 'string.value.json', foreground: '9CDCFE' },

    { token: 'attribute.name', foreground: '569CD6' },
    { token: 'attribute.value', foreground: 'CE9178' },
    { token: 'attribute.value.number', foreground: 'B5CEA8' },
    { token: 'attribute.value.unit', foreground: 'B5CEA8' },
    { token: 'attribute.value.html', foreground: '9CDCFE' },
    { token: 'attribute.value.xml', foreground: '9CDCFE' },

    { token: 'string', foreground: 'CE9178' },
    { token: 'string.html', foreground: 'CE9178' },
    { token: 'string.sql', foreground: 'FF0000' },
    { token: 'string.yaml', foreground: '9CDCFE' },

    { token: 'keyword', foreground: '569CD6' },
    { token: 'keyword.json', foreground: '9CDCFE' },
    { token: 'keyword.flow', foreground: 'C586C0' },
    { token: 'keyword.flow.scss', foreground: '569CD6' },

    { token: 'operator.scss', foreground: '909090' },
    { token : 'operator.sql', foreground: 'FF0000' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
],
  colors: {
    editorBackground: '#1E1E1E',
    editorForeground: '#F8F8F8',
    editorInactiveSelection: '#3A3D41',
    editorIndentGuides: '#3B3B3B',
    editorActiveIndentGuides: '#2B2B2B',
    editorSelectionHighlight: '#ADD6FF26'
  }
};
