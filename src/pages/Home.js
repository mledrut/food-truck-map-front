import "../App.scss";
import { useState, useRef } from "react";
import { Map, Marker } from "pigeon-maps";
import json from "../components/test.json";
import { ReactComponent as MarkerIcon } from "../icons/cursor.svg";

function App() {
    const [viewMode, setViewMode] = useState("map");
    const [position, setPosition] = useState({ x: 50.60684, y: 3.15339 });
    const [maison, setMaison] = useState({ x: 50.64684, y: 3.129261 });
    const [mdeuxi, setMdeuxi] = useState({ x: 50.60684, y: 3.15339 });
    const mapDiv = useRef(null);
    const listDiv = useRef(null);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("error");
        }
    }

    function showPosition(position) {
        console.log(position);
        setCenter([position.coords.latitude, position.coords.longitude]);
        setZoom(16);
    }

    function toggleView(e) {
        const switchDiv = document.querySelector(".switch-bg");
        const div = document.querySelector(".home-page-list");
        div.classList.toggle("list-show");
        switchDiv.classList.toggle("switch-active");
        // console.log(e)
    }

    const [center, setCenter] = useState([50.64684, 3.129261]);
    const [zoom, setZoom] = useState(16);

    return (
        <div id="home-page">
            <div ref={listDiv} className="home-page-list">
                <ul>
                    {json.map((mark) => {
                        return (
                            <li>
                                <a onClick={() => setCenter([mark.location.latitude + 0.003, mark.location.longitude])} width={50} anchor={[mark.location.latitude, mark.location.longitude]}>
                                    <p>{mark.name}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div ref={mapDiv} id="map">
                <Map
                    center={center}
                    zoom={zoom}
                    onBoundsChanged={({ center, zoom }) => {
                        setCenter(center);
                        setZoom(zoom);
                    }}
                    className="map"
                    mouseEvents={true}
                    metaWheelZoom={false}
                >
                    <Marker color="red" width={50} anchor={[50.60684, 3.15339]} />
                    {json.map((mark) => {
                        // console.log(mark)
                        return (
                            <Marker onClick={() => setCenter([mark.location.latitude + 0.003, mark.location.longitude])} width={50} anchor={[mark.location.latitude, mark.location.longitude]}>
                                <MarkerIcon className="markeeer" />
                            </Marker>
                        );
                    })}
                </Map>
                <div className="recherche">
                    <div className="search-wraper">
                        <input type="text" />
                        <a id="search-loc-icon" href="#" onClick={() => getLocation()}>
                            <img src="/images/localisation.svg" alt="" />
                        </a>
                        <a id="search-search-ison" href="#">
                            <img src="/images/search.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-bot">
                <div className="switch">
                    <a id="switch-but-map" onClick={(e) => toggleView(e)} href="#">
                        Carte
                    </a>
                    <a id="switch-but-list" onClick={(e) => toggleView(e)} href="#">
                        Liste
                    </a>
                    <div className="switch-bg"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
