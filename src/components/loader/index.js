import { h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './style.css';
import { Hexagon, TiledHexagons } from 'tiled-hexagons';


const Loader = () => {
    return (
        <div class={styles.cssload-wrap}>
            <div class={styles.cssload-cssload-spinner}></div>
        </div>

    );
};

export default Loader;