import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
     useEffect(() => {
          api.get("transactions")
               .then(response => console.log(response.data))
     }, []);

     return (
          <Container>
               <table>
                    <thead>
                         <tr>
                              <th>Titulo</th>
                              <th>Valor</th>
                              <th>Categoria</th>
                              <th>Data</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>Desenvolvimento</td>
                              <td className="deposit">R$ 12.000</td>
                              <td>Desenvolvimento</td>
                              <td>20/10/2021</td>
                         </tr>
                    </tbody>
                    <tbody>
                         <tr>
                              <td>Aluguel</td>
                              <td className="wihtdraw">- R$ 1000,00</td>
                              <td>Habitação</td>
                              <td>20/10/2021</td>
                         </tr>
                    </tbody>

               </table>

          </Container>

     )

}