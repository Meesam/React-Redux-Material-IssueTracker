import React ,{Component} from 'react';
import Upload from 'material-ui-upload/Upload';

class IssueAttachments extends Component {
  constructor() {
    super();
    this.state = {
      pictures: {}
    };
  }

  onFileLoad = (e) => console.log(e.target.result);

  render() {
    return (
      <Upload onFileLoad={this.onFileLoad}/>
    );
  }
}

export default IssueAttachments;
