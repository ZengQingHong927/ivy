import          React                                   from 'react';
import        { Fragment }                              from 'react';
import        { useHistory }                            from 'react-router-dom';

function VideoItem (props) {

        let   { item }  = props;
	let	history		        = useHistory ();

        function handleGoToVideo () {
                history.push ('/video');
        }

        return (
                <Fragment>
                        <div>
                                <div onClick={handleGoToVideo}>
                                        <img style={{borderRadius: '10px'}} src={`https://picsum.photos/seed/${Date.now ().toString (16)}/367/267`} alt='cover' />
                                </div>
                                <div onClick={handleGoToVideo}>
                                        <h3>{item.title}</h3>
                                </div>
                                <div>
                                        <div style={{borderRadius: '30px', border: '1px solid #000000', width: '40px', textAlign: 'center'}}>{item.level}</div>
                                </div>
                                <div style={{marginTop: '16px', float: 'right'}}>
                                        <div style={{padding: '3px', color: '#ff9642', border: '1px solid #ff9642', borderRadius: '5px', width: '70px', textAlign: 'center'}} onClick={handleGoToVideo} >看影片</div>
                                </div>
                        </div>
                </Fragment>
        )

}

export default VideoItem;