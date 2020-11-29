import          React                                   from 'react';
import        { Fragment }                              from 'react';
import          natureVideo                             from '../../video/Nature.mp4';


function VideoContent (props) {
        return (
                <Fragment>
                        <div style={{margin: '0 auto', width: '70%'}}>
                                <video  width='100%' src={natureVideo} controls="controls" />
                        </div>
                </Fragment>
        );
}

export default VideoContent;

