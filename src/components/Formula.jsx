import { useState } from "react";
import "../styles/formulaCss.css";
const Formula = () => {
  const [volumenInicial, setVolumenInicial] = useState(null);
  const [volumenNecesario, setVolumenNecesario] = useState(null);
  const [graduacionInicial, setGraduacionInicial] = useState(null);
  const [graduacionFinal, setGraduacionFinal] = useState(null);
  //state errors
  const [errorMessage, setErrorMessage] = useState("");
  const [errorOn, setErrorOn] = useState(false);
  //state results
  const [result, setResult] = useState(false);

  //Global Functions
  const errorControl = (errorMessage) => {
    setErrorMessage(errorMessage);
    setErrorOn(true);
    setVolumenNecesario(null);
  }

  const formula = () => {
    // valores de la formula
    const V_i = parseFloat(volumenInicial);
    const G_i = parseFloat(graduacionInicial);
    const G_f = parseFloat(graduacionFinal);

    // ERRORES DE FORMULA
    //verificaciones de los valores
    if (isNaN(V_i) || isNaN(G_i) || isNaN(G_f)) {
      errorControl("Por favor, ingrese valores válidos");
      return
    }

    // verificaciones de grados
    if (G_i <= G_f) {
      errorControl("La graduación inicial debe ser mayor que la graduación final");
      return
    }

    //FORMULA
    const V_a = (V_i * (G_i - G_f)) / G_f;

    //ENTREGA DE DATOS
    setErrorOn(false);
    setVolumenNecesario(V_a);
  };

  //prueba de valores check :D

  return (
    <div className="formula">
      <h3>Calculadora de dilucion para alcohol</h3>
      <div className="form">
        <div>
          <label className="labelInput">
            <p className="text">Volumen inicial (ml)</p>
            <div className="inputCont">
              <input
                type="number"
                value={volumenInicial}
                onChange={(e) => setVolumenInicial(e.target.value)}
                className="inputValues"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="labelInput">
            <div className="divText">
              <p className="text">Graduación inicial</p>
              <p>(Grados °)</p>
            </div>
            <div className="inputCont">
              <input
                type="number"
                value={graduacionInicial}
                onChange={(e) => setGraduacionInicial(e.target.value)}
                className="inputValues"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="labelInput">
            <div className="divText">
              <p className="text">Graduación final</p>
              <p>(Grados °)</p>
            </div>
            <div className="inputCont">
              <input
                type="number"
                value={graduacionFinal}
                onChange={(e) => setGraduacionFinal(e.target.value)}
                className="inputValues"
              />
            </div>
          </label>
        </div>

        <div>
          <button onClick={formula} className="button">
            Calcular
          </button>
        </div>
      </div>
      {errorOn && <p className="error">{errorMessage}</p>}
      {volumenNecesario !== null && !isNaN(volumenNecesario) && (
        <p className="result">Volumen necesario (ml): {volumenNecesario.toFixed(2)}</p>
      )}
    </div>
  );
};

export default Formula;
