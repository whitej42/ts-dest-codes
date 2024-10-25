import React, { useState } from "react";
import { FaArrowCircleRight, FaSave, FaEraser } from "react-icons/fa";
import "./HeadcodeGenerator.css"
import IconButton from '../IconButton/IconButton'

function HeadcodeGenerator() {
  const [trainClass, setTrainClass] = useState("");
  const [trainLetter, setTrainLetter] = useState("");
  const [serviceNumber, setServiceNumber] = useState("");
  const [headcode, setHeadcode] = useState("");
  const [randomLetter, setRandomLetter] = useState(false);
  const [randomService, setRandomService] = useState(false);

  // Options for the train class dropdown
  const trainClassOptions = [
    { label: "1. Express Passenger", value: "1" },
    { label: "2. Stopping Passenger", value: "2" },
    { label: "3. Express Parcels", value: "3" },
    { label: "4. Fast Freight", value: "4" },
    { label: "5. Empty Stock", value: "5" },
    { label: "6. Freight train which can run up to 60mph", value: "6" },
    { label: "7. Freight train which can run up to 45mph)", value: "7" },
    { label: "8. Freight train which can run up to 35 mph", value: "8" },
    { label: "9. Other passenger trains if specially authorised e.g. Channel Tunnel and some Avanti services", value: "9" },
  ];

  // Function to generate a random letter
  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  // Function to generate a random service number (00-99)
  const getRandomServiceNumber = () => {
    return String(Math.floor(Math.random() * 100)).padStart(2, '0');
  };

  // Generate the headcode based on the inputs
  const generateHeadcode = () => {
    let finalLetter = trainLetter;
    let finalServiceNumber = serviceNumber;

    // Generate random letter if checkbox is checked
    if (randomLetter) {
      finalLetter = getRandomLetter();
    }

    // Generate random service number if checkbox is checked
    if (randomService) {
      finalServiceNumber = getRandomServiceNumber();
    }

    // Ensure the form is filled correctly
    if (trainClass && finalLetter && finalServiceNumber) {
      const generatedHeadcode = `${trainClass}${finalLetter}${finalServiceNumber}`;
      setHeadcode(generatedHeadcode);
    } else {
      alert("Please fill in all fields to generate a headcode.");
    }
  };

  const clearFields = () => {
    setTrainClass("");
    setTrainLetter("");
    setServiceNumber("");
    setHeadcode("");
    setRandomLetter(false);
    setRandomService(false);
  }

  return (
    <div className="generator-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generateHeadcode();
        }}
      > 
        <div className="label">
          <span className="label-title">Train Class:</span>
          <select
            value={trainClass}
            onChange={(e) => setTrainClass(e.target.value)}
            required>
            <option value="" disabled>
              Select Train Class
            </option>
            {trainClassOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className="label">
          <span className="label-title">Train Letter (A-Z):</span>
          <input className="text-input"
            type="text"
            maxLength="1"
            value={trainLetter}
            onChange={(e) => setTrainLetter(e.target.value)}
            pattern="[A-Z]"
            required={!randomLetter} // Make required if random is not selected
            disabled={randomLetter}
            placeholder={randomLetter ? "Random" : "Train Letter (A-Z)"}
          />
          <input className="checkbox"
            type="checkbox"
            checked={randomLetter}
            onChange={() => {
                setRandomLetter(prev => !prev);
                if (!randomLetter) {
                  setTrainLetter(""); // Clear input if checkbox is checked
                }
            }}
          />
            <span>Generate Random Letter</span>
        </div>
        <br />
        <div className="label">
        <span className="label-title">Service Number (00-99):</span>
          <input className="text-input"
            type="text"
            maxLength="2"
            value={serviceNumber}
            onChange={(e) => setServiceNumber(e.target.value)}
            pattern="[0-9]{2}"
            required={!randomService} // Make required if random is not selected
            disabled={randomService}
            placeholder={randomService ? "Random" : "Service Number (00-99)"}
          />
          <input className="checkbox"
            type="checkbox"
            checked={randomService}
            onChange={() => {
                setRandomService(prev => !prev);
                if (!randomService) {
                  setServiceNumber(""); // Clear input if checkbox is checked
                }
              }}
          />
            <span>Generate Random Letter</span>
        </div>
        {headcode && (
        <div>
          <div className="headcode-response">
            <h3>Generated Headcode: {headcode}</h3>
                {randomLetter && !randomService && (
                    <div className="regen-tip">Click Generate again to generate with a new letter code.</div>
                )}
                {randomService && !randomLetter && (
                    <div className="regen-tip">Click Generate again to generate with a new service number.</div>
                )}
                {randomLetter && randomService && (
                    <div className="regen-tip">Click Generate again to generate with a new letter and service number.</div>
                )}
          </div>
        </div>
      )}
        <br />
        <div className="button-row">
            <IconButton
                icon={FaArrowCircleRight}
                text="Generate"
                baseColor="#21b698"
                onClick={generateHeadcode}
            />
            <IconButton
                icon={FaSave}
                text="Save"
                baseColor="#cbdf1d"
            />
            <IconButton
                icon={FaEraser}
                text="Clear"
                baseColor="#e26a6b"
                onClick={clearFields}
            />
        </div>
      </form>
    </div>
  );
}

export default HeadcodeGenerator;