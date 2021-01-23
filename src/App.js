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
                // menuIsOpen
            />
        </div>
        <div className="infoContent">
            <p>
             <strong>Issue:</strong> Large Data in <code>react-select</code> fixed.
            </p>
            <a
              className="App-link"
              href="https://react-select.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React Select
            </a>

        </div>
      </header>
    </div>
  );
}

export default App;
