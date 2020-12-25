import { h } from 'preact';
import { Link } from 'preact-router/match';

import { Hexagon, TiledHexagons } from 'tiled-hexagons';

import '../../css/bootstrap';
import '../../js/bootstrap';
import style from './style.css';

const Loader = () => {
    return (
        <div class={style.cssload-wrap}>
            <div class={style.cssload-cssload-spinner}></div>
        </div>

    );
};

export default Loader;