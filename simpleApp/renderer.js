const loader = require('monaco-loader');
const fs = require('fs');
let monacoEditor;

loader().then((monaco) => {
    const div = document.getElementById('editor')
    monacoEditor = monaco.editor.create(div, {
        language: "javascript",
        theme: 'vs-dark',
        automaticLayout: true,

        // replace this with empty string, or some demo..
        // make menu at top of program, like an examples tab.
        value: `${fs.readFileSync(__dirname + '/examples/box.js')}` 
    }); 
}).then(() => {
    eval(monacoEditor.getValue())
    // need a way to access `monacoEditor` from outside this file.. (maybe)
    // exports.getValue = () => monacoEditor.getValue();

});