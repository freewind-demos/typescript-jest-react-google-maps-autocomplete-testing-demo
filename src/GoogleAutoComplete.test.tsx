import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import GoogleAutoComplete from "./GoogleAutoComplete";

const googleMapUrl = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBa98YDQd9Xcm8qmYkORg8NcQklSKbaBHo';

describe('GoogleAutoComplete', () => {
  it('handle onChange', () => {
    const mockOnChange = jest.fn()
    const wrapper = render(
      <>
        <script src={googleMapUrl}></script>
        <GoogleAutoComplete onAutocompleteChange={mockOnChange}/>
      </>
    )

    const inputNode = wrapper.container.querySelector('input')!

    fireEvent.change(inputNode, {target: {value: 'react'}});
    expect(mockOnChange).toHaveBeenCalledWith('react');
  });
})
