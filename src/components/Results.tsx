import { formatter } from "../util/calculos";

type ResultsProps = {
  results: {
    year: number;
    investmentValue: number;
    interest: number;
    totalinterest: number;
    investmentCapital: number;
  }[];
  inversionInicial: number;
};

export default function Results({ results, inversionInicial }: ResultsProps) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Año</th>
          <th>Valor de Inversión</th>
          <th>Interés (Año)</th>
          <th>Interés Total</th>
          <th>Capital Invertido</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInvested = yearData.investmentCapital;
          const totalInterest = yearData.totalinterest;
          const totalAmount = yearData.investmentValue;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(totalAmount)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
