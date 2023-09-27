'use client'

import { useEffect, useRef, useState } from "react"
import "@neshan-maps-platform/react-openlayers/dist/style.css"

import NeshanMap, { NeshanMapRef, OlMap, Ol } from "@neshan-maps-platform/react-openlayers"

function App() {
    const mapRef = useRef<NeshanMapRef | null>(null)

    const [ol, setOl] = useState<Ol>()
    const [olMap, setOlMap] = useState<OlMap>()

    const onInit = (ol: Ol, map: OlMap) => {
        setOl(ol)
        setOlMap(map)
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
            mapKey="web.5d4589bb590945249a496c878c8d3f56"
            defaultType="neshan"
            center={{ latitude: 35.7665394, longitude: 51.4749824 }}
            style={{ height: "100%", width: "100%" }}
            onInit={onInit}
            zoom={13}
        />
    )
}

export default App