

const AreaProgressChart = ({statValues}) => {

  const data = [
    {
      id: 1,
      name: "Consumo de Energia Elétrica (kWh)",
      percentValues: statValues.total_cons,
    },
    {
      id: 2,
      name: "Energia Compensada (kWh)",
      percentValues: statValues.total_com_qt,
    },
    {
      id: 3,
      name: "Valor Total sem GD(R$)",
      percentValues: statValues.total_s_gd,
    },
    {
      id: 4,
      name: "Economia GD (R$)",
      percentValues: statValues.total_eco_gd,
    }
  ];

  return (
    <div className="progress-bar border-2	mt-5">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Variáveis de Interesse</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
