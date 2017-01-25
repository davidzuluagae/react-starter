/**
 * Created by davidzuluaga on 1/20/17.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

class MainComponent extends React.Component {

    render() {
        return (
            <h1>implementing here...</h1>
        );
    }

}

render(
    <MainComponent />,
    document.getElementById('app')
);