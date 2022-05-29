import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) { //Função que vai calcular o fatorial
    if (n < 0) return -1 // se o numero for menor que 0 vai retornar -1
    if( n === 0) return 1 // se o número for 0 vai retornar 1
    return calcFatorial(n - 1) * n  // vai multiplicar o número pelos seus antecessores 
}

function calcResultado(a) {
    if (a === 1) return 'impar'
    if (a !== 0 ) return 'par'
    return calcResultado (a - 1) *a
}

    const UseEffect = (props) => {
    const [number, setNumber] = useState(1) //o valor vai ser iniciado em 1 (INPUT)
    const [fatorial, setFatorial] = useState (1)  // o valor vai ser iniciado em 1 (SPAN)
    
    useEffect(function(){
        setFatorial(calcFatorial(number)) // Aqui é complexo, o setFatorial é nosso SPAN que vai ser gerado na tela
        // ele ta pegando a função de calcular o fatorial ali de cima, e esta passando o props de numer que no caso é nosso INPUT
    }, [number])

    useEffect(function(){
        if(fatorial > 100000) { // esse useeffects é responsavel por modificar alguma coisa ele dispara uma nova renderização quando nosso valor é mudado.
            document.title = 'Eita!!'  //aqui quando o valor de fatorial ser maior que 100000 ele vai mudar nosso titulo da pagina para ' eita '
        }
        if (fatorial < 100000) { // aqui é a mesma coisa porem com o valor menor que 100000
            document.title ='Safe'
        }
    }, [fatorial]) // aqui ele ta passando esses codigos a cima para que seja aplicado no fatorial

    const [status, setStatus] = useState('impar')
    
    
    useEffect(function(){
        setStatus(number % 2 === 0 ? 'par' : 'impar')
    },[number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className='text'>Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'não existe' : fatorial }</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className='text'>Par ou impar?: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
