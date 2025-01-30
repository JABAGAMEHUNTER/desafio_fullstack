import {useEffect, useState} from 'react';
import { Button, Nav } from 'src/components';
import {DeclaracaoService} from 'src/services';

export function Historico() {
  
  const [ declaracoes, setDeclaracoes ] = useState([]);

  async function getDeclaracoes() {

    const { status, data } = await DeclaracaoService.getDeclaracao();
      setDeclaracoes(data.declaracao);
      if (status === 200) {
        console.log(data.declaracao);
      }
    }
    
    useEffect(() =>{getDeclaracoes()}, []);
      
     return (
    <>
      <Nav />
      <div className="container">
      <h1>Historico de Declarações</h1>
      <p>
      </p>

                { declaracoes.map(item =>
                <a className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
                  <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                      { item.ano_fiscal}{ item.imposto_devido }
                  </nav>
                </a> 
                )}
        <div className="justify-between gap-4 py-2" >
          <Button type="submit" variant="primary">Próximo</Button>
          <Button type="submit" variant="primary">Anterior</Button>
        </div>
      </div>
    </>
  );
}
