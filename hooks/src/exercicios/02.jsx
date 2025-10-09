import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName
  )

  //function inicializarVar(){
    //console.count('Inicializou "name"!')
   // return window.localStorage.getItem('name') ?? initialName
  //}

  const [count, setCount] = React.useState(0)
  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() =>{
    window.localStorage.setItem('name', name)
    console.log('Componente autalizado!')
  }, [name])
  //este useEfect sera apenas usado quando o valor da variavel de estado name for alterado

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <button onClick={() => setCount(count + 1)}>
        contagem: {count}
      </button>
    </div>
  )
}

function Exercicio02() {
  return <Greeting  initialName="Nícolas" />
}

export default Exercicio02