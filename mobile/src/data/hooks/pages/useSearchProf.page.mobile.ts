import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function useSearchProf() {
    const [autoCep, setAutoCep] = useState(''),
        [coordenadas, setCoordenadas] = useState<{
            latitude: number;
            longitude: number;
        }>();

    useEffect(() => {
        (async () => {
            try {
                const gpsAllowed = await takePermission();
                if (gpsAllowed) {
                    setCoordenadas(await takeCoords());
                }
            } catch (error) {}
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (coordenadas) {
                    setAutoCep(await takeCep());
                }
            } catch (error) {}
        })();
    }, [coordenadas]);

    async function takePermission(): Promise<boolean> {
        try {
            const {
                status,
            } = await Location.requestForegroundPermissionsAsync();
            return status === 'granted';
        } catch (error) {
            return false;
        }
    }

    async function takeCoords(): Promise<{
        latitude: number;
        longitude: number;
    }> {
        const position = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
        });

        return position.coords;
    }

    async function takeCep(): Promise<string> {
        if (coordenadas) {
            const address = await Location.reverseGeocodeAsync(coordenadas);
            if (address.length > 0) {
                return address[0].postalCode || '';
            }
        }
        return '';
    }

    return {
        autoCep,
    };
}