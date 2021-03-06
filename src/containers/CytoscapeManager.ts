import { connect } from "react-redux";
import { change_chromosome, change_search } from "../actions/index";
import { Cytoscape_manager } from "../components/Viewer/Cytoscape_manager";

interface IFeatureNewMap {
  [key: string]: number;
}

interface ICytoscapeProps {
  chromosome: string;
  feature: string;
  features_new: IFeatureNewMap;
  search: string;
  organism: string;
  cell_type: string;
}

export const mapStateToProps = (state: ICytoscapeProps) => {
  return {
    cell_type: state.cell_type,
    chromosome: state.chromosome,
    feature: state.feature,
    features_new: state.features_new,
    organism: state.organism,
    search: state.search
  };
};

export const mapDispatchToProps = {
  onChromosomeChange: change_chromosome,
  onSearchChange: change_search
};

export const CytoscapeManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cytoscape_manager);
