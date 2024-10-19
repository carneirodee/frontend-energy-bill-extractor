export default function Bills() {
    const years = ["2019", "2020", "2021", "2022", "2023", "2024"];

    return (
      <>
      <h1>Faturas</h1>
    <div className="App">
      <header className="">
      </header>
      
      <section>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
        <button>Consumidores</button>
        <button>Distribuídora</button>
        {
            years.map((year) => {
              return <button>{year}</button>
            })
          }
      </div>
        <table>
          <tr>
            <th>Nome UC</th>
            <th>Número de UC</th>
            <th>Distribuídora</th>
            <th>Consumidor</th>
            <th>Jan</th>
            <th>Fev</th>
            <th>Mar</th>
            <th>Abr</th>
            <th>Mai</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Ago</th>
            <th>Set</th>
            <th>Out</th>
            <th>Nov</th>
            <th>Dez</th>
          </tr>
          <tr>
         
          </tr>
        </table>
      </section>
    </div>
      </>
    );
  }