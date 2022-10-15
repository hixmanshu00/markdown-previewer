

//initalize marked.js

marked.setOptions({
  breaks: true
});


const renderMarkdown = new marked.Renderer();

//create react components

const Editor = props => {
  return (
    <div id="editor-container" className="col border border-secondary">
    
      <h3 className="p-2 hd">Editor</h3>
      <div className="h-100">
        <textarea
          id="editor"
          className="col"
          value={props.markdown}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

const Preview = props => {
  return (
    <div
      id="preview-container"
      className="col border border-secondary"
    >
      <h3 className="p-2 hd">Preview</h3>
      <div
        id="preview"
        className="container"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderMarkdown })
        }}
      />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div id="main" className="">
        <h3 className="text-center heading">Markdown Previewer</h3>
        <div className="row">
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />

          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

const placeholder = `# This is a Markdown previewer!

## enter github style markdown 
### And receive html output

\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`
  
**bold** text
_italic_ text
**_both!_**
~~crossed out~~.

[link](https://www.freecodecamp.com)
> Block Quotes!


- \`<ul></ul>\`
  - with bullets.
     - indented.


1. \`<ol></ol>\`
1. once started  
1. use whatever 
- you
* want

embedded images:

![CodePen Logo](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png)
`;



ReactDOM.render(<App />, document.getElementById("root"));