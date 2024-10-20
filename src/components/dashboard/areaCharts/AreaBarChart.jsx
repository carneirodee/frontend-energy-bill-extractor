import { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";
import { Dropdown } from "flowbite-react";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
];

const data1 = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
  {
    month: "Out",
    loss: 62,
    profit: 86,
  },
  {
    month: "Nov",
    loss: 55,
    profit: 78,
  },
  {
    month: "Dez",
    loss: 55,
    profit: 78,
  },
];

const AreaBarChart = ({ resultsEnergy, resultsFin }) => {
  const { theme } = useContext(ThemeContext);
  const [graphicDropDown, setGraphicDropDown] = useState('Resultados de Energia(kWh)')
  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart shadow border-2	mt-5">
      <div className="bar-chart-info" style={{ marginRight: 20, position: "relative" }}>
        <h5 className="bar-chart-title">
          Dados Consumo do Último ano
          <br />
          <Dropdown label={graphicDropDown} style={{ position: "absolute", zIndex: 99, color: "black", paddingRight: 10, paddingLeft: 10, backgroundColor: "white" }} dismissOnClick={true}>
            <Dropdown.Item onClick={() => setGraphicDropDown('Resultados de Energia(kWh)')} style={{ backgroundColor: 'white' }}>Resultados de Energia(kWh)</Dropdown.Item>
            <Dropdown.Item onClick={() => setGraphicDropDown('Resultados Financeiros(R$)')} style={{ backgroundColor: 'white' }}>Resultados Financeiros(R$)</Dropdown.Item>
          </Dropdown>
          <br />
        </h5>
      </div>
      <div className="bar-chart-wrapper" style={{ position: "relative", zIndex: -1, paddingTop: 10 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={graphicDropDown == "Resultados de Energia(kWh)" ? resultsEnergy : resultsFin}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="left"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey={graphicDropDown == "Resultados de Energia(kWh)" ? "consumed_energy" : "value_s_gd"}
              name={graphicDropDown == "Resultados de Energia(kWh)" ? "Energia KWh" : "Valor Total s/ GD"}
              fill="#052E16"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey={graphicDropDown == "Resultados de Energia(kWh)" ? "compensated_energy" : "value_eco_gd"}
              name={graphicDropDown == "Resultados de Energia(kWh)" ? "Energia Comp. kWh" : "Economia GD"}
              fill="#08602b"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
