import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import { useSearchInputController } from "./searchInputController";

const PlacesAutocomplete = ({setCoord}: any) => {
  const { ready, value, status, data, fn } = useSearchInputController(setCoord);

  return (
    <div ref={fn.ref}>
      <input
        value={value}
        onChange={fn.handleInput}
        disabled={!ready}
        placeholder="Enter a city"
        aria-label="Search city"
      />
      {status === "OK" && 
        <ul>
          {data.map((suggestion) => {
            return (
              <li  key={suggestion.place_id} onClick={fn.handleSelect(suggestion)}>{suggestion.structured_formatting.main_text} {suggestion.structured_formatting.secondary_text}</li>
              )
          })}
        </ul>
      }
    </div>
  );
};

export default PlacesAutocomplete;