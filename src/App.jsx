import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [input, setInput] = useState("");
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  const handleFun = (value) => {
    if (value === "C") {
      setInput("")
    }else if(value === "="){
      try {
        setInput(eval(input))
      } catch (error) {
        setInput("Error")
      }
    }else{
      setInput((prev) => prev + value);
    }
  };
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-gray-400">
        <section className="flex flex-col w-96 p-5 border border-black bg-white rounded-md">
          <section>
            <Input
              type="text"
              placeholder="0"
              value={input}
              readOnly
              className="text-end"
            />
          </section>
          <section className="grid grid-cols-4 gap-1">
            {buttons.map((btn, index) => (
              <Button className="mt-5" key={index} onClick={() => handleFun(btn)}>
                {btn}
              </Button>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
