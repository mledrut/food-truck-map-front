import "../App.scss";
import { useState, useRef, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import json from "../components/test.json";
import { ReactComponent as MarkerIcon } from "../icons/cursor.svg";
import MarkerLoc from "../components/MarkerLoc";

function App() {

    const [rechercheInput, setRechercheInput] = useState("quoifeur")
    const [responseAutoComp, setResponseAutoComp] = useState([])
    const [center, setCenter] = useState([50.64684, 3.129261]);
    const [zoom, setZoom] = useState(16);
    const [geolocalisation, setGeolocalisation] = useState();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("error");
        }
    }
    function showPosition(position) {
        // console.log(position);
        setGeolocalisation([position.coords.latitude, position.coords.longitude]);
        setCenter([position.coords.latitude, position.coords.longitude]);
        setZoom(16);
    }
    function showLocMarker() {
        if (geolocalisation) {
            return(
                <Marker color="red" width={50} anchor={geolocalisation}>
                    <MarkerLoc />
                </Marker>
            )
        }
    }

    function getAutoComplete() {
        fetch(`https://api-adresse.data.gouv.fr/search/?q=31+rue+jacques+prevert+villeneuve`)
        .then((res) => res.json())
        .then((data) => {
            setResponseAutoComp(data.features)
            // console.log(data.features)
        })
    };
    
    // useEffect(() => {
    //     setRechercheConvert(rechercheInput.replace(/ /g,"+").toLocaleLowerCase());
    //     getAutoComplete()
    // }, [rechercheInput])

    function toggleView() {
        const switchDiv = document.querySelector(".switch-bg");
        const div = document.querySelector(".home-page-list");
        div.classList.toggle("list-show");
        switchDiv.classList.toggle("switch-active");
    }

    return (
        <div id="home-page">
            <div className="home-page-list">
                <ul>
                    {json.map((mark) => {
                        return (
                            <li>
                                <a href="/#" onClick={() => setCenter([mark.location.latitude + 0.003, mark.location.longitude])} width={50} anchor={[mark.location.latitude, mark.location.longitude]}>
                                    <p>{mark.name}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div id="map">
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
                    {showLocMarker()}
                    
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
                    <div className="recherche-container">
                        <div className="search-wraper">
                            <input onChange={(e) => setRechercheInput(e.target.value)} type="text" />
                            <a id="search-loc-icon" href="/#" onClick={() => getLocation()}>
                                <img src="/images/localisation.svg" alt="" />
                            </a>
                            <a onClick={() => getAutoComplete()} id="search-search-ison" href="/#">
                                <img src="/images/search.svg" alt="" />
                            </a>
                        </div>
                        {/* <div className="search-return">
                            <ul>
                                {
                                responseAutoComp.map(row => {
                                    return(
                                        <li>{row.properties.label}</li>
                                    )
                                })
                                }
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="home-bot">
                <div className="switch">
                    <a id="switch-but-map" onClick={(e) => toggleView(e)} href="/#">
                        Carte
                    </a>
                    <a id="switch-but-list" onClick={(e) => toggleView(e)} href="/#">
                        Liste
                    </a>
                    <div className="switch-bg"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
