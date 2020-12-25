import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HexagonGrid from './js/Hexagon-Grid';
import times from 'lodash/times';
import Hexagon1 from 'react-hexagon';

import '../../css/bootstrap';
import '../../js/bootstrap';
import style from './style.css';

/*
*
*
*
*/



const hexagon = () => {
    const getHexProps = (hexagon) => {
        return {
            style: {
                fill: '#007aff',
                stroke: 'white'
            },
            onClick: () => alert(`Hexagon n.${hexagon} has been clicked`)
        };
    }

    const renderHexagonContent = (hexagon) => {
        return (
            <text
                x="50%"
                y="50%"
                fontSize={100}
                fontWeight="lighter"
                style={{ fill: 'white' }}
                textAnchor="middle"
            >
                {hexagon}
            </text>
        );
    }

    let hexagons = times(102, id => id);

    return (
        <div>
            <HexagonGrid
                gridWidth={500}
                gridHeight={500}
                hexagons={hexagons}
                hexProps={getHexProps}
                renderHexagonContent={renderHexagonContent}
            />
            <div>
            <Hexagon1
                style={{ stroke: '#42873f' }}
                backgroundImage="img/red-panda.jpg"
                href="http://espen.codes/"
            />
            </div>

        </div>
    );
}

export default hexagon;