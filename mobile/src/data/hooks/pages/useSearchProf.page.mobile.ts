import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Colors } from "react-native-paper";

export default function useSearchProf() {
  const [autoCep, setAutoCep] = useState(""),
    [coords, setCoords] = useState<{
      latitude: number;
      longitude: number;
    }>();

  useEffect(() => {
    (async () => {
      try {
        const gpsAllowed = await reqPermission();

        if (gpsAllowed) {
          setCoords(await takeCoords());
        }
      } catch (err) {}
    })();
  }, []);

  useEffect(() => {(
      async() => {
          try {
              if(coords){
                  setAutoCep(await takeCep())
              }
          } catch (err) {}
      }
  )}, [coords])

  async function reqPermission(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === "granted";
    } catch (err) {
      return false;
    }
  }

  async function takeCoords(): Promise<{
    latitude: number;
    longitude: number;
  }> {
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    return location.coords;
  }
  async function takeCep(): Promise<string> {
    if (coords) {
      const address = await Location.reverseGeocodeAsync(coords);
      if (address.length > 0) {
        return address[0].postalCode || "";
      }
    }
    return "";
  }

  return { autoCep };
}
