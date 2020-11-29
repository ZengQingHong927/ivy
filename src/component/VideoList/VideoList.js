import          React                                   from 'react';
import        { Fragment }                              from 'react';
import        { useState }                              from 'react';
import        { useEffect }                             from 'react';
import          VideoItem                               from '../VideoList/VideoItem';
import          VideoHeader                             from '../VideoList/VideoHeader';

var     mockDatas       = [
        {id: 1, title: '阿滴英文-講出自然流利英文', level: 'B2'},
        {id: 2, title: 'BBC-Forget to do vs Forget doing', level: 'B2'},
        {id: 3, title: 'Cana-多益滿分秘笈分享', level: 'B2'},
        {id: 4, title: 'BBC-Forget to do vs Forget doing (A1)', level: 'A1'},
        {id: 5, title: 'Cana-多益滿分秘笈分享 (A1)', level: 'A1'},
        {id: 6, title: '阿滴英文-講出自然流利英文 (A1)', level: 'A1'},
        {id: 7, title: 'BBC-Forget to do vs Forget doing (B1)', level: 'B1'},
        {id: 8, title: 'Cana-多益滿分秘笈分享 (B1)', level: 'B1'},
        {id: 9, title: '阿滴英文-講出自然流利英文 (B1)', level: 'B1'},
        {id: 10, title: 'BBC-Forget to do vs Forget doing (A2)', level: 'A2'},
        {id: 11, title: 'Cana-多益滿分秘笈分享 (A2)', level: 'A2'},
        {id: 12, title: '阿滴英文-講出自然流利英文 (A2)', level: 'A2'},
]


function VideoList (props) {

        let   [ level, setLevel ]       = useState ('B2');
        let   [ items, setItems ]       = useState ([]);
        
        useEffect (() => {
                refreshItems ();
        }, [level]);

        function refreshItems () {
                let     filterItems     = mockDatas.filter (item => item.level === level);
                setItems (filterItems);
        }


        return (
                <Fragment >
                        <div >
                                <div style={{margin: '0 auto', width: '70%'}}>
                                        <VideoHeader setLevel={setLevel} />
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                {items.map ((item, key) => (
                                                        <div key={key}>
                                                                <VideoItem item={item} />
                                                        </div>
                                                ))}
                                                
                                        </div>
                                </div>
                        </div>
                </Fragment>
        )

}


export default VideoList;