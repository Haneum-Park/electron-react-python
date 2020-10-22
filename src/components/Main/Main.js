import React from 'react';

const { ipcRenderer } = window;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handle = this.handle.bind(this);
  };

  componentDidMount() {
    console.log("Mounted.");
  };

  handle() {
    const data = 'xyz';
    ipcRenderer.send('request_main_store_main_data', data);
  };

  render() {
    return (
      <div className="Main">
        main
        <button onClick={this.handle}>Click</button>
      </div>
    );
  }
}

export default Main;