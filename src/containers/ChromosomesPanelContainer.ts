import { connect } from "react-redux";
import { change_chromosome, change_text } from "../actions/index";
import { ChromosomesPanel } from "../components/Viewer/ControlPanel/SubPanels/ChromosomesPanel";

export const mapStateToProps = (state: {
  chromosome: string;
  organism: string;
  cell_type: string;
}) => {
  return {
    cell_type: state.cell_type,
    chromosome: state.chromosome,
    organism: state.organism
  };
};

export const mapDispatchToProps = {
  onChromosomeChange: change_chromosome,
  onTextChange: change_text
};

export const ChromosomesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChromosomesPanel);
