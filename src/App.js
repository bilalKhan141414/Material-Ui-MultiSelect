import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import './App.css';
import {customStyle} from "./components/style.js"
import data from './data/data.json';
import {addUniqueKeyToOptions} from './helpers';
import SelectAsync from './components/SelectAsync';
function App() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(addUniqueKeyToOptions(data));
    setIsLoading(false);
  }, [setOptions])

  const onChangeHandler = (value, element) => {
    setSelectedOptions(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="infoContent">
          <p>
            Click on the select element and scroll down.
            Checking Change
          </p>
        </div>
        <div
            className={clsx("ASIN")}>
            <SelectAsync
                placeholder="Select product"
                name={"selectedOptions"}
                value={selectedOptions}
                onChangeHandler={onChangeHandler}
                fullWidth={true}
                Options={options}
                styles={customStyle}
                labelLimit="30"
                id="selectedOptions"
                isDisabled={false}
                isLoading={isLoading}
            />
        </div>
        <div className="infoContent">
            <p>
              <strong>Issue was:</strong> Large Data in <code>react-select</code>.
            </p>
            <p>
              And now the issue died.
            </p>
            <div>
              <a
                className="App-link"
                href="https://react-select.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React Select
              </a>
            </div>
            <br/>
            <div>
              <a
                className="App-link"
                href="https://github.com/bilalKhan141414/React-Single-Select-Large-Data-Bug-Fix"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My Git Hub Repo
              </a>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
