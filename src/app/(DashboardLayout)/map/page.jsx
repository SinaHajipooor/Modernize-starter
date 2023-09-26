'use client'

import { useEffect, useRef, useState } from "react"
import NeshanMap from "@neshan-maps-platform/react-openlayers"
// If you want to use ol types like below, your project has to support typescript.


function App() {
    const mapRef = useRef(null)


    const [ol, setOl] = useState()
    const [olMap, setOlMap] = useState()


    const onInit = (ol, map) => {
        setOl(ol)
        setOlMap(map)


        setTimeout(() => {
            const view = map.getView()
            view.animate({
                center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
                zoom: 12,
                duration: 1000,
            })
        }, 2000)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (mapRef.current?.map) {
                mapRef.current?.map.setMapType("standard-night")
                clearInterval(interval)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <NeshanMap
                mapKey="service.a79d4b64968042dfb2a56af04b995c1d"
                defaultType="neshan"
                center={{ latitude: 35.7665394, longitude: 51.4749824 }}
                style={{ height: "48vh", width: "100%" }}
                onInit={onInit}
                zoom={13}
            ></NeshanMap>
            <hr />
            <NeshanMap
                ref={mapRef}
                mapKey="service.a79d4b64968042dfb2a56af04b995c1d"
                traffic={false}
                defaultType="dreamy"
                style={{ height: "48vh", width: "100%" }}
            ></NeshanMap>
        </>
    )
}


export default App