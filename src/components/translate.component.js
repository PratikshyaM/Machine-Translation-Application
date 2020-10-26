import React, {Component} from 'react';
import { Collapse} from 'react-bootstrap';

export default class translate extends Component {

    constructor(props) {
        super(props);

        this.onChangeInPutText= this.onChangeInPutText.bind(this);
        this.onChangeFileType = this.onChangeFileType.bind(this);
        this.onChangeUploadFile = this.onChangeUploadFile.bind(this);
        this.onTranslate = this.onTranslate.bind(this);
        this.onChangeDownloadFileType = this.onChangeDownloadFileType.bind(this);
        this.onDownload = this.onDownload.bind(this);

        this.state = {
            isOpen:true,
            input_text: '',
            input_file_type: '',
            uploaded_file: '',
            download_file_type:'',
            translated_file: ''
        }
    }

    onChangeInPutText(e) {
        this.setState({
            input_text: e.target.value
        });
    }

    onChangeFileType(e) {
        this.setState({
            input_file_type: e.target.value
        });
    }

    onChangeUploadFile(e) {
        this.setState({
            uploaded_file: e.target.value
        });
    }
    onChangeDownloadFileType(e){
        this.setState(
            {
                download_file_type: e.target.value
            }
        );
    }
    onTranslate(e) {
        e.preventDefault();
        this.setState(
            {
                isOpen: !this.state.isOpen
            }
        );
        console.log(`Submitted For Translation:`);
        console.log(`Input File Type: ${this.state.input_file_type}`);
        console.log(`Input Text: ${this.state.input_text}`);
        console.log(`Uploaded File: ${this.state.uploaded_file}`);
    }
    onDownload(e){
        e.preventDefault();
        console.log(`To Download Translated File:`);
        console.log(`Download File Type: ${this.state.download_file_type}`);
        console.log(`Translated File: ${this.state.translated_file}`);
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Translate</h3>
                <form onSubmit={this.onTranslate}>
                    <div className="form-group">
                        <label>Input Text: </label>
                        <textarea className="form-control"
                                  value={this.state.input_text}
                                  onChange={this.onChangeInPutText}
                                  rows="6" id="text"></textarea>

                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="ift_Options"
                                    id="ift_Doc"
                                    value="Doc"
                                    checked={this.state.input_file_type==='Doc'}
                                    onChange={this.onChangeFileType}
                                    />
                            <label className="form-check-label">Doc</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="ift_Options"
                                    id="ift_Txt"
                                    value="Txt"
                                    checked={this.state.input_file_type==='Txt'}
                                    onChange={this.onChangeFileType}
                                    />
                            <label className="form-check-label">Txt</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="ift_Options"
                                    id="ift_Pdf"
                                    value="Pdf"
                                    checked={this.state.input_file_type==='Pdf'}
                                    onChange={this.onChangeFileType}
                                    />
                            <label className="form-check-label">Pdf</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                                   aria-describedby="inputGroupFileAddon01"
                                   onChange={this.onChangeUploadFile}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Or Upload a File</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" onClick = {this.onTranslate}
                               value="Translate" className="btn btn-primary" />
                    </div>
                </form>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped active" role="progressbar"
                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                        40%
                    </div>
                </div>
                <Collapse className = {this.state.isOpen ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'}>
                <form onSubmit={this.onDownload}>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="dft_Options"
                                    id="dft_Doc"
                                    value="Doc"
                                    checked={this.state.download_file_type==='Doc'}
                                    onChange={this.onChangeDownloadFileType}
                                    />
                            <label className="form-check-label">Doc</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="dft_Options"
                                    id="dft_Txt"
                                    value="Txt"
                                    checked={this.state.download_file_type==='Txt'}
                                    onChange={this.onChangeDownloadFileType}
                                    />
                            <label className="form-check-label">Txt</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="dft_Options"
                                    id="dft_Pdf"
                                    value="Pdf"
                                    checked={this.state.download_file_type==='Pdf'}
                                    onChange={this.onChangeDownloadFileType}
                                    />
                            <label className="form-check-label">Pdf</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Download" className="btn btn-primary" />
                    </div>
                </form></Collapse>
            </div>
        )
    }
}