import {useEffect, useState} from 'react';
import { Button, Nav } from 'src/components';
import {DeclaracaoService} from 'src/services';

export function Historico() {
  
  const [ declaracoes, setDeclaracoes ] = useState([]);

  async function getDeclaracoes() {

    const { data } = await DeclaracaoService.getDeclaracao();
      setDeclaracoes(data.declaracao);
      if (status === 201) {
          console.log('data', data);
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
                <p>
                <div class="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
                  <nav class="flex min-w-[240px] flex-col gap-1 p-1.5">
                    <div role="button" class="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                      { item.ano_fiscal}{ item.imposto_devido }
                    </div>
                  </nav>
                </div> 
                </p>)}
        <div className="justify-between gap-4 py-2" >
          <Button type="submit" variant="primary">Próximo</Button>
          <Button type="submit" variant="primary">Anterior</Button>
        </div>
      </div>
    </>
  );
}
