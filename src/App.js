import          React                           from 'react';
import        { Fragment }                      from 'react';
import        { Suspense }                      from 'react';
import        { Switch }                        from 'react-router-dom';
import          PassRoute                       from './component/CusComponent/PassRoute';
import          VideoList                       from './component/VideoList/VideoList';
import          VideoContent                    from './component/VideoList/VideoContent';
import          LinearProgress                  from '@material-ui/core/LinearProgress';
import        { BrowserRouter }                 from 'react-router-dom';



function App() {


        return (
                <Fragment>
                        <BrowserRouter>
                                <Suspense fallback={<LinearProgress />}>
                                        <Switch>
                                                <PassRoute path='/' exact component={VideoList} />
                                                <PassRoute path='/video' exact component={VideoContent} />
                                        </Switch>
                                </Suspense>
                        </BrowserRouter>
                </Fragment>
        );
}

export default App;
