import { useState } from "react";

export default function Bills() {
  const years = ["2019", "2020", "2021", "2022", "2023", "2024"];
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const billsByClients = [
    {
      nameUc: "SELFWAY TREINAMENTO PERSONALIZADO LTDA",
      numUc: '8888888888',
      distributor: "CEMIG",
      client: "SELFWAY TREINAMENTO PERSONALIZADO LTDA",
      bills: [
        { month: 'MAI', year: '2023' },
        { month: 'JUN', year: '2023' },
        { month: 'JUL', year: '2023' },
        { month: 'AGO', year: '2023' },
        { month: 'SET', year: '2023' },
        { month: 'OUT', year: '2023' },
        { month: 'NOV', year: '2023' },
        { month: 'DEZ', year: '2023' },
        { month: 'JAN', year: '2024' },
        { month: 'FEV', year: '2024' },
        { month: 'MAR', year: '2024' },
        { month: 'ABR', year: '2024' },
        { month: 'MAI', year: '2024' },
        { month: 'JUN', year: '2024' },
        { month: 'JUL', year: '2024' },
        { month: 'AGO', year: '2024' },
        { month: 'SET', year: '2024' },
      ]
    },
    {
      nameUc: "JOSE MESALY FONSECA DE CARVALHO 52024156",
      numUc: '8888888888',
      distributor: "CEMIG",
      client: "JOSE MESALY FONSECA DE CARVALHO 52024156",
      bills: [
        { month: 'MAI', year: '2023' },
        { month: 'JUN', year: '2023' },
        { month: 'JUL', year: '2023' },
        { month: 'AGO', year: '2023' },
        { month: 'SET', year: '2023' },
        { month: 'OUT', year: '2023' },
        { month: 'NOV', year: '2023' },
        { month: 'DEZ', year: '2023' },
        { month: 'JAN', year: '2024' },
        { month: 'FEV', year: '2024' },
        { month: 'MAR', year: '2024' },
        { month: 'ABR', year: '2024' },
        { month: 'MAI', year: '2024' },
        { month: 'JUN', year: '2024' },
        { month: 'JUL', year: '2024' },
        { month: 'AGO', year: '2024' },
        { month: 'SET', year: '2024' },
      ]
    }
  ]
  const distributors = ["CEMIG"];
  const clients = ["SELFWAY TREINAMENTO PERSONALIZADO LTDA", "JOSE MESALY FONSECA DE CARVALHO 52024156"]
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showModalClients, setShowModalClients] = useState(false);
  const [showModalDistributors, setShowModalDistributors] = useState(false);
  const [filtersClients, setFiltersClients] = useState([]);
  const [filtersDist, setFiltersDist] = useState([]);

  const deleteClient = (name: string) => {
    setFiltersClients((filtersClients) => filtersClients.filter((item) => item !== name))
  }

  const deleteDistributor = (name: string) => {
    setFiltersDist((filtersDist) => filtersDist.filter((item) => item !== name))
  }

  return (
    <>

      <div className="App">
        <header className="">
          <h1 className="text-green-900 text-3xl text-gray-900 mb-3">Faturas</h1>
          <h5 className="text-gray-400 text-base text-gray-900 ">Faturas &gt;</h5>
        </header>
        <section className="mt-5 flex-1	items-center	 flex-row" >
          <nav style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start' }} >
            <button onClick={() => setShowModalClients(true)} type="button" className={filtersClients.length > 0 ? "text-white bg-green-900 hover:bg-green-900  font-thin	rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2" : "text-white bg-gray-300 hover:bg-gray-300  font-thin	rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>
              &nbsp;Consumidores
            </button>
            <button onClick={() => setShowModalDistributors(true)} type="button" className={filtersDist.length > 0 ? "text-white bg-green-900 hover:bg-green-900  font-thin	rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2" : "text-white bg-gray-300 hover:bg-gray-300  font-thin	rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>
              &nbsp;Distribuidoras
            </button>
            {showModalClients ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl px-10	">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Consumidores
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModalClients(false)}
                        >
                          <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-8 flex-1  mb-1">
                        <form className="flex items-center max-w-sm mx-auto">
                          <label htmlFor="simple-search" className="sr-only">Search</label>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                              </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                          </div>
                          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-green-900 rounded-lg border border-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                          </button>
                        </form>
                      </div>
                      <div className="relative flex-auto  px-10 mb-8 border mx-8 pl-2" style={{ marginTop: "-36px" }}>
                        {
                          clients.map((client) => {
                            return <div className="flex items-center" >
                              <input id="default-checkbox" onChange={(e: any) => e.target.checked == true ? setFiltersClients(oldArray => [client as never, ...oldArray]) : deleteClient(client)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{client}</label>
                            </div>

                          })
                        }

                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModalClients(false)}
                        >
                          Cancelar
                        </button>
                        <button
                          className="bg-green-900 text-white active:bg-green-900 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModalClients(false)}
                        >
                          Filtrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {showModalDistributors ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl px-10	">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Distribuidores
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModalDistributors(false)}
                        >
                          <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-8 flex-1  mb-1">
                        <form className="flex items-center max-w-sm mx-auto">
                          <label htmlFor="simple-search" className="sr-only">Search</label>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                              </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                          </div>
                          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                          </button>
                        </form>
                      </div>
                      <div className="relative flex-auto  px-10 mb-8 border mx-8 pl-2" style={{ marginTop: "-36px" }}>
                        {
                          distributors.map((distributor) => {
                            return <div className="flex items-center" >
                              <input id="default-checkbox" onChange={(e: any) => e.target.checked == true ? setFiltersDist(oldArray => [distributor as never, ...oldArray]) : deleteDistributor(distributor)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{distributor}</label>
                            </div>

                          })
                        }
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModalDistributors(false)}
                        >
                          Cancelar
                        </button>
                        <button
                          className="bg-green-900 text-white active:bg-green-900 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModalDistributors(false)}
                        >
                          Filtrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {
              years.map((year) => {
                return <button onClick={() => setSelectedYear(year)} type="button" className={selectedYear === year ? "text-white  hover:bg-green-900  font-thin	rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center me-2 mb-2 bg-green-900" : "text-white  hover:bg-green-900  font-thin	rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center me-2 mb-2 bg-gray-300"} >{year}</button>
              })
            }
          </nav>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-green-900 dark:text-gray-400 font-normal	">
              <thead className="whitespace-nowrap	font-normal text-large text-white bg-green-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3" >
                    Nome de UC
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Número de UC
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Distribuídora
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Consumidor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fev
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Abr
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mai
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jun
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jul
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ago
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Set
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Out
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nov
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dez
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  billsByClients.map((billsClient, key) => {
                    return <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                      <td className="px-6 py-4">
                        {billsClient.nameUc}
                      </td>
                      <td className="px-6 py-4">
                        {billsClient.numUc}

                      </td>
                      <td className="px-6 py-4">
                        {billsClient.distributor}
                      </td>
                      <td className="px-6 py-4">
                        {billsClient.client}
                      </td>
                      {
                        months.map((month) => {
                          return <td className="px-6 py-4">{billsByClients[key].bills.filter((bill) => bill.year == selectedYear).map((bill) => {
                            return bill.month.toUpperCase() == month.toUpperCase() ?
                              'ok' : ''
                          }).indexOf('ok') != -1 ? 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg> : 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-300">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg> 
                          }
                          </td>
                        })


                      }
                    </tr>
                  })
                }

              </tbody>
            </table>
          </div>


        </section >
      </div >
    </>
  );
}