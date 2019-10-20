import React, {useRef, useEffect} from 'react';

export type GoogleAutoCompleteParams = {
  onAutocompleteChange: (inputValue: google.maps.places.PlaceResult | undefined) => void;
}

export default function GoogleAutoComplete({onAutocompleteChange}: GoogleAutoCompleteParams) {
  const inputRef = useRef<HTMLInputElement>(null);

  console.log('window.google', window.google);

  useEffect(() => {
    if (inputRef.current) {
      const autoComplete = new google.maps.places.Autocomplete(inputRef.current);
      autoComplete.addListener('place_changed', () => {
        onAutocompleteChange(autoComplete.getPlace());
      });
    }
  }, [inputRef]);

  return <div>
    <input ref={inputRef}/>
  </div>
};
