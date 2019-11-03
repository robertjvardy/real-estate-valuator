/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import Styles from "../../Styles";

const Calculator = props => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Calculator</h1>
      <Styles>
        <Form
          onSubmit={async values => {
            axios
              .post("http://localhost:5000/api/", { ...values })
              .then(response => {
                console.log(response.data, props.updateValue);
                props.updateValue(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Year Built</label>
                <Field
                  name="yearBuilt"
                  component="input"
                  type="text"
                  placeholder="Year Built"
                />
              </div>
              <div>
                <label>Stories</label>
                <Field
                  name="stories"
                  component="input"
                  type="text"
                  placeholder="Stories"
                />
              </div>
              <div>
                <label>Bedrooms</label>
                <Field
                  name="bedrooms"
                  component="input"
                  type="text"
                  placeholder="Bedrooms"
                />
              </div>
              <div>
                <label>Full Bathrooms</label>
                <Field
                  name="fullBathrooms"
                  component="input"
                  type="text"
                  placeholder="Full Bathrooms"
                />
              </div>
              <div>
                <label>Half Bathrooms</label>
                <Field
                  name="halfBathrooms"
                  component="input"
                  type="text"
                  placeholder="Half Bathrooms"
                />
              </div>
              <div>
                <label>Livable Square Feet</label>
                <Field
                  name="livableSquareFeet"
                  component="input"
                  type="text"
                  placeholder="Livable Square Feet"
                />
              </div>
              <div>
                <label>Total Square Feet</label>
                <Field
                  name="totalSquareFeet"
                  component="input"
                  type="text"
                  placeholder="Total Square Feet"
                />
              </div>
              <div>
                <label>Garage Square Feet</label>
                <Field
                  name="garageSquareFeet"
                  component="input"
                  type="text"
                  placeholder="Garage Square Feet"
                />
              </div>
              <div>
                <label>Fireplace</label>
                <Field
                  name="fireplace"
                  component="input"
                  type="checkbox"
                  placeholder="Fireplace"
                />
              </div>
              <div>
                <label>Pool</label>
                <Field
                  name="pool"
                  component="input"
                  type="checkbox"
                  placeholder="Pool"
                />
              </div>
              <div>
                <label>Central Heating</label>
                <Field
                  name="centralHeating"
                  component="input"
                  type="checkbox"
                  placeholder="Central Heating"
                />
              </div>
              <div>
                <label>Central Cooling</label>
                <Field
                  name="centralCooling"
                  component="input"
                  type="checkbox"
                  placeholder="Central Cooling"
                />
              </div>
              <div>
                <label>Garage Type</label>
                <Field
                  name="garageType"
                  component="select"
                  placeholder="Central Cooling"
                >
                  <option value="#ff0000">Attached</option>
                  <option value="#00ff00">Detatched</option>
                  <option value="#0000ff">None</option>
                </Field>
              </div>

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </Styles>
    </div>
  );
};

export default Calculator;
