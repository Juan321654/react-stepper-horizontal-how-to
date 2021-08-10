import { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./App.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const sections = [
    { title: "Basic Details" },
    { title: "Employment Details" },
    { title: "Review" },
  ];

  console.log(currentPage);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="App">
      <h1>Form wizard</h1>
      <form onSubmit={handleSubmit}>
        <Stepper
          id="stepper"
          steps={sections}
          activeStep={currentPage}
          activeColor="gray"
          defaultBarColor="#E0E0E0"
          completeBarColor="#E0E0E0"
          lineMarginOffset={15}
        />

        {currentPage === 1 && (
          <>
            <Step1 />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            <Step2 />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={prev}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}

        {currentPage === 3 && (
          <>
            <Step3 />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={prev}>Back</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
