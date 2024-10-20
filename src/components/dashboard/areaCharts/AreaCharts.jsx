import AreaBarChart from "./AreaBarChart"
import AreaProgressChart from "./AreaProgressChart"

const AreaCharts = ({statValues}) => {
  return (
    <section className="content-area-charts">
      <AreaBarChart resultsEnergy={statValues.resultsEnergy} resultsFin={statValues.resultsFin}/>
      <AreaProgressChart statValues={statValues} />
    </section>
  )
}

export default AreaCharts
