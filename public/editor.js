window.onload = () => {
  window.editor1 = ace.edit("editor1");
  editor1.getSession().setMode("ace/mode/javascript");

  window.editor2 = ace.edit("editor2");
  editor2.getSession().setMode("ace/mode/coffee");

  let editMode = editor1;
  const toggleMode = () => {
    if (editMode === editor1) {
      editMode = editor2;
    } else if (editMode === editor2) {
      editMode = editor1;
    }
    schedule();
  };

  editor1.on('change', (event, editor) => {
    const focused = document.activeElement.parentElement;
    if (focused === editor1.container) {
      editMode = editor1;
      schedule();
    }
  });

  editor2.on('change', (event, editor) => {
    const focused = document.activeElement.parentElement;
    if (focused === editor2.container) {
      editMode = editor2;
      schedule();
    }
  });


  let job = null;

  const schedule = () => {
    if (job != null) {
      clearTimeout(job);
    }
    return job = setTimeout(doCompile, 200);
  };

  const doCompile = () => {
    if (editMode === editor1) {
      generateCoffeeDoc();
    } else {
      generateJSDoc();
    }
  };

  const generateJSDoc = () => {
    try {
      const coffeeDoc = editor2.getSession().getDocument().getValue();

      const url = 'http://localhost:8080/convert';
      const payload = JSON.stringify({code: coffeeDoc});
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      const options = {
        body: payload,
        headers: headers,
        method: 'POST'
      };
      const request = new Request(url, options);

      window
        .fetch(request)
        .then(response => response.text())
        .then((jsDoc) => {
          editor1.getSession().getDocument().setValue(jsDoc);
        });

    } catch (error) {
      console.error(error);
    }
  };

  const generateCoffeeDoc = () => {
    // console.warn('Cannot convert JSDoc to CoffeeDoc yet.');
  };

  const enableOptions = (editors) => {
    for (const editor of editors) {
      editor.setFontSize(14);
      editor.setTheme("ace/theme/monokai");
      editor.setShowInvisibles(true);
      editor.renderer.setShowGutter(true);
      editor.renderer.setShowPrintMargin(false);
    }
  };

  enableOptions([editor1, editor2]);
  // compileToCoffee();
};
