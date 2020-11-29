import          React                                   from 'react';
import        { Fragment }                              from 'react';
// import                                                  '../../index.css';


function VideoHeader (props) {

        let   { setLevel }              = props;

        function handleClick (e) {
                let     ovr_level       = e.target.dataset.set;
                setLevel (ovr_level);
        }

        return (
                <Fragment>
                        <div style={{display: 'flex', marginBottom: '16px'}}>
                                <div>
                                        <div style={{fontSize: '40px', fontWeight: 600}}>看點影片</div>
                                </div>
                                <div className='level_menu' style={{position :'relative', alignSelf: 'center'}}>
                                        <div>
                                                <span>選擇程度</span>
                                        </div>
                                        <div className='level_option'>
                                                <ul onClick={handleClick}>
                                                        <li data-set='A1'>A1</li>
                                                        <li data-set='A2'>A2</li>
                                                        <li data-set='B1'>B1</li>
                                                        <li data-set='B2'>B2</li>
                                                        <li data-set='C1'>C1</li>
                                                        <li data-set='C2'>C2</li>
                                                        <li data-set='D1'>D1</li>
                                                        <li data-set='D2'>D2</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </Fragment>
        );
}

export default VideoHeader;