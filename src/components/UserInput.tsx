import { type ChangeEvent } from "react";

type UserInputProps = {
  userInput: {
    inversionInicial: number;
    inversionAnual: number;
    interes: number;
    duracion: number;
  };
  onChange: (inputIdentifier: string, newValue: string) => void;
};

export default function UserInput({ userInput, onChange }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inversión Inicial</label>
          <input
            type="number"
            required
            value={userInput.inversionInicial}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onChange("inversionInicial", event.target.value)
            }
          />
        </p>
        <p>
          <label>Inversión Anual</label>
          <input
            type="number"
            required
            value={userInput.inversionAnual}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onChange("inversionAnual", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Interés Esperado (%)</label>
          <input
            type="number"
            required
            value={userInput.interes}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onChange("interes", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duración (años)</label>
          <input
            type="number"
            required
            value={userInput.duracion}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onChange("duracion", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
