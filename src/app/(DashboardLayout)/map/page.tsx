'use client'

import { useEffect, useRef, useState } from "react"
import "@neshan-maps-platform/react-openlayers/dist/style.css"

import NeshanMap, { NeshanMapRef, OlMap, Ol } from "@neshan-maps-platform/react-openlayers"

function App() {
    const mapRef = useRef<NeshanMapRef | null>(null)

    const [ol, setOl] = useState<Ol>()
    const [olMap, setOlMap] = useState<OlMap>()
    const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null)

    const onInit = (ol: Ol, map: OlMap) => {
        setOl(ol)
        setOlMap(map)

        // Get the user's location
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
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

        <NeshanMap
            //     center={userLocation}
            mapKey="web.5d4589bb590945249a496c878c8d3f56"
            defaultType="neshan"
            onInit={onInit}
            zoom={13}
        ></NeshanMap>

    )
}

export default App
